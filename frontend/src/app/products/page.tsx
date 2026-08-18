import { Metadata } from 'next';
import ProductsHero from './components/ProductsHero';
import ProductsContent from './components/ProductsContent';
import ProductsScalability from './components/ProductsScalability';
import ProductsLabs from './components/ProductsLabs';
import ProductsStats from './components/ProductsStats';
import ProductsCTA from './components/ProductsCTA';
import client from '@/sanity/client';

export const metadata: Metadata = {
  title: 'Internal Tools & SaaS Products | Custom Software Innovations',
  description: 'Discover proprietary SaaS platforms, developer tools, and internal digital products engineered by Flexiti Studio.',
  keywords: [
    'Flexiti Studio products',
    'Proprietary SaaS platforms',
    'Developer tools & products',
    'SaaS products showcase',
    'Custom software products'
  ],
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    type: 'website',
    url: 'https://flexitistudio.com/products',
    title: 'Internal Tools & SaaS Products | Flexiti Studio',
    description: 'Discover proprietary SaaS platforms and digital products engineered by Flexiti Studio.',
    images: [{ url: '/flexiti-logo.png', alt: 'Flexiti Studio Products' }],
  },
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Flexiti Studio Products & SaaS Applications',
    'description': 'A catalog of SaaS platforms, developer tools, and internal digital applications built by Flexiti Studio.',
    'itemListElement': sanityProducts.map((prod: any, index: number) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'SoftwareApplication',
        'name': prod.title,
        'description': prod.description,
        'applicationCategory': prod.category || 'BusinessApplication',
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductsHero />
      <ProductsContent products={sanityProducts} />
      <ProductsScalability />
      <ProductsLabs />
      <ProductsStats />
      <ProductsCTA />
    </main>
  );
}