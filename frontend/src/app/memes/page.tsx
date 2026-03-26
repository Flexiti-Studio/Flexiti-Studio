import { Metadata } from 'next';
import MemesHero from './components/MemesHero';
import MemesSidebar from './components/MemesSidebar';
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

        {/* Sidebar stats below library on mobile (managed in Client on XL) */}
        <div className="xl:hidden">
          <MemesSidebar />
        </div>

        {/* Bottom CTA */}
        <MemesCTA />
      </div>

      {/* Footer */}
      <footer className="w-full flex justify-between items-center px-8 mt-auto py-8 bg-slate-50 border-t border-slate-100">
        <p className="text-xs text-slate-500 font-medium">© 2024 Flexiti Studio</p>
        <div className="flex gap-8">
          <a className="text-xs text-slate-400 hover:text-blue-500 underline transition-all" href="#">Privacy</a>
          <a className="text-xs text-slate-400 hover:text-blue-500 underline transition-all" href="#">Terms</a>
          <a className="text-xs text-slate-400 hover:text-blue-500 underline transition-all" href="#">Support</a>
        </div>
      </footer>
    </main>
  );
}
