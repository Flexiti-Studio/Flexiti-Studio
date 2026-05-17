'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const categories = ['All', 'Web Apps', 'Mobile Apps', 'SaaS', 'AI Tools'];

export default function PortfolioFilters() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <section className="px-8 max-w-7xl mx-auto mb-20 relative z-20 w-full">
      <div 
        className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-8 p-6 md:p-8 rounded-[2rem] border backdrop-blur-xl transition-all duration-700 ${
          isDark 
            ? 'bg-white/[0.01] border-white/[0.06] shadow-2xl shadow-black/40' 
            : 'bg-white border-slate-200 shadow-[0_10px_30px_rgba(99,102,241,0.02)]'
        }`}
      >
        {/* Category filtering tab list */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <span className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-colors ${
            isDark ? 'text-slate-500' : 'text-slate-400'
          }`}>
            Filter Projects
          </span>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-6 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === cat 
                    ? 'text-white' 
                    : isDark 
                      ? 'text-slate-400 hover:text-white' 
                      : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {activeFilter === cat && (
                  <motion.div 
                    layoutId="activeFilter"
                    className={`absolute inset-0 rounded-xl -z-10 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md ${
                      isDark ? 'shadow-indigo-500/20' : 'shadow-indigo-500/10'
                    }`}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Industry selector dropdown with custom SVG */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <span className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-colors ${
            isDark ? 'text-slate-500' : 'text-slate-400'
          }`}>
            Industry
          </span>
          <div className="relative flex items-center w-full md:w-48">
            <select 
              className={`w-full px-6 py-3 rounded-xl border font-bold text-xs uppercase tracking-widest outline-none appearance-none cursor-pointer transition-all duration-300 pr-10 ${
                isDark 
                  ? 'bg-zinc-950 border-white/10 text-white focus:border-indigo-500' 
                  : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500 shadow-inner'
              }`}
            >
              <option className={isDark ? 'bg-zinc-950 text-white' : 'bg-white text-slate-900'}>All Industries</option>
              <option className={isDark ? 'bg-zinc-950 text-white' : 'bg-white text-slate-900'}>Education</option>
              <option className={isDark ? 'bg-zinc-950 text-white' : 'bg-white text-slate-900'}>Finance</option>
              <option className={isDark ? 'bg-zinc-950 text-white' : 'bg-white text-slate-900'}>Healthcare</option>
            </select>
            
            {/* Custom SVG chevron caret icon replacing material symbols */}
            <svg 
              className={`w-4 h-4 absolute right-4 pointer-events-none opacity-60 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
