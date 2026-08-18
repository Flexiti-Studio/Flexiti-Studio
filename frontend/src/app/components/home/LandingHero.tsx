'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
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
            ? 'bg-gradient-to-b from-[#2563eb]/40 via-[#3b82f6]/8 to-transparent blur-[80px] md:blur-[140px]' 
            : 'bg-gradient-to-b from-blue-500/10 via-blue-300/5 to-transparent blur-[60px] md:blur-[100px]'
        }`} 
      />

      {/* Layered Crisp Glow Borders representing the Planetary Arch */}
      <div 
        className={`absolute top-[4%] sm:top-[2%] md:top-[-5%] left-1/2 -translate-x-1/2 w-[120%] md:w-[85%] aspect-square rounded-full border-t-[6px] filter pointer-events-none transition-all duration-1000 ${
          isDark 
            ? 'border-[#60a5fa]/40 shadow-[0_-20px_80px_rgba(37,99,235,0.4)] blur-[3px]' 
            : 'border-blue-400/30 shadow-[0_-10px_40px_rgba(59,130,246,0.15)] blur-[2px]'
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
              ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
              : 'bg-blue-50 text-blue-600 border-blue-100'
          }`}>
            Digital Architecture Studio
          </span>
        </motion.div>

        {/* Centered Typography Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="font-headline text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-slate-900 dark:text-white max-w-5xl mx-auto"
        >
          Custom Software Development & <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-400 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-300">
            Scalable AI Automations.
          </span>
        </motion.h1>

        {/* Centered Subtext Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed"
        >
          The premier AI automation agency for businesses and SaaS MVP development studio. Where to build custom software, web & mobile app systems with a high-performance Next.js and React Native engineering team.
        </motion.p>

        {/* Centered Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-4"
        >
          <Link
            href="/contact"
            className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300 hover:scale-[1.02] hover:from-blue-500 hover:to-indigo-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] active:scale-[0.98]"
          >
            <Sparkles className="h-5 w-5 animate-pulse text-indigo-200" />
            <span>Get a Free Consultation</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
          
          <Link 
            href="/portfolio"
            className={`group w-full sm:w-auto h-[56px] px-8 rounded-full font-bold text-base border transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 ${
              isDark 
                ? 'border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]' 
                : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-sm hover:shadow-md'
            }`}
          >
            <span>See Our Work</span>
            <div className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-300 ${isDark ? 'bg-white/10 group-hover:bg-white/20' : 'bg-slate-100 group-hover:bg-slate-200'}`}>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
