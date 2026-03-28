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
  title: 'About | Flexiti Studio — The Digital Architect',
  description: 'We build flexible, scalable, and impactful digital solutions for modern businesses. From concept to code, we craft the systems that define tomorrow.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface text-on-surface-variant">
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