'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function BlogHero() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <header className="mb-16 md:mb-24 text-center flex flex-col items-center relative w-full pt-16">
      {/* Subtle Ambient Background Light */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-56 blur-[130px] opacity-10 pointer-events-none rounded-full ${isDark ? 'bg-sky-500' : 'bg-slate-200'}`} />

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center max-w-3xl"
      >
        {/* Floating Indicator */}
        <div className={`inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full border mb-6 transition-all duration-300 ${
          isDark 
            ? 'bg-white/[0.02] border-white/10 text-slate-400' 
            : 'bg-slate-50 border-slate-200 text-slate-500'
        }`}>
          <span className="relative flex h-1.5 w-1.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? 'bg-sky-400' : 'bg-slate-400'}`}></span>
            <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isDark ? 'bg-sky-400' : 'bg-slate-500'}`}></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em]">The Journal</span>
        </div>

        {/* Heavy Charcoal Minimal Headline */}
        <h1 className={`text-5xl sm:text-6xl md:text-7xl font-black font-headline tracking-tighter mb-6 leading-[1.05] transition-colors duration-500 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Perspectives & <br />
          <span className="text-sky-500">Resources</span>
        </h1>

        {/* Subtitle */}
        <p className={`text-base md:text-lg font-medium leading-relaxed max-w-xl transition-colors duration-500 ${
          isDark ? 'text-slate-400' : 'text-slate-500'
        }`}>
          Expert thoughts on engineering elite SaaS platforms, designing intuitive digital products, and building high-performance tech teams.
        </p>

        {/* Est Indicator Row */}
        <div className="mt-8 flex items-center gap-4">
           <div className={`w-8 h-px transition-colors duration-500 ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
           <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
             est. 2026
           </span>
           <div className={`w-8 h-px transition-colors duration-500 ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
        </div>
      </motion.div>
    </header>
  );
}
