'use client';

import { useEffect, useState } from 'react';
import type { MemeAssetType } from './types';

interface Props { onPlay: (video: MemeAssetType) => void; }

export default function MemesTrending({ onPlay }: Props) {
  const [items, setItems] = useState<MemeAssetType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  if (loading) {
    return (
      <section className="animate-pulse">
        <div className="h-8 w-48 bg-slate-200 rounded mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-video bg-slate-100 rounded-2xl" />
          ))}
        </div>
      </section>
    );
  }

  if (items.length === 0) return null;

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold font-headline">Currently Trending</h3>
        <a className="text-primary font-bold text-sm flex items-center gap-1 hover:underline" href="#">
          View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((meme) => (
          <div
            key={meme._id}
            className="group relative aspect-video rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => onPlay(meme)}
          >
            {/* Using 1st frame/thumbnail if available, otherwise a placeholder or video tag */}
            {meme.thumbnailUrl ? (
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={meme.title}
                src={meme.thumbnailUrl}
              />
            ) : (
              <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-slate-400">videocam</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5">
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm text-[10px] font-bold text-on-surface flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-error" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span> TRENDING
              </span>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                  <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </div>
              </div>
              <h4 className="text-white font-bold leading-tight truncate">{meme.title}</h4>
              <p className="text-white/60 text-xs mt-1">{meme.category} {meme.duration ? `• ${meme.duration}` : ''}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
