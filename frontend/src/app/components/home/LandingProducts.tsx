'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LandingProducts() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  const products = [
    {
      title: "Business Tools",
      description: "Integrated suite for managing lean agencies and digital startups without the bloat.",
      icon: (
        <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Automation Hub",
      description: "Low-code engine to connect your sales, marketing, and engineering workflows.",
      icon: (
        <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "AI Solutions",
      description: "Proprietary LLM layers for custom document processing and customer service bots.",
      icon: (
        <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-slate-50 dark:bg-[#030014] transition-colors duration-500" id="products">
      {/* Immersive Glass Capsule Container */}
      <div 
        className={`max-w-6xl mx-auto p-12 md:p-16 rounded-[2.5rem] border relative overflow-hidden transition-all duration-700 backdrop-blur-xl ${
          isDark 
            ? 'bg-white/[0.01] border-white/[0.06] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)]' 
            : 'bg-white border-slate-200 shadow-[0_20px_50px_rgba(99,102,241,0.03)]'
        }`}
      >
        {/* Soft Ambient Radial Light inside capsule */}
        <div 
          className={`absolute top-0 right-0 w-1/2 h-full pointer-events-none transition-opacity duration-700 ${
            isDark 
              ? 'bg-[radial-gradient(circle_at_right_top,rgba(99,102,241,0.1),transparent_70%)]' 
              : 'bg-[radial-gradient(circle_at_right_top,rgba(99,102,241,0.03),transparent_70%)]'
          }`} 
        />

        {/* Section Header */}
        <div className="mb-16 text-center sm:text-left">
          <span className={`inline-block px-4 py-1.5 rounded-full font-bold text-[10px] tracking-[0.3em] uppercase border transition-colors ${
            isDark 
              ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
              : 'bg-blue-50 text-blue-600 border-blue-100'
          }`}>
            Flexiti Ecosystem
          </span>
          <h2 className={`text-4xl md:text-5xl font-extrabold font-headline mt-4 transition-colors ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Internal Tools for Founders
          </h2>
        </div>

        {/* Dynamic Column Cards */}
        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -4 }}
              className="space-y-6 flex flex-col items-center text-center sm:items-start sm:text-left group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                isDark 
                  ? 'bg-white/5 border border-white/10 group-hover:bg-indigo-600/20 group-hover:border-indigo-500/30' 
                  : 'bg-slate-50 border border-slate-100 group-hover:bg-indigo-50 group-hover:border-indigo-100'
              }`}>
                {product.icon}
              </div>
              
              <h3 className={`text-2xl font-bold tracking-tight transition-colors ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {product.title}
              </h3>
              
              <p className={`leading-relaxed text-sm transition-colors ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
