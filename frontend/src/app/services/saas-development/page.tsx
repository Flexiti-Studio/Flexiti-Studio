import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Layers, Rocket, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SaaS MVP Development Studio | Turn-Key Full-Stack SaaS Engineering',
  description: 'Flexiti Studio is a premier SaaS MVP development studio. We build multi-tenant cloud platforms, subscription engines, and scalable SaaS solutions.',
  keywords: ['SaaS MVP development studio', 'Full-Stack SaaS Development', 'Next.js SaaS', 'MVP Engineering', 'Multi-tenant architecture'],
  alternates: {
    canonical: '/services/saas-development',
  },
};

export default function SaaSDevelopmentPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Full-Stack SaaS & MVP Development',
    'provider': {
      '@type': 'Organization',
      'name': 'Flexiti Studio',
      'url': 'https://flexitistudio.com',
    },
    'description': 'End-to-end SaaS application engineering, MVP development, multi-tenant databases, and payment integration.',
    'serviceType': 'Software Development',
  };

  return (
    <main className="min-h-screen pt-28 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="space-y-6 text-center max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          SaaS MVP Development Studio
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
          Full-Stack SaaS & MVP Development
        </h1>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
          Transform your product concept into a market-ready, scalable SaaS application with enterprise security, recurring billing, and high-performance cloud architecture.
        </p>
      </header>

      <section className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl border border-white/10 bg-white/5 space-y-4">
          <Rocket className="w-8 h-8 text-indigo-400" />
          <h2 className="text-xl font-bold">Rapid MVP Delivery</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Go from zero to production in record time with focused core feature sets built on scalable Next.js infrastructure.
          </p>
        </div>
        <div className="p-8 rounded-3xl border border-white/10 bg-white/5 space-y-4">
          <Layers className="w-8 h-8 text-blue-400" />
          <h2 className="text-xl font-bold">Multi-Tenant Architecture</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Isolated tenant data management, role-based access control (RBAC), and automated subscription provisioning.
          </p>
        </div>
        <div className="p-8 rounded-3xl border border-white/10 bg-white/5 space-y-4">
          <ShieldCheck className="w-8 h-8 text-cyan-400" />
          <h2 className="text-xl font-bold">Enterprise Security</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Bank-grade authentication, encrypted database storage, and full compliance with industry standards.
          </p>
        </div>
      </section>

      <div className="mt-20 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-white shadow-lg hover:scale-105 transition-transform"
        >
          <Sparkles className="w-5 h-5 text-indigo-200" />
          <span>Launch Your SaaS MVP</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </main>
  );
}
