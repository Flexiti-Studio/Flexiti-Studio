'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function LandingSocialProof() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  const brands = ['Qefas', 'Selfpaced-Tracker', 'School Hub', 'NicxBlog', 'Rotary'];

  return (
    <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-8 -mt-10 md:-mt-16 w-full">
      <div 
        className={`flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 px-8 py-6 rounded-[2rem] border transition-all duration-700 backdrop-blur-xl ${
          isDark 
            ? 'border-white/[0.06] bg-white/[0.01] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]' 
            : 'border-slate-200/80 bg-white/90 shadow-[0_20px_40px_rgba(99,102,241,0.04)]'
        }`}
      >
        {/* Trust Ratings */}
        <div className="flex items-center gap-4 text-center md:text-left shrink-0">
          <div className="space-y-0.5">
            <div className="text-amber-500 dark:text-[#fbbf24] text-xs tracking-wider font-bold">★★★★★</div>
            <div className={`text-lg md:text-xl font-black transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
              1,200+
            </div>
            <div className={`text-[8px] font-extrabold uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-slate-400'}`}>
              Rated 4.9/5 by founders
            </div>
          </div>
        </div>

        {/* Separator line on desktop */}
        <div className={`hidden md:block h-10 w-[1px] ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />

        {/* Brand Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 w-full md:w-auto">
          {brands.map((brand, idx) => (
            <motion.span 
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`font-headline text-lg md:text-xl font-extrabold tracking-tighter cursor-pointer transition-all duration-300 ${
                isDark ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-slate-950'
              }`}
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
