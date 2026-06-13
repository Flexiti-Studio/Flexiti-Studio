import { Metadata } from 'next';
import ProductsHero from './components/ProductsHero';
import ProductsContent from './components/ProductsContent';
import ProductsScalability from './components/ProductsScalability';
import ProductsLabs from './components/ProductsLabs';
import ProductsStats from './components/ProductsStats';
import ProductsCTA from './components/ProductsCTA';
import client from '@/sanity/client';

export const metadata: Metadata = {
  title: 'Products | Flexiti Studio',
  description: 'We design and engineer high-performance SaaS platforms and internal tools that empower modern teams to scale beyond their limits.',
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ProductsPage() {
  let sanityProducts = [];
  try {
    sanityProducts = await client.fetch(`
      *[_type == "product"] | order(order asc, _createdAt desc) {
        "id": _id,
        title,
        slug,
        description,
        category,
        status,
        "image": mainImage.asset->url,
        alt,
        isFeatured,
        features,
        icon,
        color,
        reverse,
        order
      }
    `);
  } catch (error) {
    console.error('Failed to fetch products from Sanity:', error);
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-500">
      <ProductsHero />
      <ProductsContent products={sanityProducts} />
      <ProductsScalability />
      <ProductsLabs />
      <ProductsStats />
      <ProductsCTA />
    </main>
  );
}