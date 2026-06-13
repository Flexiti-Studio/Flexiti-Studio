'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import PortfolioCard from './PortfolioCard';
import { portfolioItems as staticItems, staticFeaturedItems } from './portfolio-data';
import { PortfolioItem } from './types';

interface PortfolioGridProps {
  items?: PortfolioItem[];
  onViewCaseStudy?: (item: PortfolioItem) => void;
}

const CATEGORY_FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'software', label: 'Web & Software' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'saas', label: 'SaaS Platforms' },
  { id: 'ai-systems', label: 'AI Systems' }
];

const INDUSTRIES = [
  { id: 'all', label: 'All Industries' },
  { id: 'hardware', label: 'Hardware & IoT' },
  { id: 'digital-training', label: 'Education & Training' },
  { id: 'design', label: 'Creative Design' }
];

export default function PortfolioGrid({ items = staticItems, onViewCaseStudy }: PortfolioGridProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeIndustry, setActiveIndustry] = useState<string>('all');

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  // Filter projects dynamically
  const filteredItems = items.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesIndustry = activeIndustry === 'all' || item.industry === activeIndustry;
    return matchesCategory && matchesIndustry;
  });

  return (
    <section className={`px-8 py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title Section */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="w-12 h-[1px] bg-blue-500" />
            <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>More Projects</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-6xl font-black font-headline tracking-tighter mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            EXPANDING <br /> THE HORIZONS
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`max-w-xl text-lg font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
          >
            A curated selection of diverse digital products we&apos;ve engineered across various high-growth industries.
          </motion.p>
        </div>

        {/* Dynamic Connected Filter Block */}
        <div 
          className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-8 p-6 md:p-8 rounded-[2rem] border backdrop-blur-xl transition-all duration-700 mb-16 ${
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
              {CATEGORY_FILTERS.map((cat) => (
                <button 
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setActiveIndustry('all');
                  }}
                  className={`relative px-6 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    activeCategory === cat.id 
                      ? 'text-white' 
                      : isDark 
                        ? 'text-slate-400 hover:text-white' 
                        : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {activeCategory === cat.id && (
                    <motion.div 
                      layoutId="activeFilter"
                      className={`absolute inset-0 rounded-xl -z-10 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md ${
                        isDark ? 'shadow-indigo-500/20' : 'shadow-indigo-500/10'
                      }`}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                    />
                  )}
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Industry selector dropdown */}
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <span className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-colors ${
              isDark ? 'text-slate-500' : 'text-slate-400'
            }`}>
              Industry Focus
            </span>
            <div className="relative flex items-center w-full md:w-56">
              <select 
                value={activeIndustry}
                onChange={(e) => {
                  setActiveIndustry(e.target.value);
                  setActiveCategory('all');
                }}
                className={`w-full px-6 py-3 rounded-xl border font-bold text-xs uppercase tracking-widest outline-none appearance-none cursor-pointer transition-all duration-300 pr-10 ${
                  isDark 
                    ? 'bg-zinc-950 border-white/10 text-white focus:border-indigo-500' 
                    : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500 shadow-inner'
                }`}
              >
                {INDUSTRIES.map((ind) => (
                  <option 
                    key={ind.id} 
                    value={ind.id}
                    className={isDark ? 'bg-zinc-950 text-white' : 'bg-white text-slate-900'}
                  >
                    {ind.label}
                  </option>
                ))}
              </select>
              
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

        {/* Projects Cards Grid */}
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <PortfolioCard 
                    item={item} 
                    onViewCaseStudy={onViewCaseStudy}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <svg className="w-16 h-16 text-slate-400 mb-6 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.008 1.24l.885 1.77a2.25 2.25 0 002.007 1.24h1.98a2.25 2.25 0 002.007-1.24l.885-1.77a2.25 2.25 0 012.007-1.24h3.86m-18 0h18a2 2 0 002-2v-3a2 2 0 00-2-2H2.25a2 2 0 00-2 2v3a2 2 0 002 2z" />
              </svg>
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>No projects matched your filters</h3>
              <p className="text-slate-500 mt-2">Try clearing your filters or selecting a different category.</p>
              <button 
                onClick={() => { setActiveCategory('all'); setActiveIndustry('all'); }}
                className="mt-6 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background Grid Accent */}
      <div className={`absolute inset-0 opacity-[0.02] pointer-events-none ${isDark ? 'bg-[radial-gradient(#fff_1px,transparent_1px)]' : 'bg-[radial-gradient(#000_1px,transparent_1px)]'} [background-size:40px_40px]`} />
    </section>
  );
}