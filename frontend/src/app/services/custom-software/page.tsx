import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code2, Globe, Smartphone, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Where to Build Custom Software | Next.js & React Native Development Team',
  description: 'Looking for where to build custom software? Flexiti Studio is a premier custom software engineering agency specializing in Next.js web applications and React Native mobile apps.',
  keywords: ['Where to build custom software', 'Next.js / React Native software development team', 'Custom Software Development', 'Mobile & Web App Architecture'],
  alternates: {
    canonical: '/services/custom-software',
  },
};

export default function CustomSoftwarePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Custom Software Development & Web/Mobile App Architecture',
    'provider': {
      '@type': 'Organization',
      'name': 'Flexiti Studio',
      'url': 'https://flexitistudio.com',
    },
    'description': 'Custom web development with Next.js, cross-platform mobile apps with React Native, and enterprise software engineering.',
    'serviceType': 'Software Development',
  };

  return (
    <main className="min-h-screen pt-28 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="space-y-6 text-center max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          Custom Software Engineering
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
          Where to Build Custom Software with Confidence
        </h1>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
          Flexiti Studio is your dedicated Next.js and React Native software development team, building resilient web applications, native mobile apps, and scalable digital platforms.
        </p>
      </header>

      <section className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl border border-white/10 bg-white/5 space-y-4">
          <Globe className="w-8 h-8 text-cyan-400" />
          <h2 className="text-xl font-bold">Next.js Web Applications</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Ultra-fast, SEO-optimized web products built with React 19, Next.js App Router, and serverless edge functions.
          </p>
        </div>
        <div className="p-8 rounded-3xl border border-white/10 bg-white/5 space-y-4">
          <Smartphone className="w-8 h-8 text-blue-400" />
          <h2 className="text-xl font-bold">React Native Mobile Apps</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Native iOS and Android mobile experiences driven by a single high-performance cross-platform codebase.
          </p>
        </div>
        <div className="p-8 rounded-3xl border border-white/10 bg-white/5 space-y-4">
          <Code2 className="w-8 h-8 text-indigo-400" />
          <h2 className="text-xl font-bold">Dedicated Software Team</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Augment your technical capabilities with experienced full-stack engineers and cloud systems architects.
          </p>
        </div>
      </section>

      <div className="mt-20 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-white shadow-lg hover:scale-105 transition-transform"
        >
          <Sparkles className="w-5 h-5 text-indigo-200" />
          <span>Build Your Software Project</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </main>
  );
}
