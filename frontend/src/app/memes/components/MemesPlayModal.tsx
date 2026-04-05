'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import type { MemeAssetType } from './types';

interface Props {
  video: MemeAssetType;
  onClose: () => void;
  onPlay: (video: MemeAssetType) => void;
}

export default function MemesPlayModal({ video, onClose, onPlay }: Props) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [related, setRelated] = useState<MemeAssetType[]>([]);
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
    async function loadRelated() {
      const res = await fetch(`/api/memes?category=${video.category}&limit=6`);
      const data = await res.json();
      setRelated((data.items || []).filter((v: MemeAssetType) => v._id !== video._id));
    }
    loadRelated();
    setShowShare(false);
  }, [video]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  const stats = [
    { label: 'Resolution', value: '1080p', icon: 'hd' },
    { label: 'File Size',  value: `${(video.sizeBytes / (1024 * 1024)).toFixed(1)} MB`, icon: 'database' },
    { label: 'Format',     value: video.mimeType.split('/').pop()?.toUpperCase() || 'MP4', icon: 'description' },
    { label: 'Downloads',  value: video.downloads?.toLocaleString() || '0', icon: 'download_for_offline' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.origin + `/memes?v=${video._id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-pointer"
        onClick={onClose}
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className={`relative w-full max-w-7xl h-full md:h-auto md:max-h-[85vh] rounded-none md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border transition-colors duration-500 ${isDark ? 'bg-zinc-900 border-white/10' : 'bg-white border-slate-200'}`}
      >
        {/* Close Button UI */}
        <button 
          onClick={onClose}
          className={`absolute top-6 right-6 z-[110] w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md transition-all active:scale-95 ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-900/10 text-slate-900 hover:bg-slate-900/20'}`}
        >
          <span className="material-symbols-outlined font-light">close</span>
        </button>

        {/* Left: Video Player Area */}
        <div className="flex-grow bg-black flex flex-col relative group min-h-[40vh] lg:min-h-0">
          <div className="flex-grow flex items-center justify-center relative overflow-hidden bg-zinc-950">
            <video 
              key={video.publicUrl}
              src={video.publicUrl}
              controls
              autoPlay
              className="max-w-full max-h-full"
            />
          </div>
          
          {/* Related strip (below player) */}
          <div className={`h-28 p-4 flex gap-4 overflow-x-auto items-center scrollbar-hide border-t ${isDark ? 'bg-zinc-900/80 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
            <AnimatePresence>
              {related.map((v) => (
                <motion.div 
                  key={v._id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={() => onPlay(v)}
                  className={`w-36 h-full flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer relative group border-2 transition-all ${isDark ? 'border-transparent hover:border-blue-500 bg-zinc-800' : 'border-transparent hover:border-blue-600 bg-white'}`}
                >
                  <img src={v.thumbnailUrl || v.publicUrl} alt={v.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {related.length === 0 && <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest px-4">No related memes found</p>}
          </div>
        </div>

        {/* Right: Sidebar Info */}
        <div className="w-full lg:w-[420px] flex-shrink-0 flex flex-col p-8 md:p-10 overflow-y-auto overflow-x-hidden scrollbar-hide">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
               <span className={`px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase border ${isDark ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>
                 {video.category}
               </span>
               <span className={`text-[9px] font-black tracking-widest uppercase ${isDark ? 'text-white/20' : 'text-slate-400'}`}>
                 Premium Asset
               </span>
            </div>
            <h2 className={`text-3xl md:text-4xl font-black font-headline leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {video.title}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {stats.map(s => (
              <div key={s.label} className={`p-5 rounded-3xl border transition-colors ${isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                <div className="flex items-center gap-2 mb-2">
                   <span className="material-symbols-outlined text-[16px] text-blue-500">{s.icon}</span>
                   <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{s.label}</p>
                </div>
                <p className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{s.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 mb-10">
            <a 
              href={`/api/download/${video._id}`}
              className={`w-full h-16 rounded-[1.5rem] font-black text-sm tracking-widest uppercase flex items-center justify-center gap-3 shadow-2xl transition-all active:scale-95 ${isDark ? 'bg-white text-black shadow-white/5 hover:bg-slate-100' : 'bg-slate-900 text-white shadow-slate-900/20 hover:bg-black'}`}
            >
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>download_for_offline</span>
              Free Download
            </a>
            
            <div className="flex gap-4">
              <button className={`flex-1 h-14 rounded-2xl font-black text-[10px] tracking-widest uppercase flex items-center justify-center gap-2 border transition-all hover:bg-white/5 ${isDark ? 'border-white/10 text-white' : 'border-slate-200 text-slate-900'}`}>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                Save
              </button>
              <button 
                onClick={() => setShowShare(!showShare)}
                className={`flex-1 h-14 rounded-2xl font-black text-[10px] tracking-widest uppercase flex items-center justify-center gap-2 border transition-all hover:bg-white/5 ${isDark ? 'border-white/10 text-white' : 'border-slate-200 text-slate-900'}`}
              >
                <span className="material-symbols-outlined text-[20px]">share</span>
                Share
              </button>
            </div>

            <AnimatePresence>
              {showShare && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-5 rounded-[1.5rem] border flex flex-col gap-4 shadow-xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}
                >
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Copy Link</p>
                  <div className="flex gap-2">
                    <input 
                      readOnly 
                      value={typeof window !== 'undefined' ? `${window.location.origin}/memes?v=${video._id}` : ''} 
                      className={`flex-grow h-12 rounded-xl text-xs px-4 outline-none border ${isDark ? 'bg-zinc-950 border-white/10 text-white/60' : 'bg-white border-slate-200 text-slate-600'}`} 
                    />
                    <button 
                      onClick={handleCopy}
                      className={`px-4 h-12 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${copied ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}
                    >
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-auto">
            <div className={`p-6 rounded-[2rem] border-2 border-dashed transition-colors ${isDark ? 'bg-white/5 border-white/5' : 'bg-blue-50/50 border-blue-100'}`}>
              <h5 className="font-black text-blue-500 text-[10px] uppercase tracking-[0.2em] mb-3">Usage Policy</h5>
              <p className={`text-[11px] leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                This asset is free for commercial and personal projects. No attribution required, but we love a shoutout! Redistribution as a library is restricted.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
