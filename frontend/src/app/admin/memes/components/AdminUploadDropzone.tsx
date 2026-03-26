'use client';

import { useRef } from 'react';

interface Props {
  onFilesSelected: (files: File[]) => void;
  uploading: boolean;
}

export default function AdminUploadDropzone({ onFilesSelected, uploading }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).filter((f) =>
      f.type.startsWith('video/') || f.name.endsWith('.gif')
    );
    if (files.length) onFilesSelected(files);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (files.length) onFilesSelected(files);
    if (inputRef.current) inputRef.current.value = '';
  }

  return (
    <div
      className={`bg-surface-container-lowest border-2 border-dashed rounded-2xl p-12 text-center group transition-colors cursor-pointer
        ${uploading ? 'border-primary/60 pointer-events-none' : 'border-outline-variant/30 hover:border-primary/50'}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={() => !uploading && inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        multiple
        accept="video/*,.gif"
        className="hidden"
        onChange={handleChange}
      />
      <div className="bg-primary-fixed w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        {uploading ? (
          <span className="material-symbols-outlined text-primary text-3xl animate-spin">sync</span>
        ) : (
          <span className="material-symbols-outlined text-primary text-3xl">upload_file</span>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2 font-headline">
        {uploading ? 'Uploading to R2…' : 'Drag and drop your meme assets'}
      </h3>
      <p className="text-outline max-w-sm mx-auto mb-6">
        {uploading
          ? 'Please wait while files are being uploaded.'
          : 'Support for MP4, MOV, GIF. Let our AI handle the tagging.'}
      </p>
      {!uploading && (
        <div className="flex items-center justify-center gap-4 text-xs font-bold text-outline-variant uppercase tracking-widest">
          <span>MAX 10 FILES PER BATCH</span>
          <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
          <span>MAX 500MB EACH</span>
        </div>
      )}
    </div>
  );
}
