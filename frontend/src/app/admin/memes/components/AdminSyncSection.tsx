'use client';

import { useState, useRef } from 'react';
import type { MemeAssetType } from '../types';
import { generateVideoThumbnail } from '@/lib/video';

interface Props {
  onSyncComplete: () => void;
  onAnalyze?: (id: string, frameData?: string) => Promise<void>;
}

interface SyncItem {
  key: string;
  size: number;
  lastModified: Date;
  publicUrl: string;
  filename: string;
}

export default function AdminSyncSection({ onSyncComplete, onAnalyze }: Props) {
  const [loading, setLoading] = useState(false);
  const [unsynced, setUnsynced] = useState<SyncItem[]>([]);
  const [processing, setProcessing] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  async function fetchUnsynced() {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/memes/sync');
      const data = await res.json() as { items?: SyncItem[] };
      setUnsynced(data.items || []);
      setShow(true);
    } catch (err) {
      console.error('Failed to fetch unsynced', err);
    } finally {
      setLoading(false);
    }
  }

  async function processItem(item: SyncItem) {
    setProcessing(item.key);
    try {
      // 1. Generate thumbnail from R2 URL (browser side)
      // Note: This requires CORS enabled on the R2 bucket
      const videoRes = await fetch(item.publicUrl);
      const blob = await videoRes.blob();
      const file = new File([blob], item.filename, { type: 'video/mp4' });
      
      let thumbnailBlob: Blob | null = null;
      try {
        thumbnailBlob = await generateVideoThumbnail(file);
      } catch (err) {
        console.error('Thumbnail generation failed for sync', err);
      }

      // 2. Upload thumbnail if generated
      let thumbnailUrl = '';
      if (thumbnailBlob) {
        const thumbPresignedRes = await fetch('/api/admin/memes/upload/presigned', {
          method: 'POST',
          body: JSON.stringify({ filename: 'thumbnail.jpg', contentType: 'image/jpeg', folder: 'thumbnails' })
        });
        const thumbData = await thumbPresignedRes.json();
        if (thumbPresignedRes.ok) {
          await fetch(thumbData.uploadUrl, { method: 'PUT', body: thumbnailBlob, headers: { 'Content-Type': 'image/jpeg' } });
          thumbnailUrl = thumbData.publicUrl;
        }
      }

      // 3. Complete sync (save to MongoDB)
      const completeRes = await fetch('/api/admin/memes/upload/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: item.filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
          originalFileName: item.filename,
          slug: `${item.filename.replace(/\.[^/.]+$/, '')}-${Date.now()}`,
          storageKey: item.key,
          publicUrl: item.publicUrl,
          mimeType: 'video/mp4',
          sizeBytes: item.size,
          thumbnailUrl: thumbnailUrl,
        })
      });

      const completeData = await completeRes.json() as { item?: { _id: string } };
      const itemId = completeData.item?._id;

      if (completeRes.ok && itemId) {
        setUnsynced((prev) => prev.filter((i) => i.key !== item.key));
        
        // 4. Trigger AI analysis with the thumbnail frame if onAnalyze is provided
        if (onAnalyze && thumbnailBlob) {
          const reader = new FileReader();
          reader.readAsDataURL(thumbnailBlob);
          reader.onloadend = async () => {
            const base64data = reader.result as string;
            await onAnalyze(itemId, base64data);
          };
        } else if (onAnalyze) {
          await onAnalyze(itemId);
        }
      }
    } catch (err) {
      console.error('Processing failed', err);
    } finally {
      setProcessing(null);
    }
  }

  async function processAll() {
    for (const item of unsynced) {
      await processItem(item);
    }
    onSyncComplete();
  }

  if (!show) {
    return (
      <div className="bg-surface-container-low rounded-2xl p-6 mb-8 border border-slate-100 flex items-center justify-between">
        <div>
          <h4 className="font-bold text-lg mb-1 font-headline">R2 Bucket Sync</h4>
          <p className="text-sm text-outline">Detect and import files uploaded directly to Cloudflare R2.</p>
        </div>
        <button
          onClick={fetchUnsynced}
          disabled={loading}
          className="bg-secondary text-on-secondary px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all disabled:opacity-50"
        >
          {loading ? (
            <span className="material-symbols-outlined animate-spin text-sm">sync</span>
          ) : (
            <span className="material-symbols-outlined text-sm">find_in_page</span>
          )}
          Check for new files
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-low rounded-2xl p-8 mb-8 border border-slate-100 animate-in fade-in slide-in-from-top-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="font-extrabold text-2xl font-headline flex items-center gap-2 text-on-surface">
            <span className="material-symbols-outlined text-primary">cloud_sync</span>
            Unsynced Assets ({unsynced.length})
          </h4>
          <p className="text-sm text-outline font-medium mt-1">Found in R2 /memes folder but missing from library.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShow(false)}
            className="text-sm font-bold text-outline hover:text-on-surface transition-colors"
          >
            Collapse
          </button>
          <button
            onClick={processAll}
            disabled={!unsynced.length || !!processing}
            className="bg-primary text-on-primary px-6 py-2 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100"
          >
            Process All
          </button>
        </div>
      </div>

      {unsynced.length === 0 ? (
        <div className="py-8 text-center text-outline font-bold bg-surface-container-lowest rounded-xl border border-dashed border-slate-200">
          Bucket is in sync. Everything is accounted for!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {unsynced.map((item) => (
            <div key={item.key} className="bg-surface-container-lowest p-4 rounded-xl border border-slate-100 flex items-center justify-between shadow-sm">
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm truncate pr-4 text-on-surface">{item.filename}</p>
                <p className="text-[10px] text-outline mt-1 font-mono uppercase">
                  {(item.size / 1024 / 1024).toFixed(1)} MB • {item.key}
                </p>
              </div>
              <button
                onClick={() => processItem(item)}
                disabled={!!processing}
                className={`p-2 rounded-lg transition-all ${
                  processing === item.key 
                  ? 'bg-slate-100 text-slate-400' 
                  : 'bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary'
                }`}
              >
                {processing === item.key ? (
                  <span className="material-symbols-outlined text-sm animate-spin">sync</span>
                ) : (
                  <span className="material-symbols-outlined text-sm">add</span>
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
