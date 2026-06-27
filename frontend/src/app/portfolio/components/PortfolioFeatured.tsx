'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PortfolioItem } from './types';
import { categoryLabels, staticFeaturedItems } from './portfolio-data';

interface PortfolioFeaturedProps {
  items?: PortfolioItem[];
  onViewCaseStudy?: (item: PortfolioItem) => void;
}

export default function PortfolioFeatured({ items = [], onViewCaseStudy }: PortfolioFeaturedProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  // Filter projects dynamically
  const featuredItems = items.filter(item => item.featured === true);
  
  // If live featured items exist, use them. Otherwise, fall back to staticFeaturedItems. Limit to 2.
  const displayProjects = (featuredItems.length > 0 ? featuredItems : staticFeaturedItems).slice(0, 2);

  return (
    <section className="px-8 max-w-7xl mx-auto space-y-40 mb-40 w-full">
      {displayProjects.map((project, index) => (
        <FeaturedProjectCard 
          key={project.id || project.title}
          project={project}
          index={index}
          isDark={isDark}
          onViewCaseStudy={onViewCaseStudy}
        />
      ))}
    </section>
  );
}

interface FeaturedProjectCardProps {
  project: PortfolioItem;
  index: number;
  isDark: boolean;
  onViewCaseStudy?: (item: PortfolioItem) => void;
}

function FeaturedProjectCard({ project, index, isDark, onViewCaseStudy }: FeaturedProjectCardProps) {
  const [activeTab, setActiveTab] = useState<'challenge' | 'solution' | 'result'>('challenge');

  const getNarrativeContent = () => {
    if (activeTab === 'challenge') return project.challenge || 'Coming Soon';
    if (activeTab === 'solution') return project.solution || 'Coming Soon';
    if (activeTab === 'result') return project.result || 'Coming Soon';
    return 'Coming Soon';
  };

  return (
    <div 
      className={`grid md:grid-cols-2 gap-16 lg:gap-24 items-center ${
        index % 2 !== 0 ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Text Details Block */}
      <motion.div 
        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'} space-y-8`}
      >
        <div className="space-y-6">

          
          {/* Title */}
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline leading-tight tracking-tight transition-colors ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {project.title}
          </h2>

          {/* Narrative Tabs Controller */}
          <div className="space-y-4">
            <div className={`flex border-b ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
              {(['challenge', 'solution', 'result'] as const).map((tab) => {
                const isSelected = activeTab === tab;
                let label = '';
                if (tab === 'challenge') label = 'The Challenge';
                if (tab === 'solution') label = 'The Solution';
                if (tab === 'result') label = 'The Result';

                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative pb-3 px-4 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      isSelected 
                        ? isDark ? 'text-white' : 'text-slate-900'
                        : 'text-slate-400 hover:text-slate-500 dark:hover:text-slate-300'
                    }`}
                  >
                    {label}
                    {isSelected && (
                      <motion.div 
                        layoutId={`activeNarrativeTab-${project.id || project.title}`}
                        className={`absolute bottom-0 left-0 right-0 h-[2px] ${
                          tab === 'challenge' ? 'bg-indigo-500' : tab === 'solution' ? 'bg-purple-500' : 'bg-emerald-500'
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab Narrative Content */}
            <div className="min-h-[100px] py-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className={`text-base font-medium leading-relaxed transition-colors line-clamp-3 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {getNarrativeContent() || `No ${activeTab} description available for this project.`}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dynamic Metadata Row (Prioritized Grouping) */}
        {(project.client || project.year || project.type || project.timeline) && (
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y text-[10px] font-bold uppercase tracking-wider ${
            isDark ? 'border-white/5 text-slate-400' : 'border-slate-200 text-slate-500'
          }`}>
            {project.client && (
              <div>
                <span className="block text-slate-500 text-[8px] tracking-widest mb-1">Client</span>
                <span className={isDark ? 'text-slate-300' : 'text-slate-800'}>{project.client}</span>
              </div>
            )}
            {project.year && (
              <div>
                <span className="block text-slate-500 text-[8px] tracking-widest mb-1">Year</span>
                <span className={isDark ? 'text-slate-300' : 'text-slate-800'}>{project.year}</span>
              </div>
            )}
            {project.type && (
              <div>
                <span className="block text-slate-500 text-[8px] tracking-widest mb-1">Type</span>
                <span className={isDark ? 'text-slate-300' : 'text-slate-800'}>{project.type}</span>
              </div>
            )}
            {project.timeline && (
              <div>
                <span className="block text-slate-500 text-[8px] tracking-widest mb-1">Timeline</span>
                <span className={isDark ? 'text-slate-300' : 'text-slate-800'}>{project.timeline}</span>
              </div>
            )}
          </div>
        )}

        {/* Tech Chips Wrapper */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map(t => (
              <span 
                key={t} 
                className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border transition-colors ${
                  isDark 
                    ? 'bg-zinc-900/50 border-white/5 text-slate-500' 
                    : 'bg-slate-50 border-slate-200 text-slate-400'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* CTA Case Study Trigger */}
        <button 
          onClick={() => onViewCaseStudy?.(project)}
          className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] transition-all hover:opacity-85 cursor-pointer"
        >
          <span className={isDark ? 'text-white' : 'text-slate-900'}>
            View Case Study
          </span>
          <svg className="w-4 h-4 text-indigo-500 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </motion.div>

      {/* Graphical Mockup Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'} relative group cursor-pointer`}
        onClick={() => onViewCaseStudy?.(project)}
      >
        {/* Ambient Radial Hover Backlights */}
        <div 
          className={`absolute -inset-4 rounded-[3rem] blur-2xl opacity-15 pointer-events-none transition-all duration-700 group-hover:opacity-35 ${
            isDark ? 'bg-indigo-600' : 'bg-indigo-400'
          }`} 
        />
        
        <div 
          className={`relative rounded-[2rem] overflow-hidden border p-3 shadow-2xl transition-all duration-700 ${
            isDark 
              ? 'bg-white/5 border-white/10 shadow-black/40' 
              : 'bg-white border-slate-200 shadow-[0_20px_50px_rgba(99,102,241,0.04)]'
          }`}
        >
          <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden">
            <Image 
              src={project.image || ''} 
              alt={project.title} 
              fill
              sizes="(max-w-768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Badges above the image */}
            <div className="absolute top-4 left-4 flex gap-2 z-20">
              <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border backdrop-blur-md transition-colors ${
                isDark 
                  ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' 
                  : 'bg-white/90 border-indigo-100 text-indigo-700'
              }`}>
                {categoryLabels[project.category] || project.category}
              </span>
              {project.status && (
                <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border backdrop-blur-md transition-colors ${
                  isDark 
                    ? 'bg-zinc-800/80 border-white/10 text-slate-400' 
                    : 'bg-slate-900/80 border-white/10 text-white'
                }`}>
                  {project.status.replace('-', ' ')}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
