import { Metadata } from 'next';
export const dynamic = 'force-dynamic'
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
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does Flexiti Studio offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Flexiti Studio specializes in high-performance web development, mobile app development, SaaS creation, and AI-powered systems. We use modern stacks like Next.js, React, and React Native.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer SEO and AEO optimization?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all of our Next.js web applications are optimized for traditional Search Engines (SEO) and modern Answer Engines (AEO) to ensure maximum visibility.'
        }
      },
      {
        '@type': 'Question',
        name: 'What technologies do you use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We primarily build with React, Next.js, TypeScript, Tailwind CSS, Sanity CMS, and Node.js for scalable, blazing-fast digital products.'
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#030014] text-slate-900 dark:text-white transition-colors duration-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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