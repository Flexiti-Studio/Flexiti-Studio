'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { PortfolioItem } from './types';
import { categoryLabels } from './portfolio-data';

interface PortfolioCardProps {
  item: PortfolioItem;
  onViewCaseStudy?: (item: PortfolioItem) => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onViewCaseStudy }) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`group relative flex flex-col h-full rounded-[2rem] border overflow-hidden transition-all duration-500 cursor-pointer ${
        isDark 
          ? 'bg-white/[0.01] shadow-black/40 border-white/10 hover:border-indigo-500/40' 
          : 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.01)] border-slate-200 hover:border-indigo-500/40'
      }`}
      onClick={() => onViewCaseStudy?.(item)}
    >
      {/* Image Section */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2 z-20">
          <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border backdrop-blur-md transition-colors ${
            isDark 
              ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' 
              : 'bg-white/90 border-indigo-100 text-indigo-700'
          }`}>
            {categoryLabels[item.category] || item.category}
          </span>
          <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border backdrop-blur-md transition-colors ${
            isDark 
              ? 'bg-zinc-800/80 border-white/10 text-slate-400' 
              : 'bg-slate-900/80 border-white/10 text-white'
          }`}>
            {item.status.replace('-', ' ')}
          </span>
        </div>

        {/* Diagonal Arrow Hover overlay bubble */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 z-10">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(99,102,241,0.5)]">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-colors ${
            isDark ? 'text-indigo-400' : 'text-indigo-600'
          }`}>
            {categoryLabels[item.category] || item.category}
          </span>
          <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
          <span className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-colors opacity-50 ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            {item.type}
          </span>
        </div>

        <h3 className={`text-2xl font-bold font-headline tracking-tight mb-4 transition-colors group-hover:text-indigo-500 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          {item.title}
        </h3>

        <p className={`text-sm font-medium leading-relaxed mb-8 line-clamp-2 transition-colors ${
          isDark ? 'text-slate-400' : 'text-slate-500'
        }`}>
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {item.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag} 
              className={`text-[8px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg border transition-colors ${
                isDark 
                  ? 'bg-zinc-900 border-white/5 text-slate-500' 
                  : 'bg-slate-50 border-slate-200 text-slate-400'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Card Footer Link */}
        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
          <span className={`text-[10px] font-bold uppercase tracking-widest transition-all group-hover:text-indigo-500 ${
            isDark ? 'text-slate-500' : 'text-slate-400'
          }`}>
            View Project
          </span>
          
          {/* Custom SVG arrow replacing legacy material symbols */}
          <svg className="w-4 h-4 text-indigo-500 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>

      {/* Halo Background Glow on hover */}
      <div 
        className={`absolute inset-0 -z-10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none ${
          isDark ? 'bg-indigo-600' : 'bg-indigo-500'
        }`} 
      />
    </motion.div>
  );
};

export default PortfolioCard;