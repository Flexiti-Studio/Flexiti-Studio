'use client';

import { useEffect, useState } from 'react';
import type { MemeAssetType } from './types';

interface Props {
  onPlay: (video: MemeAssetType) => void;
  category?: string;
  sort?: string;
  search?: string;
}

export default function MemesLibraryGrid({ onPlay, category = 'all', sort = 'newest', search = '' }: Props) {
  const [items, setItems] = useState<MemeAssetType[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          category,
          sort,
          q: search,
          page: page.toString(),
          limit: '12',
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

  if (loading && page === 1) {
    return (
      <div className="flex-grow space-y-8">
        <div className="h-8 w-48 bg-slate-200 rounded animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-[16/10] bg-slate-100 rounded-3xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow space-y-8">
      <h3 className="text-2xl font-bold font-headline">
        {category === 'all' ? 'Recently Added' : `${category} Memes`}
      </h3>

      {items.length === 0 ? (
        <div className="bg-surface-container-low rounded-3xl p-20 text-center border border-dashed border-slate-200">
          <span className="material-symbols-outlined text-5xl text-outline mb-4 block">sentiment_dissatisfied</span>
          <p className="font-bold text-on-surface-variant text-lg">No memes found</p>
          <p className="text-sm text-outline mt-1">Try adjusting your filters or search terms.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((v) => (
            <div
              key={v._id}
              className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => onPlay(v)}
            >
              <div className="relative aspect-[16/10]">
                {v.thumbnailUrl ? (
                  <img className="w-full h-full object-cover" alt={v.title} src={v.thumbnailUrl} />
                ) : (
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                    <span className="material-symbols-outlined text-5xl text-slate-400">videocam</span>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform">
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
                {v.duration && (
                  <span className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-black/60 text-white text-[10px] font-bold backdrop-blur-sm">
                    {v.duration}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary px-2.5 py-1 rounded-md bg-primary/10">
                    {v.category}
                  </span>
                  <button
                    className="text-outline hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Would call bookmark API here
                    }}
                  >
                    <span className="material-symbols-outlined">bookmark</span>
                  </button>
                </div>
                <h4 className="text-on-surface font-bold text-lg leading-tight mb-4 truncate">{v.title}</h4>
                <div className="flex items-center justify-between">
                  <a
                    href={`/api/download/${v._id}`}
                    className="flex items-center gap-2 px-4 py-2 bg-surface-container-low text-on-surface text-xs font-bold rounded-xl hover:bg-primary hover:text-white transition-all"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span> Download
                  </a>
                  <span className="text-outline text-[11px] font-medium">{v.downloads || 0} Downloads</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 pt-8">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-surface-container-low rounded-xl text-sm font-bold disabled:opacity-40 hover:bg-slate-200"
          >
            Prev
          </button>
          <span className="text-sm font-bold">Page {page} of {totalPages}</span>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-surface-container-low rounded-xl text-sm font-bold disabled:opacity-40 hover:bg-slate-200"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
