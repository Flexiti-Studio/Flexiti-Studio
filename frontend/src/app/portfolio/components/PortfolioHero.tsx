'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PortfolioHero() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <section className="relative pt-36 pb-20 px-6 md:px-8 overflow-hidden bg-slate-50 dark:bg-[#030014] text-center transition-colors duration-500">
      
      {/* 🌌 Center-Aligned Planetary Arch Halo (Dynamic Theme-Aware) */}
      <div 
        className={`absolute top-[-20%] sm:top-[-30%] md:top-[-45%] left-1/2 -translate-x-1/2 w-[160%] md:w-[110%] aspect-square rounded-full pointer-events-none transition-all duration-1000 ${
          isDark 
            ? 'bg-gradient-to-b from-[#7c3aed]/40 via-[#4f46e5]/8 to-transparent blur-[80px] md:blur-[140px]' 
            : 'bg-gradient-to-b from-indigo-500/10 via-purple-300/5 to-transparent blur-[60px] md:blur-[100px]'
        }`} 
      />

      {/* Layered Crisp Glow Borders representing the Planetary Arch */}
      <div 
        className={`absolute top-[4%] sm:top-[2%] md:top-[-5%] left-1/2 -translate-x-1/2 w-[120%] md:w-[85%] aspect-square rounded-full border-t-[6px] filter pointer-events-none transition-all duration-1000 ${
          isDark 
            ? 'border-[#a78bfa]/40 shadow-[0_-20px_80px_rgba(124,58,237,0.4)] blur-[3px]' 
            : 'border-indigo-400/30 shadow-[0_-10px_40px_rgba(99,102,241,0.15)] blur-[2px]'
        }`} 
      />

      <div 
        className={`absolute top-[6%] sm:top-[4%] md:top-[-3%] left-1/2 -translate-x-1/2 w-[110%] md:w-[80%] aspect-square rounded-full border-t-[2px] filter pointer-events-none transition-all duration-1000 ${
          isDark 
            ? 'border-white/30 blur-[1px]' 
            : 'border-indigo-300/20 blur-[1px]'
        }`} 
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Main Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 border backdrop-blur-sm transition-colors ${
            isDark 
              ? 'bg-[#7c3aed]/10 text-purple-400 border-purple-500/20' 
              : 'bg-indigo-50 text-indigo-600 border-indigo-100'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Our Portfolio</span>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headline text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[1.05] text-slate-900 dark:text-white max-w-4xl mx-auto uppercase mb-10"
        >
          OUR <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-500">
            WORK
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`max-w-2xl text-lg md:text-xl font-medium leading-relaxed mb-12 transition-colors ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          Engineering excellence for the next generation of founders. We build scalable digital products that blend technical precision with elite design.
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link 
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest transition-all bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]"
          >
            Start a Project
            {/* Inline SVG calendar icon replacing legacy material-symbols */}
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 95%, currentColor 100%),
            linear-gradient(0deg, transparent 95%, currentColor 100%)
          `,
          backgroundSize: '70px 70px'
        }}
      />
    </section>
  );
}