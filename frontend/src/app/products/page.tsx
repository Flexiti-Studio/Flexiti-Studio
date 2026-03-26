import { Metadata } from 'next';
import ProductsHero from './components/ProductsHero';
import ProductsCategoryTabs from './components/ProductsCategoryTabs';
import ProductsFeatured from './components/ProductsFeatured';
import ProductsGrid from './components/ProductsGrid';
import ProductsScalability from './components/ProductsScalability';
import ProductsLabs from './components/ProductsLabs';
import ProductsStats from './components/ProductsStats';
import ProductsCTA from './components/ProductsCTA';
import ProductsFooter from './components/ProductsFooter';

export const metadata: Metadata = {
  title: 'Products | Flexiti Studio',
  description: 'We design and engineer high-performance SaaS platforms and internal tools that empower modern teams to scale beyond their limits.',
};

export default function ProductsPage() {
  return (
    <main className="pt-24 min-h-screen bg-surface text-on-surface">
      <ProductsHero />
      <ProductsCategoryTabs />
      <ProductsFeatured />
      <ProductsGrid />
      <ProductsScalability />
      <ProductsLabs />
      <ProductsStats />
      <ProductsCTA />
      <ProductsFooter />
    </main>
  );
}