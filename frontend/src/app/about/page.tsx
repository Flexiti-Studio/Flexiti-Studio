import { Metadata } from 'next';
import AboutHero from './components/AboutHero';
import AboutOverview from './components/AboutOverview';
import AboutMission from './components/AboutMission';
import AboutCapabilities from './components/AboutCapabilities';
import AboutApproach from './components/AboutApproach';
import AboutFounder from './components/AboutFounder';
import AboutEcosystem from './components/AboutEcosystem';
import AboutStats from './components/AboutStats';
import AboutWhyUs from './components/AboutWhyUs';
import AboutCTA from './components/AboutCTA';

export const metadata: Metadata = {
  title: 'About Us | Digital Architecture Studio & Custom Software Engineering',
  description: 'Learn about Flexiti Studio, an African-born software engineering agency with global reach. We engineer flexible, scalable web applications, AI automations, and SaaS products.',
  keywords: [
    'About Flexiti Studio',
    'Custom software agency about',
    'African software studio',
    'Digital architecture agency',
    'Full-stack engineering team',
    'Next.js & React Native developers'
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'website',
    url: 'https://flexitistudio.com/about',
    title: 'About Us | Flexiti Studio',
    description: 'Learn about Flexiti Studio, an African-born software engineering agency with global reach building resilient digital products.',
    images: [{ url: '/flexiti-logo.png', alt: 'About Flexiti Studio' }],
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': 'About Flexiti Studio',
    'description': 'Flexiti Studio is a digital architecture agency building high-performance web applications, AI automations, and scalable SaaS solutions.',
    'url': 'https://flexitistudio.com/about',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Flexiti Studio',
      'url': 'https://flexitistudio.com',
      'logo': 'https://flexitistudio.com/flexiti-logo.png',
      'knowsAbout': [
        'Custom Software Engineering',
        'AI Automation Services',
        'SaaS MVP Development',
        'Next.js Application Architecture',
        'React Native Mobile Development'
      ]
    }
  };

  return (
    <main className="min-h-screen bg-surface text-on-surface-variant">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutHero />
      <AboutOverview />
      <AboutMission />
      <AboutCapabilities />
      <AboutApproach />
      <AboutFounder />
      <AboutEcosystem />
      <AboutStats />
      <AboutWhyUs />
      <AboutCTA />
    </main>
  );
}