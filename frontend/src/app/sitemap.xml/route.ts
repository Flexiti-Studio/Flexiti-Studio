import { NextResponse } from 'next/server';

export async function GET() {
  // 1. Define your static URLs
  const baseUrl = 'https://flexitistudio.com';
  
  // 2. (Optional) Fetch dynamic paths from your CMS/Database here
  // const posts = await getPosts(); 

  // Define your static routes
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/products',
    '/blog',
    '/contact',
    '/studio',
    '/memes'
  ];

  // 3. Build the XML structure
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes.map((route) => `
        <url>
          <loc>${baseUrl}${route}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>${route === '' ? 'weekly' : 'monthly'}</changefreq>
          <priority>${route === '' ? '1.0' : '0.8'}</priority>
        </url>
      `).join('')}
    </urlset>
  `;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
