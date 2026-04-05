'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface MemesSidebarProps {
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export default function MemesSidebar({ activeCategory = 'all', onCategoryChange }: MemesSidebarProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState({ totalVideos: 0, trendingCount: 0, totalDownloads: 0 });
  const [categories, setCategories] = useState<{ name: string; count: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    async function load() {
      try {
        const [statsRes, catsRes] = await Promise.all([
          fetch('/api/stats'),
          fetch('/api/categories'),
        ]);
        const statsData = await statsRes.json();
        const catsData  = await catsRes.json();
        setStats(statsData.stats || { totalVideos: 0, trendingCount: 0, totalDownloads: 0 });
        setCategories(catsData.categories || []);
      } catch (err) {
        console.error('Failed to load sidebar data:', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  if (loading) {
    return <aside className="space-y-12">
      <div className={`h-64 rounded-[2.5rem] animate-pulse ${isDark ? 'bg-white/5' : 'bg-slate-100'}`} />
      <div className={`h-48 rounded-[2.5rem] animate-pulse ${isDark ? 'bg-white/5' : 'bg-slate-100'}`} />
    </aside>;
  }

  return (
    <aside className="space-y-12 sticky top-36">
      {/* Platform Stats */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className={`p-10 rounded-[2.5rem] border transition-colors ${isDark ? 'bg-zinc-900 border-white/5 shadow-2xl shadow-black/40' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/40'}`}
      >
        <h4 className={`text-xl font-black font-headline mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>Library Insights</h4>
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-colors ${isDark ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
                <span className="material-symbols-outlined font-light">video_library</span>
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Total Assets</span>
            </div>
            <span className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{stats.totalVideos.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-colors ${isDark ? 'bg-red-500/10 border-red-500/20 text-red-500' : 'bg-red-50 border-red-100 text-red-600'}`}>
                <span className="material-symbols-outlined font-light" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Trending Now</span>
            </div>
            <span className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{stats.trendingCount.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-colors ${isDark ? 'bg-green-500/10 border-green-500/20 text-green-500' : 'bg-green-50 border-green-100 text-green-600'}`}>
                <span className="material-symbols-outlined font-light">download_for_offline</span>
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Downloads</span>
            </div>
            <span className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{stats.totalDownloads.toLocaleString()}</span>
          </div>
        </div>
        <div className="mt-10 pt-10 border-t border-dashed border-slate-200 dark:border-white/5">
          <div className="flex justify-between items-end mb-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Community Growth</span>
            <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">+12% Monthly</span>
          </div>
          <div className={`h-2.5 w-full rounded-full overflow-hidden ${isDark ? 'bg-zinc-800' : 'bg-slate-100'}`}>
            <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: '85%' }}
               transition={{ duration: 1.5, ease: 'easeOut' }}
               className="h-full bg-gradient-to-r from-blue-600 to-indigo-600" 
            />
          </div>
        </div>
      </motion.div>

      {/* Popular Categories */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className={`p-10 rounded-[2.5rem] border transition-colors ${isDark ? 'bg-zinc-900 border-white/5 shadow-2xl shadow-black/40' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/40'}`}
      >
        <h4 className={`text-xl font-black font-headline mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>Top Categories</h4>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => onCategoryChange?.(cat.name)}
              className={`px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                activeCategory === cat.name
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/30'
                  : `${isDark ? 'bg-white/5 border-white/5 text-white/40 hover:text-white hover:bg-white/10' : 'bg-slate-50 border-slate-100 text-slate-500 hover:text-slate-900 hover:bg-white'}`
              }`}
            >
              {cat.name} <span className="opacity-30 ml-2">{cat.count}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </aside>
  );
}
