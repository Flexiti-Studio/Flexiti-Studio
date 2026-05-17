'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface BlogSidebarProps {
  trendingStories: Array<{ num: string, title: string, tag: string }>;
  topics: string[];
  onTopicClick?: (topic: string) => void;
}

export default function BlogSidebar({ trendingStories, topics, onTopicClick }: BlogSidebarProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <aside className="space-y-12">
      
      {/* Trending Posts */}
      <div className={`p-8 rounded-[2rem] border transition-colors duration-500 ${
        isDark ? 'bg-zinc-950/40 border-white/5' : 'bg-slate-50/50 border-slate-100'
      }`}>
        <h4 className={`text-xs font-bold uppercase tracking-[0.2em] mb-8 flex items-center gap-2.5 transition-colors duration-500 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          {/* Custom SVG Trending Icon */}
          <svg className="w-4 h-4 text-sky-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          Trending Now
        </h4>
        
        <div className="space-y-8">
          {trendingStories.map((story) => (
            <motion.a 
              key={story.num} 
              whileHover={{ x: 3 }}
              className="group block" 
              href="#"
            >
              <div className="flex gap-4 items-start">
                <span className={`text-2xl font-black font-headline tracking-tight transition-colors duration-300 ${
                  isDark ? 'text-white/10 group-hover:text-sky-500/30' : 'text-slate-200 group-hover:text-sky-500/20'
                }`}>
                  {story.num}
                </span>
                <div className="space-y-1">
                  <h5 className={`font-bold text-xs leading-normal transition-colors duration-300 group-hover:text-sky-500 ${
                    isDark ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    {story.title}
                  </h5>
                  <span className={`block text-[9px] font-bold uppercase tracking-widest ${
                    isDark ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    {story.tag}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Hire Flexiti CTA Widget */}
      <motion.div 
        whileHover={{ y: -2 }}
        className={`p-8 rounded-[2rem] relative overflow-hidden group shadow-xl transition-all duration-300 ${
          isDark 
            ? 'bg-zinc-950 border border-white/5 shadow-white/5' 
            : 'bg-slate-900 border border-slate-800 shadow-slate-900/10'
        }`}
      >
        <div className="relative z-10 space-y-6">
          <div>
            <p className="font-bold text-[9px] uppercase tracking-widest text-sky-400">
              Work with us
            </p>
            <h4 className="text-2xl font-black font-headline text-white leading-tight mt-2">
              Bring your <br />ideas to life.
            </h4>
            <p className="text-slate-400 text-xs font-medium leading-relaxed mt-2 max-w-[240px]">
              Elite product design & engineering for ambitious scale-ups.
            </p>
          </div>
          
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-6 h-11 rounded-full font-bold text-[10px] uppercase tracking-widest bg-white text-black hover:bg-slate-100 transition-colors shadow-lg shadow-black/10 active:scale-95"
          >
            Start Project
            {/* Custom inline arrow SVG */}
            <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </Link>
        </div>
        
        {/* Glow Effects */}
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[70px] opacity-15 bg-sky-500 pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-[70px] opacity-10 bg-indigo-500 pointer-events-none" />
      </motion.div>

      {/* Explore Topics */}
      <div className={`p-8 rounded-[2rem] border transition-colors duration-500 ${
        isDark ? 'bg-zinc-950/40 border-white/5' : 'bg-slate-50/50 border-slate-100'
      }`}>
        <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-6 transition-colors duration-500 ${
          isDark ? 'text-slate-500' : 'text-slate-400'
        }`}>
          Explore Topics
        </h4>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => onTopicClick?.(topic)}
              className={`px-4.5 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all border ${
                isDark 
                  ? 'bg-zinc-900 border-white/5 text-slate-400 hover:text-white hover:bg-zinc-800' 
                  : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              #{topic}
            </button>
          ))}
        </div>
      </div>

    </aside>
  );
}
