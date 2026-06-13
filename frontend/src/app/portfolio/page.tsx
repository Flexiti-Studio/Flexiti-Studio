import { Metadata } from 'next';
import client from '@/sanity/client';
import { portfolioItems as staticItems } from './components/portfolio-data';
import PortfolioContent from './components/PortfolioContent';

export const revalidate = 60; // Revalidate every 60 seconds

export const metadata: Metadata = {
  title: 'Our Work | Flexiti Studio',
  description: 'We build scalable digital products for startups and global businesses. Explore our portfolio.',
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

  return (
    <main className="min-h-screen bg-background text-on-surface">
      <PortfolioContent items={finalItems} />
    </main>
  );
}