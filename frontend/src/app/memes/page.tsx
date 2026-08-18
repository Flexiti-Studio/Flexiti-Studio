import { Metadata } from 'next';
import MemesHero from './components/MemesHero';
import MemesCTA from './components/MemesCTA';
import MemesClient from './components/MemesClient';

export const metadata: Metadata = {
  title: 'Free Tech & Developer Meme Videos | High-Fidelity Clips',
  description: "Explore and download Flexiti Studio's curated library of high-fidelity tech, developer, and startup meme videos and reaction clips.",
  keywords: [
    'Free developer memes',
    'Tech meme videos',
    'Programming meme clips',
    'Developer reaction videos',
    'Flexiti Studio memes'
  ],
  alternates: {
    canonical: '/memes',
  },
  openGraph: {
    type: 'website',
    url: 'https://flexitistudio.com/memes',
    title: 'Free Tech & Developer Meme Videos | Flexiti Studio',
    description: 'Explore and download curated developer, tech startup, and programming meme videos and reaction clips.',
    images: [{ url: '/flexiti-logo.png', alt: 'Flexiti Studio Free Memes' }],
  },
};

export default function MemesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoGallery',
    'name': 'Free Tech & Developer Meme Videos',
    'description': 'Curated library of high-fidelity developer memes, startup reaction clips, and programming video templates by Flexiti Studio.',
    'url': 'https://flexitistudio.com/memes',
  };

  return (
    <main className="min-h-screen bg-background pt-24 pb-0 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
