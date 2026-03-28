import { Metadata } from 'next';
import PortfolioHero from './components/PortfolioHero';
import PortfolioFilters from './components/PortfolioFilters';
import PortfolioFeatured from './components/PortfolioFeatured';
import PortfolioGrid from './components/PortfolioGrid';
import PortfolioPositioning from './components/PortfolioPositioning';
import PortfolioTechStack from './components/PortfolioTechStack';
import PortfolioCTA from './components/PortfolioCTA';

export const metadata: Metadata = {
  title: 'Our Work | Flexiti Studio',
  description: 'We build scalable digital products for startups and global businesses. Explore our portfolio.',
};

export default function OurWorkPage() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      <PortfolioHero />
      <PortfolioFilters />
      <PortfolioFeatured />
      <PortfolioGrid />
      <PortfolioPositioning />
      <PortfolioTechStack />
      <PortfolioCTA />
    </main>
  );
}