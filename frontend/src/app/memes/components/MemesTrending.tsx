'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import type { MemeAssetType } from './types';

interface Props { onPlay: (video: MemeAssetType) => void; }

export default function MemesTrending({ onPlay }: Props) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState<MemeAssetType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    async function load() {
      try {
        const res = await fetch('/api/trending');
        const data = await res.json();
        setItems(data.items || []);
      } catch (err) {
        console.error('Failed to load trending memes:', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  if (loading) {
    return (
      <section className="py-10">
        <div className={`h-8 w-64 rounded-full mb-8 animate-pulse ${isDark ? 'bg-white/5' : 'bg-slate-200'}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`aspect-video rounded-[2rem] animate-pulse ${isDark ? 'bg-white/5' : 'bg-slate-100'}`} />
          ))}
        </div>
      </section>
    );
  }

  if (items.length === 0) return null;

  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-8 bg-blue-500 rounded-full" />
          <h3 className={`text-3xl font-black font-headline ${isDark ? 'text-white' : 'text-slate-900'}`}>Trending Now</h3>
        </div>
        <button className={`text-sm font-black uppercase tracking-widest flex items-center gap-2 px-6 py-2.5 rounded-full border transition-all ${isDark ? 'text-blue-400 border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10' : 'text-blue-600 border-blue-200 bg-blue-50 hover:bg-blue-100'}`}>
          View All <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatePresence>
          {items.map((meme, idx) => (
            <motion.div
              key={meme._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative aspect-video rounded-[2rem] overflow-hidden border transition-all duration-500 cursor-pointer ${isDark ? 'bg-zinc-900 border-white/5 shadow-2xl shadow-black/50' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'}`}
              onClick={() => onPlay(meme)}
            >
              {meme.thumbnailUrl ? (
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  alt={meme.title}
                  src={meme.thumbnailUrl}
                />
              ) : (
                <div className={`w-full h-full flex items-center justify-center ${isDark ? 'bg-zinc-800' : 'bg-slate-100'}`}>
                  <span className="material-symbols-outlined text-4xl text-slate-400">videocam</span>
                </div>
              )}

              {/* Overlay Decor */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[9px] font-black text-white tracking-[0.15em] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-red-500" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span> 
                    TRENDING
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-2xl rounded-full flex items-center justify-center border border-white/40 scale-90 group-hover:scale-100 transition-transform">
                    <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>

                <h4 className="text-white font-black text-lg leading-tight truncate drop-shadow-lg mb-1">{meme.title}</h4>
                <div className="flex items-center gap-3">
                   <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{meme.category}</p>
                   {meme.duration && (
                     <div className="flex items-center gap-1 text-white/40 text-[10px] font-bold">
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        {meme.duration}
                     </div>
                   )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
