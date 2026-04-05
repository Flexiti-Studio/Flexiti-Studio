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
    <header className="mb-20 md:mb-32 text-center flex flex-col items-center relative">
      {/* Ambient Glow */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 blur-[120px] opacity-20 pointer-events-none ${isDark ? 'bg-blue-500/20' : 'bg-blue-600/10'}`} />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border mb-8 transition-colors ${isDark ? 'bg-white/5 border-white/10 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-current"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">The Journal</span>
        </div>

        <h1 className={`text-6xl md:text-8xl font-black font-headline tracking-tighter mb-8 leading-[1.05] ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Insights & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">Resources</span>
        </h1>

        <p className={`text-lg md:text-xl max-w-2xl leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          Expert perspectives on building high-performance digital products, 
          scaling engineering teams, and the future of creative technology.
        </p>

        <div className="mt-12 flex items-center gap-6">
           <div className={`w-12 h-0.5 rounded-full ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
           <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>est. 2026</span>
           <div className={`w-12 h-0.5 rounded-full ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
        </div>
      </motion.div>
    </header>
  );
}
