'use client';

import { useState, useEffect } from 'react';
import MemesTrending from './MemesTrending';
import MemesLibraryGrid from './MemesLibraryGrid';
import MemesPlayModal from './MemesPlayModal';
import MemesSidebar from './MemesSidebar';
import type { MemeAssetType } from './types';

export default function MemesClient() {
  const [activeVideo, setActiveVideo] = useState<MemeAssetType | null>(null);
  const [category, setCategory]   = useState('all');
  const [sort, setSort]           = useState('newest');
  const [search, setSearch]       = useState('');
  const [categories, setCategories] = useState<{name: string, count: number}[]>([]);

  // Fetch categories for the filter bar
  useEffect(() => {
    async function loadCats() {
      const res = await fetch('/api/categories');
      const data = await res.json();
      setCategories(data.categories || []);
    }
    loadCats();
  }, []);

  return (
    <div className="space-y-10">
      {/* Trending Section */}
      <MemesTrending onPlay={setActiveVideo} />

      {/* Filter Bar */}
      <section className="flex flex-col md:flex-row gap-6 items-center justify-between bg-surface-container-lowest/50 backdrop-blur-md p-4 rounded-3xl border border-slate-50 shadow-sm sticky top-24 z-30">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
          <button
            onClick={() => setCategory('all')}
            className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
              category === 'all'
                ? 'bg-primary text-on-primary shadow-lg shadow-primary/20'
                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
            }`}
          >
            All Memes
          </button>
          {categories.slice(0, 6).map((cat) => (
            <button
              key={cat.name}
              onClick={() => setCategory(cat.name)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                category === cat.name
                  ? 'bg-primary text-on-primary shadow-lg shadow-primary/20'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Search input */}
          <div className="relative flex-grow md:flex-grow-0">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl">search</span>
            <input
              type="text"
              placeholder="Search library..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-64 bg-surface-container-high border-none rounded-2xl py-2.5 pl-10 pr-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none"
            />
          </div>

          {/* Sort dropdown */}
          <div className="relative min-w-[160px]">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full appearance-none bg-surface-container-low border-none rounded-2xl py-2.5 pl-4 pr-10 text-sm font-bold text-on-surface-variant focus:ring-2 focus:ring-primary/20 cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="trending">Trending</option>
              <option value="downloads">Most Downloaded</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
          </div>
        </div>
      </section>

      {/* Main Content Area: Grid + Sidebar (on desktop) */}
      <div className="flex flex-col xl:flex-row gap-10">
        <div className="flex-grow">
          <MemesLibraryGrid
            onPlay={setActiveVideo}
            category={category}
            sort={sort}
            search={search}
          />

          {/* Sidebar stats below library on mobile */}
          <div className="xl:hidden mt-10">
            <MemesSidebar 
              activeCategory={category} 
              onCategoryChange={setCategory} 
            />
          </div>
        </div>

        {/* Sidebar only on XL */}
        <aside className="hidden xl:block w-80 flex-shrink-0">
          <MemesSidebar 
            activeCategory={category} 
            onCategoryChange={setCategory} 
          />
        </aside>
      </div>

      {/* Playback Modal */}
      {activeVideo && (
        <MemesPlayModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
          onPlay={setActiveVideo}
        />
      )}
    </div>
  );
}
