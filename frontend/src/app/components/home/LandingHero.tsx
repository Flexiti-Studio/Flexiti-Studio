'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Button from '../../../components/navbar/Button';

export default function LandingHero() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#030014] pt-28 pb-16 px-6 md:px-8 transition-colors duration-500 text-center">
      
      {/* 🌌 Massive Center-Aligned Planetary Arch Halo (Dynamic Theme-Aware) */}
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

      {/* Subtle overlay grids */}
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

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-8 md:space-y-10 w-full flex flex-col items-center">
        
        {/* Main Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className={`inline-block px-4 py-1.5 rounded-full font-bold text-[10px] tracking-[0.3em] uppercase border backdrop-blur-sm transition-colors ${
            isDark 
              ? 'bg-[#7c3aed]/10 text-purple-400 border-purple-500/20' 
              : 'bg-indigo-50 text-indigo-600 border-indigo-100'
          }`}>
            Digital Architecture Studio
          </span>
        </motion.div>

        {/* Centered Typography Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="font-headline text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.05] text-slate-900 dark:text-white max-w-4xl mx-auto"
        >
          Innovating Tomorrow.<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-500">
            Building Today.
          </span>
        </motion.h1>

        {/* Centered Subtext Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
        >
          Empowering businesses with next-gen technology solutions from custom software to AI-driven platforms, we engineer your digital success.
        </motion.p>

        {/* Centered Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Button
            variant="primary"
            href="/contact"
            className="w-full sm:w-auto px-10 py-4 rounded-full text-base font-bold transition-all active:scale-[0.98] bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]"
          >
            Get a Free Consultation
          </Button>
          
          <Link 
            href="/portfolio"
            className={`w-full sm:w-auto h-12 px-10 rounded-full font-bold text-base border transition-all active:scale-[0.98] flex items-center justify-center gap-2 ${
              isDark 
                ? 'border-white/10 bg-white/[0.02] text-white hover:bg-white/[0.06] hover:border-white/20' 
                : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50 shadow-sm'
            }`}
          >
            See Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
