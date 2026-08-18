import { Metadata } from 'next';
import client from '@/sanity/client';
import { portfolioItems as staticItems } from './components/portfolio-data';
import PortfolioContent from './components/PortfolioContent';

export const revalidate = 60; // Revalidate every 60 seconds

export const metadata: Metadata = {
  title: 'Case Studies & Portfolio | Custom Software & SaaS MVP Success Stories',
  description: 'Explore custom software engineering, AI automation implementations, and scalable SaaS MVP case studies built by Flexiti Studio.',
  keywords: [
    'Custom software case studies',
    'SaaS MVP portfolio',
    'AI automation client projects',
    'React Native app showcase',
    'Flexiti Studio portfolio',
    'Web application architectural showcase'
  ],
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    type: 'website',
    url: 'https://flexitistudio.com/portfolio',
    title: 'Case Studies & Portfolio | Flexiti Studio',
    description: 'Explore custom software engineering, AI automation implementations, and scalable SaaS MVP case studies.',
    images: [{ url: '/flexiti-logo.png', alt: 'Flexiti Studio Portfolio' }],
  },
};

export default async function OurWorkPage() {
  let items = [];
  try {
    items = await client.fetch(`
      *[_type == "portfolioItem"] | order(order asc, _createdAt desc) {
        "id": _id,
        title,
        description,
        category,
        industry,
        "image": mainImage.asset->url,
        alt,
        tags,
        caseStudyUrl,
        year,
        client,
        status,
        type,
        role,
        timeline,
        team,
        challenge,
        solution,
        result,
        "images": images[].asset->url,
        featured,
        order
      }
    `);
  } catch (error) {
    console.error('Failed to fetch portfolio items from Sanity:', error);
  }

  // If dynamic projects are found in Sanity (live data), only use them. Otherwise, fall back to static items.
  const finalItems = items.length > 0 ? items : staticItems;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Flexiti Studio Case Studies & Software Engineering Portfolio',
    'description': 'A curated showcase of custom software solutions, AI automation pipelines, and SaaS platforms built by Flexiti Studio.',
    'itemListElement': finalItems.map((item: any, index: number) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'SoftwareApplication',
        'name': item.title,
        'description': item.description,
        'applicationCategory': item.category || 'DeveloperApplication',
        'operatingSystem': 'Web / Mobile',
      },
    })),
  };

  return (
    <main className="min-h-screen bg-background text-on-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioContent items={finalItems} />
    </main>
  );
}