import { Metadata } from 'next';
import ServicesHero from './components/ServicesHero';
import ServicesOverview from './components/ServicesOverview';
import ServicesDetail from './components/ServicesDetail';
import ServicesProcess from './components/ServicesProcess';
import ServicesWhyUs from './components/ServicesWhyUs';
import ServicesTechStack from './components/ServicesTechStack';
import ServicesCTABanner from './components/ServicesCTABanner';

export const metadata: Metadata = {
  title: 'Services | Flexiti Studio',
  description: 'End-to-end digital solutions for modern businesses: Web Apps, Mobile Apps, SaaS, and AI-powered systems.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-surface text-on-surface-variant">
      <ServicesHero />
      <ServicesOverview />
      <ServicesDetail />
      <ServicesProcess />
      <ServicesWhyUs />
      <ServicesTechStack />
      <ServicesCTABanner />
    </main>
  );
}