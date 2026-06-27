import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Prevent crawlers from indexing admin panels and raw API routes
      disallow: ['/admin/', '/api/', '/user-panel/'], 
    },
    // Explicitly tell bots (and AI crawlers) where your sitemap is
    sitemap: 'https://flexitistudio.com/sitemap.xml',
  };
}
