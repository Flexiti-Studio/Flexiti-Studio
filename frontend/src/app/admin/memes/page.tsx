'use client';

import { useCallback, useEffect, useState } from 'react';
import type { MemeAssetType, PipelineStats } from './types';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';
import AdminUploadDropzone from './components/AdminUploadDropzone';
import AdminQueueCard from './components/AdminQueueCard';
import AdminReviewCard from './components/AdminReviewCard';
import AdminStatsSidebar from './components/AdminStatsSidebar';
import { generateVideoThumbnail } from '@/lib/video';

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */
function derivePipelineStats(items: MemeAssetType[]): PipelineStats {
  return {
    uploaded:  items.filter((i) => i.reviewStatus === 'uploaded').length,
    analyzed:  items.filter((i) => i.reviewStatus === 'analyzed').length,
    pending:   items.filter((i) => ['uploaded', 'analyzing', 'analyzed'].includes(i.reviewStatus)).length,
    published: items.filter((i) => i.reviewStatus === 'published').length,
    failed:    items.filter((i) => i.reviewStatus === 'rejected').length,
  };
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function AdminMemesPage() {
  const [items, setItems]           = useState<MemeAssetType[]>([]);
  const [selected, setSelected]     = useState<Set<string>>(new Set());
  const [uploading, setUploading]   = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQ, setSearchQ]       = useState('');
  const [toast, setToast]           = useState('');

  /* ---- Data loading ---- */
  const loadPending = useCallback(async () => {
    const res  = await fetch('/api/admin/memes/pending');
    const data = await res.json();
    setItems(data.items ?? []);
  }, []);

  useEffect(() => { loadPending(); }, [loadPending]);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  }

  /* ---- Upload ---- */
  async function handleUpload(files: File[]) {
    setUploading(true);
    const formData = new FormData();
    const batch = files.slice(0, 10);
    
    for (const file of batch) {
      formData.append('files', file);
      
      // Generate thumbnail for videos
      if (file.type.startsWith('video/')) {
        try {
          const thumbnailBlob = await generateVideoThumbnail(file);
          formData.append('thumbnails', thumbnailBlob, 'thumbnail.jpg');
        } catch (err) {
          console.error('Failed to generate thumbnail for', file.name, err);
          // Still append an empty blob or nothing to keep indexes aligned if backend expects it
          // In my updated backend, I check if thumbnail exists, so appending nothing is fine
          // but if we want to ensure 1:1 mapping, appending an empty placeholder might be better.
          // However, my backend code uses i as index, so if we skip one, the mapping breaks.
          // Let's append a dummy null if it fails? No, FormData doesn't like null.
          // Let's just append an empty file.
          formData.append('thumbnails', new Blob(), 'empty.jpg');
        }
      } else {
        // For non-videos (like GIFs), we might not need a thumbnail or could use the file itself
        // but to keep index alignment for the backend loop:
        formData.append('thumbnails', new Blob(), 'empty.jpg');
      }
    }

    const res = await fetch('/api/admin/memes/upload', { method: 'POST', body: formData });
    if (res.ok) { await loadPending(); showToast(`${batch.length} file(s) uploaded ✓`); }
    else         { showToast('Upload failed — check R2 credentials.'); }
    setUploading(false);
  }

  /* ---- Analyze (single or batch) ---- */
  async function analyzeIds(ids: string[]) {
    if (!ids.length) return;
    showToast(`Analyzing ${ids.length} item(s)…`);
    // Optimistic UI: mark as analyzing
    setItems((prev) =>
      prev.map((it) => ids.includes(it._id ?? '') ? { ...it, reviewStatus: 'analyzing' } : it)
    );
    const res = await fetch('/api/admin/memes/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids }),
    });
    if (res.ok) { await loadPending(); showToast('Analysis complete ✓'); }
    else        { showToast('Analysis failed.'); await loadPending(); }
  }

  /* ---- Approve single ---- */
  async function handleApprove(id: string, fields: {
    title: string; category: string; tags: string[];
    description: string; trending: boolean; featured: boolean;
  }) {
    const res = await fetch('/api/admin/memes/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [{ id, ...fields, visibility: 'public' }],
      }),
    });
    if (res.ok) { await loadPending(); showToast(`"${fields.title}" published ✓`); }
    else        { showToast('Save failed.'); }
  }

  /* ---- Reject single ---- */
  async function handleReject(id: string) {
    await fetch(`/api/admin/memes/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reviewStatus: 'rejected' }),
    });
    await loadPending();
    showToast('Rejected.');
  }

  /* ---- Delete single ---- */
  async function handleDelete(id: string) {
    await fetch(`/api/admin/memes/${id}`, { method: 'DELETE' });
    setItems((prev) => prev.filter((it) => it._id !== id));
    setSelected((prev) => { const s = new Set(prev); s.delete(id); return s; });
    showToast('Deleted.');
  }

  /* ---- Re-analyze ---- */
  async function handleReanalyze(id: string) { await analyzeIds([id]); }

  /* ---- Batch publish ---- */
  async function handleBatchPublish() {
    const analyzed = items.filter((it) => it.reviewStatus === 'analyzed').map((it) => ({
      id:          it._id ?? '',
      title:       it.aiSuggestion?.title    ?? it.title,
      category:    it.aiSuggestion?.category ?? it.category ?? 'Random',
      tags:        it.aiSuggestion?.tags     ?? it.tags ?? [],
      description: it.aiSuggestion?.description ?? '',
      trending:    false,
      featured:    false,
      visibility:  'public' as const,
    }));
    if (!analyzed.length) { showToast('No analyzed items to publish.'); return; }
    const res = await fetch('/api/admin/memes/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: analyzed }),
    });
    if (res.ok) { await loadPending(); showToast(`${analyzed.length} item(s) published ✓`); }
    else        { showToast('Batch publish failed.'); }
  }

  /* ---- Select helpers ---- */
  function toggleSelect(id: string) {
    setSelected((prev) => {
      const s = new Set(prev);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });
  }
  function toggleSelectAll() {
    if (selected.size === filteredItems.length) { setSelected(new Set()); }
    else                                        { setSelected(new Set(filteredItems.map((it) => it._id ?? ''))); }
  }

  /* ---- Filtered view ---- */
  const filteredItems = items.filter((it) => {
    const matchStatus = statusFilter === 'all' || it.reviewStatus === statusFilter;
    const matchQ      = !searchQ || it.title.toLowerCase().includes(searchQ.toLowerCase()) ||
                        it.originalFileName.toLowerCase().includes(searchQ.toLowerCase());
    return matchStatus && matchQ;
  });

  const reviewableItems = filteredItems.filter((it) => it.reviewStatus === 'analyzed');
  const queueItems      = filteredItems.filter((it) => it.reviewStatus !== 'analyzed' && it.reviewStatus !== 'published' && it.reviewStatus !== 'rejected');

  const stats = derivePipelineStats(items);

  /* ------------------------------------------------------------------ */
  return (
    <div className="flex min-h-screen bg-background text-on-surface">
      <AdminSidebar />

      <div className="ml-64 flex flex-col flex-1">
        <AdminHeader onSearch={setSearchQ} />

        <main className="flex-1 p-8">
          {/* Page Header */}
          <section className="mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">
                Meme Upload Manager
              </h2>
              <p className="text-outline font-medium">
                Streamline your content pipeline with automated AI metadata generation.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  { color: 'bg-primary',    label: `${stats.uploaded} Uploaded` },
                  { color: 'bg-tertiary',   label: `${stats.analyzed} Analyzed` },
                  { color: 'bg-yellow-500', label: `${stats.pending} Pending` },
                  { color: 'bg-green-500',  label: `${stats.published} Published` },
                ].map((s) => (
                  <div key={s.label} className="bg-surface-container-lowest px-4 py-2 rounded-xl flex items-center gap-3 shadow-sm border border-slate-50">
                    <span className={`w-2 h-2 rounded-full ${s.color}`}></span>
                    <span className="text-sm font-semibold">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => analyzeIds([...selected].filter((id) =>
                  items.find((it) => it._id === id)?.reviewStatus === 'uploaded'
                ))}
                className="bg-surface-container-highest text-on-secondary-container px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-300 transition-all"
              >
                <span className="material-symbols-outlined">psychology</span>
                Analyze with AI
              </button>
              <button
                onClick={handleBatchPublish}
                className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-all"
              >
                <span className="material-symbols-outlined">publish</span>
                Save Approved
              </button>
            </div>
          </section>

          <div className="grid grid-cols-12 gap-8">
            {/* Left column */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              {/* Dropzone */}
              <AdminUploadDropzone onFilesSelected={handleUpload} uploading={uploading} />

              {/* Batch Toolbar */}
              <div className="sticky top-20 z-30 bg-surface-container-lowest/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-sm border border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
                    checked={selected.size > 0 && selected.size === filteredItems.length}
                    onChange={toggleSelectAll}
                  />
                  <span className="text-sm font-bold">
                    {selected.size > 0 ? `${selected.size} selected` : 'Select All'}
                  </span>
                  <div className="h-6 w-px bg-slate-200 mx-2"></div>
                  <button
                    className="text-sm font-bold text-primary flex items-center gap-1 hover:underline"
                    onClick={() => analyzeIds([...selected])}
                  >
                    <span className="material-symbols-outlined text-lg">auto_awesome</span>
                    Analyze
                  </button>
                  <button
                    className="text-sm font-bold text-error flex items-center gap-1 hover:underline"
                    onClick={async () => {
                      for (const id of selected) await handleDelete(id);
                      setSelected(new Set());
                    }}
                  >
                    <span className="material-symbols-outlined text-lg">delete</span>
                    Delete
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-surface-container-low border-none rounded-lg text-xs font-bold px-3 py-2 focus:ring-1 focus:ring-primary"
                  >
                    <option value="all">All Status</option>
                    <option value="uploaded">Uploaded</option>
                    <option value="analyzing">Analyzing</option>
                    <option value="analyzed">Analyzed</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
              </div>

              {/* Queue Grid */}
              {queueItems.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {queueItems.map((item) => (
                    <AdminQueueCard
                      key={item._id}
                      item={item}
                      selected={selected.has(item._id ?? '')}
                      onSelect={toggleSelect}
                      onAnalyze={(id) => analyzeIds([id])}
                      onDelete={handleDelete}
                    />
                  ))}
                </div>
              )}

              {/* AI Review Section */}
              {reviewableItems.length > 0 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2 font-headline">
                    <span className="material-symbols-outlined text-tertiary">auto_fix_high</span>
                    Review AI Suggestions ({reviewableItems.length})
                  </h3>
                  {reviewableItems.map((item) => (
                    <AdminReviewCard
                      key={item._id}
                      item={item}
                      onApprove={handleApprove}
                      onReject={handleReject}
                      onReanalyze={handleReanalyze}
                    />
                  ))}
                </div>
              )}

              {/* Empty state */}
              {queueItems.length === 0 && reviewableItems.length === 0 && (
                <div className="bg-surface-container-lowest rounded-2xl p-12 text-center border border-dashed border-slate-200 shadow-sm">
                  <span className="material-symbols-outlined text-5xl text-outline mb-4 block">inbox</span>
                  <p className="font-bold text-on-surface-variant">No items in the queue.</p>
                  <p className="text-sm text-outline mt-1">Upload videos above to get started.</p>
                </div>
              )}
            </div>

            {/* Right column */}
            <AdminStatsSidebar stats={stats} />
          </div>
        </main>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl text-sm font-bold animate-bounce-in">
          {toast}
        </div>
      )}
    </div>
  );
}
