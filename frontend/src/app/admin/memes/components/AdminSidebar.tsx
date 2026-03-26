'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NAV_ITEMS = [
  { icon: 'dashboard', label: 'Dashboard', href: '/admin/memes', active: true },
  { icon: 'cloud_upload', label: 'Uploads', href: '/admin/memes' },
  { icon: 'analytics', label: 'Analytics', href: '#' },
  { icon: 'video_library', label: 'Library', href: '/memes' },
  { icon: 'settings', label: 'Settings', href: '#' },
];

export default function AdminSidebar() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/login');
  }

  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col p-4 w-64 bg-slate-50 dark:bg-slate-900 z-50 border-r border-slate-100 dark:border-slate-800">
      <div className="mb-8 px-4">
        <h1 className="text-xl font-bold tracking-tighter text-blue-700 dark:text-blue-500 font-headline">
          Flexiti Studio
        </h1>
        <p className="text-xs text-slate-500 font-medium tracking-tight mt-0.5">Meme Upload Manager</p>
      </div>

      <nav className="flex-1 space-y-1">
        {NAV_ITEMS.map((item) =>
          item.active ? (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-500/20 text-sm font-semibold transition-all duration-200"
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-all duration-200 text-sm font-semibold"
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          )
        )}
      </nav>

      <div className="mt-auto space-y-2">
        <Link
          href="/admin/memes"
          className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span className="material-symbols-outlined">add</span>
          New Upload
        </Link>
        <button
          onClick={handleLogout}
          className="w-full bg-slate-200 text-slate-700 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-300 transition-colors"
        >
          <span className="material-symbols-outlined">logout</span>
          Logout
        </button>
      </div>
    </aside>
  );
}
