'use client';

import type { MemeAssetType } from '../types';

const STATUS_CONFIG: Record<string, { label: string; color: string; bg: string }> = {
  uploaded:  { label: 'Uploaded',  color: 'text-blue-600',  bg: 'bg-blue-50' },
  analyzing: { label: 'Analyzing', color: 'text-purple-600', bg: 'bg-purple-50' },
  analyzed:  { label: 'Analyzed',  color: 'text-green-600', bg: 'bg-green-50' },
  approved:  { label: 'Approved',  color: 'text-emerald-600', bg: 'bg-emerald-50' },
  rejected:  { label: 'Rejected',  color: 'text-red-600',   bg: 'bg-red-50' },
  published: { label: 'Published', color: 'text-slate-600', bg: 'bg-slate-100' },
};

interface Props {
  item: MemeAssetType;
  selected: boolean;
  onSelect: (id: string) => void;
  onAnalyze: (id: string) => void;
  onDelete: (id: string) => void;
}

function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default function AdminQueueCard({ item, selected, onSelect, onAnalyze, onDelete }: Props) {
  const id = item._id ?? '';
  const status = STATUS_CONFIG[item.reviewStatus] ?? STATUS_CONFIG.uploaded;
  const isAnalyzing = item.reviewStatus === 'analyzing';

  return (
    <div
      className={`bg-surface-container-lowest p-4 rounded-2xl shadow-sm border transition-all flex gap-4 items-start group
        ${selected ? 'border-primary/40 shadow-primary/10' : 'border-slate-50'}`}
    >
      {/* Thumbnail */}
      <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
        {item.thumbnailUrl ? (
          <img src={item.thumbnailUrl} alt={item.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-200">
            <span className="material-symbols-outlined text-slate-400 text-3xl">videocam</span>
          </div>
        )}
        {isAnalyzing && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-white animate-spin">sync</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-1">
          <div className="flex items-center gap-2 min-w-0">
            <input
              type="checkbox"
              checked={selected}
              onChange={() => onSelect(id)}
              onClick={(e) => e.stopPropagation()}
              className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary flex-shrink-0"
            />
            <h4 className="font-bold text-sm truncate">{item.originalFileName}</h4>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onDelete(id); }}
            className="text-outline hover:text-error transition-colors flex-shrink-0 ml-2"
            title="Delete"
          >
            <span className="material-symbols-outlined text-[18px]">delete</span>
          </button>
        </div>

        <p className="text-xs text-outline mb-3">
          {formatBytes(item.sizeBytes)}{item.duration ? ` • ${item.duration}` : ''}
        </p>

        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${
                item.reviewStatus === 'uploaded' ? 'bg-blue-400 w-full' :
                isAnalyzing ? 'bg-purple-400 w-2/3 animate-pulse' :
                item.reviewStatus === 'analyzed' ? 'bg-green-400 w-full' :
                'bg-primary w-full'
              }`}
            />
          </div>
          <span className={`text-[10px] font-bold ${status.color}`}>
            {isAnalyzing ? '…' : 'DONE'}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${status.bg} ${status.color}`}>
            {status.label}
          </span>
          {item.reviewStatus === 'uploaded' && (
            <button
              onClick={() => onAnalyze(id)}
              className="text-[10px] font-bold text-primary hover:underline flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">auto_awesome</span> Analyze
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
