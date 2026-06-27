import { NextResponse } from 'next/server';
import client from '@/sanity/client';

export async function GET(request: Request) {
  // Security check: You should protect this endpoint with a secret token in production
  // e.g., if (request.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    // 1. Fetch RSS Feed (e.g., TechCrunch)
    const rssResponse = await fetch('https://techcrunch.com/feed/');
    const rssText = await rssResponse.text();
    
    // Note: For a robust app, you should install 'rss-parser' (npm i rss-parser)
    // Here is a simple regex extraction for demonstration purposes.
    const titleMatch = rssText.match(/<item>[\s\S]*?<title>(.*?)<\/title>/);
    const linkMatch = rssText.match(/<item>[\s\S]*?<link>(.*?)<\/link>/);
    const descMatch = rssText.match(/<item>[\s\S]*?<description><!\[CDATA\[(.*?)\]\]><\/description>/);

    const articleTitle = titleMatch ? titleMatch[1] : 'No Title Found';
    const articleLink = linkMatch ? linkMatch[1] : '';
    const articleDesc = descMatch ? descMatch[1] : 'No description found.';

    // 2. Call LLM (OpenAI example) to rewrite and summarize
    const openAiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [{
          role: 'system',
          content: 'You are an expert tech blog writer. Summarize the provided article into a professional, engaging blog post of 3 paragraphs. Return ONLY the blog post content in plain text or simple markdown.'
        }, {
          role: 'user',
          content: `Title: ${articleTitle}\n\nContent: ${articleDesc}`
        }]
      })
    });

    const openAiData = await openAiResponse.json();
    if (!openAiResponse.ok) {
        throw new Error(openAiData.error?.message || 'Failed to fetch from OpenAI');
    }
    
    const blogContent = openAiData.choices[0].message.content;

    // 3. Create Draft in Sanity
    // Important: Your @/sanity/client must be configured with a write token!
    // const writeClient = client.withConfig({ token: process.env.SANITY_API_WRITE_TOKEN });
    
    const newPost = {
      _type: 'post', // Your exact schema type
      _id: `drafts.agent-tech-${Date.now()}`, 
      title: `[AI Draft] ${articleTitle}`,
      slug: {
        _type: 'slug',
        current: `ai-draft-${Date.now()}`
      },
      // In Sanity, your post body is "blockContent" (Portable Text), not a simple string.
      // This is the simplest way to wrap a string into a Portable Text block:
      body: [
        {
          _type: 'block',
          _key: `block-${Date.now()}`,
          style: 'normal',
          markDefs: [],
          children: [
            {
              _type: 'span',
              _key: `span-${Date.now()}`,
              text: blogContent,
              marks: []
            }
          ]
        }
      ],
      // We removed sourceUrl because it does not exist in your post.ts schema!
    };

    // const sanityResult = await writeClient.create(newPost);

    return NextResponse.json({ 
      success: true, 
      message: 'Draft created successfully (Simulation)',
      simulatedSanityPayload: newPost 
    });

  } catch (error: any) {
    console.error("Agent Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
