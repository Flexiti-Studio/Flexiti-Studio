import Link from 'next/link';

export default function LandingNavbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl shadow-[0_12px_40px_rgba(19,27,46,0.06)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 font-headline">
          Flexiti Studio
        </div>
        <div className="hidden md:flex items-center gap-8 font-headline font-semibold text-sm tracking-tight">
          <Link className="text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</Link>
          <Link className="text-slate-500 hover:text-slate-900 transition-colors" href="#portfolio">Portfolio</Link>
          <Link className="text-slate-500 hover:text-slate-900 transition-colors" href="#products">Products</Link>
          <Link className="text-slate-500 hover:text-slate-900 transition-colors" href="#about">About</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden lg:block text-slate-500 font-semibold text-sm hover:text-primary transition-colors">Contact</Link>
          <Link 
            href="/contact"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-80 transition-all active:scale-95"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </nav>
  );
}
