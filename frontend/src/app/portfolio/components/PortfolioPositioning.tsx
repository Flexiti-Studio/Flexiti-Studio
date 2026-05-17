'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function PortfolioPositioning() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto relative w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden border shadow-2xl transition-all duration-700 ${
          isDark 
            ? 'bg-white/[0.01] border-white/[0.06] shadow-black/40' 
            : 'bg-white border-slate-200 shadow-[0_20px_50px_rgba(99,102,241,0.03)]'
        }`}
      >
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Block */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-[2px] bg-indigo-500" />
                <span className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-colors ${
                  isDark ? 'text-indigo-400' : 'text-indigo-600'
                }`}>
                  The Flexiti Edge
                </span>
              </motion.div>
              
              <h2 className={`text-4xl md:text-6xl font-extrabold font-headline leading-tight tracking-tight transition-colors ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                We don&apos;t just build projects — we build <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">scalable systems.</span>
              </h2>
              
              <p className={`text-lg font-medium leading-relaxed transition-colors ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Our architecture is designed for explosive growth. We prioritize modularity, performance, and long-term maintainability to ensure your product evolves at the speed of your ambition.
              </p>
            </div>

            {/* Sub stats columns */}
            <div className="grid grid-cols-2 gap-12 pt-8 border-t border-slate-100 dark:border-white/5">
              <div className="space-y-2">
                <h4 className={`text-4xl font-extrabold font-headline transition-colors ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  99.9%
                </h4>
                <p className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                  isDark ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  Uptime Record
                </p>
              </div>
              <div className="space-y-2">
                <h4 className={`text-4xl font-extrabold font-headline transition-colors ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  &lt;100ms
                </h4>
                <p className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                  isDark ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  Latency Focus
                </p>
              </div>
            </div>
          </div>

          {/* Graphics Badges Section */}
          <div className="relative flex justify-center items-center">
            {/* Ambient Radial Backlights */}
            <div 
              className={`absolute inset-0 blur-[100px] rounded-full opacity-20 pointer-events-none transition-all duration-700 ${
                isDark ? 'bg-indigo-600' : 'bg-indigo-500'
              }`} 
            />
            
            {/* Spinning Dashed Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="relative w-full aspect-square max-w-[320px] pointer-events-none"
            >
              <div className={`absolute inset-0 rounded-full border border-dashed p-10 transition-colors ${
                isDark ? 'border-white/10' : 'border-slate-200'
              }`}>
                <div className={`w-full h-full rounded-full border border-dashed p-10 transition-colors ${
                  isDark ? 'border-white/10' : 'border-slate-200'
                }`}>
                  <div className={`w-full h-full rounded-full border border-dashed transition-colors ${
                    isDark ? 'border-white/10' : 'border-slate-200'
                  }`} />
                </div>
              </div>
            </motion.div>
            
            {/* Center Floating Icon Pill */}
            <div 
              className={`absolute w-24 h-24 rounded-3xl backdrop-blur-2xl flex items-center justify-center border shadow-2xl transition-all duration-700 ${
                isDark 
                  ? 'bg-indigo-600/10 border-white/10 shadow-indigo-500/10' 
                  : 'bg-indigo-50 border-indigo-200 shadow-indigo-500/5'
              }`}
            >
              {/* Custom SVG Compass replacing legacy material symbols */}
              <svg className="w-10 h-10 text-indigo-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>
        </div>

        {/* Ambient background dots overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 95%, currentColor 100%),
              linear-gradient(0deg, transparent 95%, currentColor 100%)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </motion.div>
    </section>
  );
}
