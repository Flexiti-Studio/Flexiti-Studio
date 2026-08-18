import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Bot, Cpu, Sparkles, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Automation Agency for Businesses | Enterprise Workflow Engineering',
  description: 'Flexiti Studio is a leading AI automation agency. We design and build custom LLM integrations, autonomous AI agents, and automated workflow pipelines.',
  keywords: ['AI automation agency for businesses', 'Enterprise AI Automations', 'Workflow Engineering', 'Custom LLMs', 'AI Agents'],
  alternates: {
    canonical: '/services/ai-automation',
  },
};

export default function AIAutomationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'AI Automation & Workflow Engineering',
    'provider': {
      '@type': 'Organization',
      'name': 'Flexiti Studio',
      'url': 'https://flexitistudio.com',
    },
    'description': 'Enterprise AI automation solutions, custom LLM agents, and business process automation.',
    'serviceType': 'AI Automation Consulting',
  };

  return (
    <main className="min-h-screen pt-28 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="space-y-6 text-center max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/20">
          AI Automation Agency
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
          Enterprise AI Automations & Workflow Engineering
        </h1>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
          Scale your business efficiency with custom LLM integrations, autonomous agentic workflows, and intelligent automated systems engineered for enterprise workloads.
        </p>
      </header>

      <section className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl border border-white/10 bg-white/5 space-y-4">
          <Bot className="w-8 h-8 text-blue-400" />
          <h2 className="text-xl font-bold">Autonomous AI Agents</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Multi-agent systems designed to perform complex multi-step reasoning, decision-making, and tasks autonomously.
          </p>
        </div>
        <div className="p-8 rounded-3xl border border-white/10 bg-white/5 space-y-4">
          <Cpu className="w-8 h-8 text-indigo-400" />
          <h2 className="text-xl font-bold">Custom LLM Integrations</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Fine-tuned language models and RAG architectures integrated securely into your private enterprise codebase.
          </p>
        </div>
        <div className="p-8 rounded-3xl border border-white/10 bg-white/5 space-y-4">
          <Zap className="w-8 h-8 text-pink-400" />
          <h2 className="text-xl font-bold">Workflow Automation</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Streamline legacy business operations, eliminate redundant manual tasks, and optimize resource throughput.
          </p>
        </div>
      </section>

      <div className="mt-20 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-white shadow-lg hover:scale-105 transition-transform"
        >
          <Sparkles className="w-5 h-5 text-indigo-200" />
          <span>Book an AI Automation Consultation</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </main>
  );
}
