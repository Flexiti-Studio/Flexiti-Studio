'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import MemesTrending from './MemesTrending';
import MemesLibraryGrid from './MemesLibraryGrid';
import MemesPlayModal from './MemesPlayModal';
import MemesSidebar from './MemesSidebar';
import type { MemeAssetType } from './types';

export default function MemesClient() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeVideo, setActiveVideo] = useState<MemeAssetType | null>(null);
  const [category, setCategory]   = useState('all');
  const [sort, setSort]           = useState('newest');
  const [search, setSearch]       = useState('');
  const [categories, setCategories] = useState<{name: string, count: number}[]>([]);

  useEffect(() => {
    setMounted(true);
    async function loadCats() {
      const res = await fetch('/api/categories');
      const data = await res.json();
      setCategories(data.categories || []);
    }
    loadCats();
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <div className="space-y-16">
      {/* Trending Section */}
      <MemesTrending onPlay={setActiveVideo} />

      {/* Filter Bar */}
      <section className={`flex flex-col lg:flex-row gap-8 items-center justify-between backdrop-blur-3xl p-6 md:p-8 rounded-[2.5rem] border sticky top-28 z-30 transition-all duration-500 ${isDark ? 'bg-zinc-900/60 border-white/10 shadow-2xl shadow-black/40' : 'bg-white/80 border-slate-200 shadow-xl shadow-slate-200/40'}`}>
        <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full lg:w-auto scrollbar-hide">
          <button
            onClick={() => setCategory('all')}
            className={`px-8 py-3 rounded-2xl text-[10px] font-black tracking-widest uppercase transition-all whitespace-nowrap ${
              category === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : `border ${isDark ? 'bg-white/5 border-white/5 text-white/40 hover:text-white hover:bg-white/10' : 'bg-slate-50 border-slate-100 text-slate-400 hover:text-slate-900 hover:bg-white'}`
            }`}
          >
            All Memes
          </button>
          <AnimatePresence>
            {categories.slice(0, 8).map((cat) => (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => setCategory(cat.name)}
                className={`px-8 py-3 rounded-2xl text-[10px] font-black tracking-widest uppercase transition-all whitespace-nowrap ${
                  category === cat.name
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : `border ${isDark ? 'bg-white/5 border-white/5 text-white/40 hover:text-white hover:bg-white/10' : 'bg-slate-50 border-slate-100 text-slate-400 hover:text-slate-900 hover:bg-white'}`
                }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-5 w-full lg:w-auto">
          {/* Search input */}
          <div className="relative w-full sm:w-80">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
            <input
              type="text"
              placeholder="Search assets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full h-14 rounded-2xl py-2.5 pl-12 pr-4 text-xs font-black tracking-widest uppercase outline-none border transition-all ${isDark ? 'bg-zinc-950 border-white/10 text-white focus:border-blue-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-600/30'}`}
            />
          </div>

          {/* Sort dropdown */}
          <div className="relative w-full sm:w-auto min-w-[200px]">
             <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className={`w-full h-14 appearance-none rounded-2xl pl-12 pr-10 text-[10px] font-black tracking-widest uppercase outline-none border transition-all cursor-pointer ${isDark ? 'bg-zinc-950 border-white/10 text-white focus:border-blue-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-600/30'}`}
            >
              <option value="newest">Newest First</option>
              <option value="trending">Trending</option>
              <option value="downloads">Most Popular</option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
          </div>
        </div>
      </section>

      {/* Main Content Area: Grid + Sidebar */}
      <div className="flex flex-col xl:flex-row gap-16">
        <div className="flex-grow">
          <MemesLibraryGrid
            onPlay={setActiveVideo}
            category={category}
            sort={sort}
            search={search}
          />
        </div>

        {/* Sidebar stats */}
        <aside className="w-full xl:w-80 flex-shrink-0">
          <MemesSidebar 
            activeCategory={category} 
            onCategoryChange={setCategory} 
          />
        </aside>
      </div>

      {/* Playback Modal */}
      <AnimatePresence>
        {activeVideo && (
          <MemesPlayModal
            video={activeVideo}
            onClose={() => setActiveVideo(null)}
            onPlay={setActiveVideo}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
