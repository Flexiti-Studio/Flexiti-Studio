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
    <aside className="space-y-16">
      {/* Trending Posts */}
      <div className={`p-8 rounded-[2.5rem] border ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-slate-50/50 border-slate-100'}`}>
        <h4 className={`text-xs font-black uppercase tracking-[0.2em] mb-10 flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          <span className="material-symbols-outlined text-blue-500 text-[20px]">trending_up</span>
          Trending Now
        </h4>
        <div className="space-y-10">
          {trendingStories.map((story) => (
            <motion.a 
              key={story.num} 
              whileHover={{ x: 5 }}
              className="group block" 
              href="#"
            >
              <div className="flex gap-6">
                <span className={`text-3xl font-black font-headline transition-colors ${isDark ? 'text-white/10 group-hover:text-blue-500/30' : 'text-slate-200 group-hover:text-blue-500/20'}`}>
                  {story.num}
                </span>
                <div>
                  <h5 className={`font-black text-sm mb-2 transition-colors group-hover:text-blue-500 ${isDark ? 'text-white' : 'text-slate-900'}`}>{story.title}</h5>
                  <span className={`text-[9px] font-black uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{story.tag}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Hire Flexiti CTA Widget */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className={`p-10 rounded-[2.5rem] relative overflow-hidden group shadow-2xl ${isDark ? 'bg-zinc-900 shadow-white/5 border-white/5' : 'bg-slate-900 shadow-slate-900/20'}`}
      >
        <div className="relative z-10">
          <p className={`font-black text-[9px] uppercase tracking-widest mb-4 ${isDark ? 'text-blue-400' : 'text-blue-400'}`}>Work with us</p>
          <h4 className={`text-2xl font-black font-headline mb-4 leading-tight ${isDark ? 'text-white' : 'text-white'}`}>Bring your <br />ideas to life.</h4>
          <p className={`mb-8 text-sm font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>Elite product design & engineering for ambitious scale-ups.</p>
          <Link 
            href="/contact"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${isDark ? 'bg-white text-black hover:bg-slate-100' : 'bg-white text-black hover:bg-slate-100'}`}
          >
            Start Project
            <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </Link>
        </div>
        
        {/* Glow Effects */}
        <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 ${isDark ? 'bg-blue-600' : 'bg-blue-600'}`}></div>
        <div className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-10 ${isDark ? 'bg-purple-600' : 'bg-purple-600'}`}></div>
      </motion.div>

      {/* Tags Cloud */}
      <div className={`p-8 rounded-[2.5rem] border ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-slate-50/50 border-slate-100'}`}>
        <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] mb-8 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Explore Topics</h4>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => onTopicClick?.(topic)}
              className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${isDark ? 'bg-zinc-800 border-white/5 text-slate-400 hover:text-white hover:bg-zinc-700' : 'bg-white border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-500/30'}`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
