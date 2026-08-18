import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://flexitistudio.com';

  const routes = [
    '',
    '/services/ai-automation',
    '/services/saas-development',
    '/services/custom-software',
    '/portfolio',
    '/products',
    '/blog',
    '/memes',
    '/contact',
    '/about',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
