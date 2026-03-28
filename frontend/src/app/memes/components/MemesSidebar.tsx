'use client';

import { useEffect, useState } from 'react';

interface MemesSidebarProps {
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export default function MemesSidebar({ activeCategory = 'all', onCategoryChange }: MemesSidebarProps) {
  const [stats, setStats] = useState({ totalVideos: 0, trendingCount: 0, totalDownloads: 0 });
  const [categories, setCategories] = useState<{ name: string; count: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  if (loading) {
    return <aside className="space-y-8 animate-pulse">
      <div className="h-64 bg-slate-100 rounded-3xl" />
      <div className="h-48 bg-slate-100 rounded-3xl" />
    </aside>;
  }

  return (
    <aside className="space-y-8 sticky top-24">
      {/* Platform Stats */}
      <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-slate-50">
        <h4 className="text-lg font-bold font-headline mb-6">Library Insights</h4>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">video_library</span>
              </div>
              <span className="text-sm font-bold text-on-surface-variant">Total Assets</span>
            </div>
            <span className="text-sm font-black text-on-surface">{stats.totalVideos.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-error/10 flex items-center justify-center text-error">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <span className="text-sm font-bold text-on-surface-variant">Trending Now</span>
            </div>
            <span className="text-sm font-black text-on-surface">{stats.trendingCount.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600">
                <span className="material-symbols-outlined">download_done</span>
              </div>
              <span className="text-sm font-bold text-on-surface-variant">Downloads</span>
            </div>
            <span className="text-sm font-black text-on-surface">{stats.totalDownloads.toLocaleString()}</span>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-50">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-outline">Community Reach</span>
            <span className="text-xs font-black text-primary">High</span>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full w-[85%] bg-gradient-to-r from-primary to-blue-400" />
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-slate-50">
        <h4 className="text-lg font-bold font-headline mb-6">All Categories</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => onCategoryChange?.(cat.name)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                activeCategory === cat.name
                  ? 'bg-primary text-white border-primary'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-primary hover:text-white border-transparent hover:border-primary/20'
              }`}
            >
              {cat.name} <span className="opacity-50 ml-1">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
