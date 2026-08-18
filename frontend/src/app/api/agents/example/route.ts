import { NextResponse } from 'next/server';
import client from '@/sanity/client';

export const dynamic = 'force-dynamic';


export async function GET(request: Request) {
  // Security check: You should protect this endpoint with a secret token in production
  // e.g., if (request.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    // 1. Fetch RSS Feeds (Mix of Startups, Design, and Development)
    const feeds = [
      'https://techcrunch.com/category/startups/feed/', // Startups & Business
      'https://www.smashingmagazine.com/feed/', // Web Design & UX
      'https://tympanus.net/codrops/feed/' // UI/UX & Frontend Dev
    ];
    
    const items = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/; // Without 'g' flag so we just get the first one

    for (const feedUrl of feeds) {
      try {
        const rssResponse = await fetch(feedUrl);
        const rssText = await rssResponse.text();
        
        const match = itemRegex.exec(rssText);
        if (match) {
          const itemContent = match[1];
          const titleMatch = itemContent.match(/<title>(.*?)<\/title>/);
          const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
          const descMatch = itemContent.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) 
                            || itemContent.match(/<description>(.*?)<\/description>/);
          
          // Attempt to extract an image
          const imageMatch = itemContent.match(/<media:content[^>]+url="([^"]+)"/i) 
                             || itemContent.match(/<enclosure[^>]+url="([^"]+)"/i)
                             || itemContent.match(/<img[^>]+src="([^"]+)"/i);
          
          // Clean up CDATA and HTML Entities if present in title
          let rawTitle = titleMatch ? titleMatch[1].replace(/<!\[CDATA\[(.*?)\]\]>/, '$1') : 'No Title Found';
          let cleanTitle = rawTitle
            .replace(/&#8217;/g, "'")
            .replace(/&#8220;/g, '"')
            .replace(/&#8221;/g, '"')
            .replace(/&amp;/g, '&');

          items.push({
            articleTitle: cleanTitle,
            articleLink: linkMatch ? linkMatch[1] : '',
            articleDesc: descMatch ? descMatch[1] : 'No description found.',
            imageUrl: imageMatch ? imageMatch[1] : null
          });
        }
      } catch (feedError) {
        console.error(`Failed to fetch feed ${feedUrl}:`, feedError);
      }
    }

    const createdArticles = [];
    const whatsappSummaries = [];

    // --- AI AUTHOR SETUP ---
    // We define the AI Author. If using writeClient, you can ensure this author exists first.
    const aiAuthorId = 'author-flexiti-agent';
    const aiAuthorPayload = {
      _id: aiAuthorId,
      _type: 'author',
      name: 'Flexiti Agent',
      slug: {
        _type: 'slug',
        current: 'flexiti-agent'
      },
      role: 'AI Auto Blogger',
      bio: 'An automated agent created to bring you the latest tech summaries.'
    };
    
    // Ensure you have SANITY_API_WRITE_TOKEN in your .env
    const writeClient = client.withConfig({ token: process.env.SANITY_API_WRITE_TOKEN });

    // Actually create the author so the reference doesn't fail!
    try {
      await writeClient.createIfNotExists(aiAuthorPayload);
    } catch (authorErr) {
      console.error("Failed to create AI Author:", authorErr);
    }

    const todayStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // 2. Process each item with the LLM
    for (const item of items) {
      const openAiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          response_format: { type: "json_object" },
          messages: [{
            role: 'system',
            content: 'You are an expert tech blog writer. Respond ONLY with a valid JSON object containing two fields: "blogContent" (a professional 3-paragraph blog post) and "whatsappSummary" (a short, engaging summary with emojis, suitable for sharing on WhatsApp).'
          }, {
            role: 'user',
            content: `Title: ${item.articleTitle}\n\nContent: ${item.articleDesc}`
          }]
        })
      });

      const openAiData = await openAiResponse.json();
      if (!openAiResponse.ok) {
        throw new Error(openAiData.error?.message || 'Failed to fetch from OpenAI');
      }
      
      const { blogContent, whatsappSummary } = JSON.parse(openAiData.choices[0].message.content);

      // 3. Create Draft in Sanity
      let imageAssetId = null;
      if (item.imageUrl) {
        let sanImageUrl = item.imageUrl;
        if (sanImageUrl.startsWith('//')) sanImageUrl = 'https:' + sanImageUrl;
        
        try {
          const imageRes = await fetch(sanImageUrl);
          if (imageRes.ok) {
            const imageBuffer = await imageRes.arrayBuffer();
            const asset = await writeClient.assets.upload('image', Buffer.from(imageBuffer));
            imageAssetId = asset._id;
          } else {
            console.warn("Image fetch failed, skipping sanity image upload for:", sanImageUrl);
          }
        } catch (e) {
          console.error("Failed to upload image to sanity", e);
        }
      }

      const newArticle = {
        _type: 'article',
        _id: `agent-tech-${Date.now()}-${Math.floor(Math.random() * 1000)}`, // Removed 'drafts.' prefix to publish instantly
        title: item.articleTitle, // Removed [AI Draft]
        slug: {
          _type: 'slug',
          current: `ai-draft-${Date.now()}-${Math.floor(Math.random() * 1000)}`
        },
        description: whatsappSummary,
        category: 'tech',
        publishedAt: new Date().toISOString(),
        author: { _type: 'reference', _ref: aiAuthorId },
        image: imageAssetId ? { _type: 'image', asset: { _type: 'reference', _ref: imageAssetId } } : undefined,
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
        ]
      };

      // ACTUALLY CREATE IN SANITY
      try {
        await writeClient.create(newArticle);
      } catch (sanityError) {
        console.error("Sanity Write Error (Check SANITY_API_WRITE_TOKEN):", sanityError);
      }
      
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flexitistudio.com';
      const internalLink = `${siteUrl}/blog/${newArticle.slug.current}`;
      
      createdArticles.push(newArticle);
      whatsappSummaries.push(`*${item.articleTitle}*\n📅 ${todayStr}\n\n${whatsappSummary}\n\nRead full article: ${internalLink}`);
    }

    // 4. Send WhatsApp Summaries to Telegram Bot (WITH IMAGES)
    const tgBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const tgChatId = process.env.TELEGRAM_CHAT_ID;
    
    if (tgBotToken && tgChatId) {
      for (let i = 0; i < whatsappSummaries.length; i++) {
        const summaryText = whatsappSummaries[i];
        let imageUrl = items[i].imageUrl;

        // Clean up relative URLs just in case
        if (imageUrl && imageUrl.startsWith('//')) {
          imageUrl = 'https:' + imageUrl;
        }
        
        let tgUrl = `https://api.telegram.org/bot${tgBotToken}/sendMessage`;
        let tgBody: any = {
          chat_id: tgChatId,
          text: summaryText,
          parse_mode: 'Markdown'
        };

        let isPhotoAttempt = false;

        // If we extracted an image, try sendPhoto first
        if (imageUrl) {
          isPhotoAttempt = true;
          tgUrl = `https://api.telegram.org/bot${tgBotToken}/sendPhoto`;
          tgBody = {
            chat_id: tgChatId,
            photo: imageUrl,
            caption: summaryText,
            parse_mode: 'Markdown'
          };
        }
        
        try {
          const tgRes = await fetch(tgUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tgBody)
          });
          
          const tgData = await tgRes.json();
          
          // If the photo upload failed (broken image link), fallback to text-only!
          if (!tgData.ok && isPhotoAttempt) {
            console.warn("Image send failed, falling back to text only for item:", i);
            await fetch(`https://api.telegram.org/bot${tgBotToken}/sendMessage`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                chat_id: tgChatId,
                text: summaryText,
                parse_mode: 'Markdown'
              })
            });
          } else if (!tgData.ok) {
            console.error("Telegram Error for item:", i, tgData);
          }
        } catch (err) {
          console.error("Telegram Fetch Error:", err);
        }
      }
    } else {
      console.warn('Telegram Bot Token or Chat ID is missing in .env. Skipping Telegram notification.');
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Articles successfully generated and saved to Sanity!',
      simulatedSanityPayloads: createdArticles,
      aiAuthorPayload: aiAuthorPayload,
      telegramNotificationSent: !!(tgBotToken && tgChatId)
    });

  } catch (error: any) {
    console.error("Agent Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
