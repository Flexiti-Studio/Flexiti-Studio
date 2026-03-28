import { Metadata } from 'next';
import MemesHero from './components/MemesHero';
import MemesCTA from './components/MemesCTA';
import MemesClient from './components/MemesClient';

export const metadata: Metadata = {
  title: 'Free Meme Videos | Flexiti Studio',
  description: "The world's most curated library of high-fidelity meme templates and reaction clips.",
};

export default function MemesPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-0 overflow-x-hidden">
      <div className="p-4 md:p-8 space-y-10 max-w-screen-2xl mx-auto">
        {/* Hero */}
        <MemesHero />

        {/* 
          All filtering, trending, library grid, and play modal 
          are now managed within MemesClient for a reactive, 
          fully-connected API experience.
        */}
        <MemesClient />

        {/* Bottom CTA */}
        <MemesCTA />
      </div>

    </main>
  );
}
