'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Button from '../../../components/navbar/Button';

export default function LandingCTA() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <section 
      className={`py-32 relative overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#030014]' : 'bg-slate-50'
      }`}
    >
      {/* Background Neon Atmospheric Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-30">
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 aspect-square rounded-full blur-[100px] md:blur-[140px] pointer-events-none transition-all duration-700 ${
            isDark 
              ? 'bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12)_0%,rgba(124,58,237,0.06)_50%,transparent_70%)]' 
              : 'bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,rgba(124,58,237,0.03)_50%,transparent_70%)]'
          }`} 
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`p-12 md:p-16 rounded-[2.5rem] border backdrop-blur-xl transition-all duration-700 ${
            isDark 
              ? 'bg-white/[0.01] border-white/[0.06] shadow-[0_40px_100px_-25px_rgba(124,58,237,0.15)]' 
              : 'bg-white border-slate-200 shadow-[0_30px_60px_-20px_rgba(99,102,241,0.04)]'
          }`}
        >
          {/* Badge */}
          <span className={`inline-block px-4 py-1.5 rounded-full font-bold text-[10px] tracking-[0.3em] uppercase mb-8 border transition-colors ${
            isDark 
              ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
              : 'bg-blue-50 text-blue-600 border-blue-100'
          }`}>
            Ready to scale?
          </span>

          {/* Heading */}
          <h2 className={`font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 leading-[1.15] tracking-tight transition-colors ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Let’s Build Your <br /> Next Product
          </h2>
          
          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-5">
            <Button
              variant="primary"
              href="/contact"
              className={`
                px-10 py-5 rounded-full text-lg font-bold transition-all active:scale-[0.98]
                bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white
                shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]
              `}
            >
              Start a Project
            </Button>
            
            <Link 
              href="/contact"
              className={`px-10 py-5 rounded-full font-bold text-lg border transition-all active:scale-[0.98] flex items-center justify-center gap-2 group ${
                isDark 
                  ? 'border-white/10 bg-white/[0.02] text-white hover:bg-white/[0.06] hover:border-white/20' 
                  : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50 shadow-sm'
              }`}
            >
              <svg 
                className={`w-5 h-5 transition-colors ${
                  isDark ? 'text-white/60 group-hover:text-white' : 'text-slate-400 group-hover:text-slate-700'
                }`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              Book a Strategy Call
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
