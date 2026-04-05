'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import type { MemeAssetType } from './types';

interface Props {
  onPlay: (video: MemeAssetType) => void;
  category?: string;
  sort?: string;
  search?: string;
}

export default function MemesLibraryGrid({ onPlay, category = 'all', sort = 'newest', search = '' }: Props) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState<MemeAssetType[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setMounted(true);
    async function load() {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          category,
          sort,
          q: search,
          page: page.toString(),
          limit: '24',
        });
        const res = await fetch(`/api/memes?${params.toString()}`);
        const data = await res.json();
        setItems(data.items || []);
        setTotalPages(data.totalPages || 1);
      } catch (err) {
        console.error('Failed to load memes:', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [category, sort, search, page]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [category, sort, search]);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  if (loading && page === 1) {
    return (
      <div className="flex-grow space-y-12">
        <div className={`h-10 w-64 rounded-full animate-pulse ${isDark ? 'bg-white/5' : 'bg-slate-200'}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={`aspect-[16/11] rounded-[2.5rem] animate-pulse ${isDark ? 'bg-white/5' : 'bg-slate-100'}`} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div id="memes-library" className="flex-grow space-y-12 scroll-mt-32">
      <div className="flex items-center gap-4">
        <div className="w-1.5 h-8 bg-blue-500 rounded-full" />
        <h3 className={`text-3xl font-black font-headline ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {category === 'all' ? 'Recently Added' : `${category} Memes`}
        </h3>
      </div>

      {items.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-[3rem] p-32 text-center border-4 border-dashed transition-colors ${isDark ? 'bg-zinc-900/40 border-white/5' : 'bg-slate-50 border-slate-200'}`}
        >
          <span className="material-symbols-outlined text-7xl text-slate-400 mb-6 block font-light">search_off</span>
          <p className={`font-black text-2xl mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>No assets found</p>
          <p className={`text-sm font-medium ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>We couldn&apos;t find any memes matching your criteria.</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {items.map((v, idx) => (
              <motion.div
                key={v._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`group rounded-[2.5rem] overflow-hidden border transition-all duration-500 cursor-pointer flex flex-col ${isDark ? 'bg-zinc-900 border-white/5 shadow-2xl shadow-black/40 hover:border-white/10' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50 hover:bg-slate-50'}`}
                onClick={() => onPlay(v)}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {v.thumbnailUrl ? (
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={v.title} src={v.thumbnailUrl} />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center ${isDark ? 'bg-zinc-800' : 'bg-slate-100'}`}>
                      <span className="material-symbols-outlined text-5xl text-slate-400">videocam</span>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/20">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-2xl rounded-full flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform border border-white/40">
                      <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[8px] font-black text-white tracking-[0.2em] uppercase border border-white/10">
                      Premium
                    </span>
                    {v.duration && (
                      <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[8px] font-black text-white tracking-widest uppercase border border-white/10">
                        {v.duration}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border ${isDark ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-blue-50 text-blue-600 border-blue-200'}`}>
                      {v.category}
                    </span>
                    <button className={`text-slate-400 hover:scale-110 transition-all active:scale-90`}>
                      <span className="material-symbols-outlined text-[20px]">favorite</span>
                    </button>
                  </div>

                  <h4 className={`font-black text-lg leading-tight mb-8 line-clamp-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {v.title}
                  </h4>

                  <div className="mt-auto pt-6 border-t border-dashed border-slate-200 dark:border-white/5 flex items-center justify-between">
                    <a
                      href={`/api/download/${v._id}`}
                      className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-[10px] font-black tracking-widest uppercase transition-all shadow-lg active:scale-95 ${isDark ? 'bg-white text-black shadow-white/5 hover:bg-slate-100' : 'bg-slate-900 text-white shadow-slate-900/20 hover:bg-black'}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>download_for_offline</span> 
                      Get File
                    </a>
                    <div className="text-right">
                       <p className={`text-[11px] font-black ${isDark ? 'text-white/60' : 'text-slate-900'}`}>{v.downloads || 0}</p>
                       <p className="text-[8px] font-black uppercase tracking-widest text-slate-400">Downloads</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-6 pt-12">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className={`w-14 h-14 flex items-center justify-center rounded-2xl transition-all border disabled:opacity-30 ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50'}`}
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          
          <div className={`px-8 py-4 rounded-2xl font-black text-xs border ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
             {page} <span className="text-slate-400 mx-2">/</span> {totalPages}
          </div>

          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className={`w-14 h-14 flex items-center justify-center rounded-2xl transition-all border disabled:opacity-30 ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50'}`}
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      )}
    </div>
  );
}
