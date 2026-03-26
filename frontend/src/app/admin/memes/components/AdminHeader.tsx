'use client';

interface Props {
  onSearch: (q: string) => void;
}

export default function AdminHeader({ onSearch }: Props) {
  return (
    <header className="flex justify-between items-center w-full px-6 h-16 sticky top-0 z-40 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800/50 shadow-sm">
      <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-xl w-96">
        <span className="material-symbols-outlined text-outline">search</span>
        <input
          className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2 outline-none"
          placeholder="Search memes, tags, or IDs..."
          type="text"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold leading-tight">Admin</p>
            <p className="text-xs text-outline">Flexiti Studio</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-primary-container bg-primary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
