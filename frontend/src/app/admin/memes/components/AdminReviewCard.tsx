'use client';

import { useState } from 'react';
import type { MemeAssetType } from '../types';

const CATEGORIES = [
  'Reaction', 'Shock', 'Celebration', 'Working', 'Cinematic',
  'Funny', 'Sad', 'Gaming', 'Confused', 'Intro', 'Outro',
  'Meme Pack', 'Random', 'Animals', 'Career',
];

interface Props {
  item: MemeAssetType;
  onApprove: (id: string, fields: {
    title: string; category: string; tags: string[];
    description: string; trending: boolean; featured: boolean;
  }) => void;
  onReject: (id: string) => void;
  onReanalyze: (id: string) => void;
}

export default function AdminReviewCard({ item, onApprove, onReject, onReanalyze }: Props) {
  const id = item._id ?? '';
  const ai = item.aiSuggestion;

  const [title, setTitle]       = useState(ai?.title       ?? item.title);
  const [category, setCategory] = useState(ai?.category    ?? item.category ?? 'Reaction');
  const [description, setDesc]  = useState(ai?.description ?? item.description ?? '');
  const [tags, setTags]         = useState<string[]>(ai?.tags ?? item.tags ?? []);
  const [newTag, setNewTag]     = useState('');
  const [trending, setTrending] = useState(false);
  const [featured, setFeatured] = useState(false);

  const confidence = ai?.confidence ?? 0;

  function addTag() {
    const t = newTag.trim().replace(/^#/, '');
    if (t && !tags.includes(`#${t}`)) setTags([...tags, `#${t}`]);
    setNewTag('');
  }

  function removeTag(tag: string) {
    setTags(tags.filter((t) => t !== tag));
  }

  return (
    <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-slate-50 overflow-hidden flex flex-col md:flex-row">
      {/* Thumbnail */}
      <div className="md:w-72 relative flex-shrink-0 group min-h-[200px] bg-slate-100">
        {item.thumbnailUrl ? (
          <img src={item.thumbnailUrl} alt={item.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full min-h-[200px] flex flex-col items-center justify-center gap-2 text-slate-400 bg-slate-100">
            <span className="material-symbols-outlined text-5xl">videocam</span>
            <span className="text-xs font-bold">{item.originalFileName}</span>
          </div>
        )}
        {/* Confidence badge */}
        {confidence > 0 && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold flex items-center gap-1">
            <span className="material-symbols-outlined text-xs text-green-400" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            {Math.round(confidence * 100)}% AI Confidence
          </div>
        )}
      </div>

      {/* Fields */}
      <div className="flex-1 p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Title */}
          <div className="col-span-2">
            <label className="text-[10px] font-extrabold text-outline uppercase tracking-wider mb-1 block">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-surface-container-low border-none rounded-xl text-sm font-semibold focus:ring-primary px-3 py-2.5 outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-[10px] font-extrabold text-outline uppercase tracking-wider mb-1 block">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-surface-container-low border-none rounded-xl text-sm font-semibold focus:ring-primary px-3 py-2.5"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Original file */}
          <div>
            <label className="text-[10px] font-extrabold text-outline uppercase tracking-wider mb-1 block">Original File</label>
            <div className="text-xs text-outline py-3 px-1 truncate">{item.originalFileName}</div>
          </div>

          {/* Description */}
          <div className="col-span-2">
            <label className="text-[10px] font-extrabold text-outline uppercase tracking-wider mb-1 block">Description</label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full bg-surface-container-low border-none rounded-xl text-sm focus:ring-primary px-3 py-2.5 resize-none outline-none"
            />
          </div>

          {/* Toggles */}
          <div className="col-span-2 flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm font-semibold cursor-pointer">
              <input type="checkbox" checked={trending} onChange={(e) => setTrending(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
              Trending
            </label>
            <label className="flex items-center gap-2 text-sm font-semibold cursor-pointer">
              <input type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
              Featured
            </label>
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="text-[10px] font-extrabold text-outline uppercase tracking-wider mb-2 block">Suggested Tags</label>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center gap-1"
              >
                {tag}
                <button onClick={() => removeTag(tag)} className="hover:text-error transition-colors">
                  <span className="material-symbols-outlined text-[14px]">close</span>
                </button>
              </span>
            ))}
            <div className="flex items-center gap-1">
              <input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTag()}
                placeholder="add tag"
                className="w-20 text-xs bg-slate-100 border-none rounded-full px-2 py-1 outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                onClick={addTag}
                className="w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-sm">add</span>
              </button>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-50">
          <button
            onClick={() => onReject(id)}
            className="text-error text-xs font-bold px-4 py-2 hover:bg-error/5 rounded-lg transition-colors"
          >
            Reject
          </button>
          <button
            onClick={() => onReanalyze(id)}
            className="text-on-secondary-fixed-variant text-xs font-bold px-4 py-2 bg-secondary-container rounded-lg hover:opacity-80 transition-opacity"
          >
            Re-analyze
          </button>
          <button
            onClick={() => onApprove(id, { title, category, tags, description, trending, featured })}
            className="bg-primary text-white text-xs font-bold px-6 py-2 rounded-lg shadow-sm hover:scale-105 transition-all"
          >
            Save &amp; Approve
          </button>
        </div>
      </div>
    </div>
  );
}
