'use client';

import { useEffect, useState } from 'react';
import type { MemeAssetType } from './types';

interface Props {
  video: MemeAssetType;
  onClose: () => void;
  onPlay: (video: MemeAssetType) => void;
}

export default function MemesPlayModal({ video, onClose, onPlay }: Props) {
  const [related, setRelated] = useState<MemeAssetType[]>([]);
  const [showShare, setShowShare] = useState(false);

  // Fetch related videos (same category)
  useEffect(() => {
    async function loadRelated() {
      const res = await fetch(`/api/memes?category=${video.category}&limit=6`);
      const data = await res.json();
      setRelated((data.items || []).filter((v: MemeAssetType) => v._id !== video._id));
    }
    loadRelated();
    setShowShare(false);
  }, [video]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const stats = [
    { label: 'Resolution', value: '1080p' }, // Placeholder
    { label: 'File Size',  value: `${(video.sizeBytes / (1024 * 1024)).toFixed(1)} MB` },
    { label: 'Format',     value: video.mimeType.split('/').pop()?.toUpperCase() || 'MP4' },
    { label: 'Downloads',  value: video.downloads?.toLocaleString() || '0' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-on-surface/90 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      <div className="relative w-full max-w-7xl h-full max-h-[90vh] bg-surface-container-lowest rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col xl:flex-row animate-in slide-in-from-bottom-8 duration-500">
        {/* Close Button Mobile */}
        <button 
          onClick={onClose}
          className="xl:hidden absolute top-4 right-4 z-[110] w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-md"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Left: Video Player Area */}
        <div className="flex-grow bg-black flex flex-col">
          <div className="flex-grow flex items-center justify-center relative group">
            <video 
              key={video.publicUrl}
              src={video.publicUrl}
              controls
              autoPlay
              className="max-w-full max-h-full"
            />
          </div>
          
          {/* Related strip (below player on desktop) */}
          <div className="h-32 bg-on-surface/20 backdrop-blur-xl p-4 flex gap-4 overflow-x-auto items-center">
            {related.map((v) => (
              <div 
                key={v._id}
                onClick={() => onPlay(v)}
                className="w-40 h-full flex-shrink-0 bg-surface-container-low rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all relative group"
              >
                <img src={v.thumbnailUrl || v.publicUrl} alt={v.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="material-symbols-outlined text-white text-xl">play_arrow</span>
                </div>
              </div>
            ))}
            {related.length === 0 && <p className="text-white/40 text-sm italic py-4">No related memes found</p>}
          </div>
        </div>

        {/* Right: Sidebar Info */}
        <div className="w-full xl:w-[400px] flex-shrink-0 bg-surface-container-lowest border-l border-slate-100 flex flex-col p-8 overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-black font-headline text-on-surface pr-8 leading-tight">{video.title}</h2>
            <button 
              onClick={onClose}
              className="hidden xl:flex w-10 h-10 rounded-xl bg-surface-container-low text-on-surface-variant items-center justify-center hover:bg-slate-200 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-widest">{video.category}</span>
            {video.tags?.map(t => (
              <span key={t} className="px-3 py-1 rounded-lg bg-surface-container-low text-on-surface-variant text-[10px] font-bold">{t}</span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map(s => (
              <div key={s.label} className="p-4 rounded-2xl bg-surface-container-low/50 border border-slate-50">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-outline mb-1">{s.label}</p>
                <p className="text-sm font-black text-on-surface">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3 mb-8">
            <a 
              href={`/api/download/${video._id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-16 bg-primary text-on-primary rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-2xl">download</span>
              FREE DOWNLOAD
            </a>
            <div className="flex gap-3">
              <button 
                className="flex-1 h-14 bg-surface-container-high rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-all"
              >
                <span className="material-symbols-outlined text-xl">favorite</span>
                Save
              </button>
              <button 
                onClick={() => setShowShare(!showShare)}
                className="flex-1 h-14 bg-surface-container-high rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-all"
              >
                <span className="material-symbols-outlined text-xl">share</span>
                Share
              </button>
            </div>
            {showShare && (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex gap-4 animate-in slide-in-from-top-2">
                <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center"><i className="text-sm">X</i></button>
                <button className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center"><i className="text-sm">W</i></button>
                <div className="flex-grow relative">
                  <input readOnly value={global?.location?.href} className="w-full h-10 bg-white border border-slate-200 rounded-lg text-[10px] px-3 pr-10 outline-none" />
                  <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-sm text-slate-400 cursor-pointer">content_copy</span>
                </div>
              </div>
            )}
          </div>

          <div className="mt-auto">
            <div className="p-6 rounded-3xl bg-surface-container-low border-2 border-dashed border-primary/20">
              <h5 className="font-black text-primary text-xs uppercase tracking-widest mb-2">Usage License</h5>
              <p className="text-[11px] text-on-surface-variant leading-relaxed font-medium">
                This asset is free for commercial and non-commercial use. No attribution required, though appreciated. Redistribution as a library is prohibited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
