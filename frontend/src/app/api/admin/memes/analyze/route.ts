import { dbConnect } from '@/lib/mongodb';
import { failure, success } from '@/lib/response';
import { MemeAsset } from '@/models/MemeAsset';
import { getOpenAI } from '@/lib/openai';
import OpenAI from 'openai';


export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();
    const { ids } = body as { ids: string[] };

    if (!ids?.length) {
      return failure('No meme ids provided.', 400);
    }

    const items = await MemeAsset.find({ _id: { $in: ids } });
    const analyzedItems = [];

    for (const item of items) {
      item.reviewStatus = 'analyzing';
      await item.save();

      try {
        const frameData = body.frameData; // Base64 image data
        
        const prompt = `
You are categorizing meme video assets for a public meme library.

Return ONLY strict JSON with this shape (no markdown, no code fences):
{
  "title": string,
  "category": string,
  "tags": string[],
  "description": string,
  "confidence": number
}

Allowed categories: Reaction, Shock, Celebration, Working, Cinematic, Funny, Sad, Gaming, Confused, Intro, Outro, Meme Pack, Random, Animals, Career

Asset title: ${item.title}
Original filename: ${item.originalFileName}

Use the content of the image (if provided) and the filename to infer the best metadata.
Keep description under 20 words.
`.trim();

        const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
          { 
            role: 'user', 
            content: frameData 
              ? [
                  { type: 'text', text: prompt },
                  { 
                    type: 'image_url', 
                    image_url: { url: frameData.startsWith('data:') ? frameData : `data:image/jpeg;base64,${frameData}` } 
                  }
                ]
              : prompt 
          }
        ];

        const response = await getOpenAI().chat.completions.create({
          model: 'gpt-4o-mini',
          messages,
          temperature: 0.3,
        });

        const outputText = response.choices[0]?.message?.content ?? '{}';
        const parsed = JSON.parse(outputText.replace(/```json|```/g, '').trim());

        item.aiSuggestion = {
          title: parsed.title || item.title,
          category: parsed.category || 'Uncategorized',
          tags: Array.isArray(parsed.tags) ? parsed.tags : [],
          description: parsed.description || '',
          confidence: typeof parsed.confidence === 'number' ? parsed.confidence : 0.5,
          status: 'analyzed',
        };
        item.reviewStatus = 'analyzed';
        await item.save();
        analyzedItems.push(item);
      } catch (err) {
        console.error('[analyze] item error:', err);
        item.aiSuggestion = {
          title: item.title,
          category: 'Uncategorized',
          tags: [],
          description: '',
          confidence: 0,
          status: 'failed',
        };
        item.reviewStatus = 'uploaded';
        await item.save();
      }
    }

    return success({ message: 'Analysis completed.', items: analyzedItems });
  } catch (error) {
    console.error('[analyze]', error);
    return failure('Analyze failed.');
  }
}
