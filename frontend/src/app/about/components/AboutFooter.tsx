import Link from 'next/link';

export default function AboutFooter() {
  return (
    <footer className="bg-slate-50 w-full rounded-t-[2rem]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
        <div className="col-span-1">
          <div className="text-lg font-bold text-slate-900 font-headline mb-4">Flexiti Studio</div>
          <p className="text-sm text-slate-500 leading-relaxed mb-6">
            Built for the digital architect. We transform complexity into scalable digital solutions.
          </p>
        </div>
        <div>
          <h4 className="font-headline font-bold text-on-surface mb-6">Studio</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link className="hover:text-blue-600 transition-colors" href="/services">Services</Link></li>
            <li><Link className="hover:text-blue-600 transition-colors" href="/portfolio">Portfolio</Link></li>
            <li><Link className="hover:text-blue-600 transition-colors" href="/blog">Blog</Link></li>
            <li><Link className="text-blue-600 font-medium" href="/about">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold text-on-surface mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link className="hover:text-blue-600 transition-colors" href="#">Privacy</Link></li>
            <li><Link className="hover:text-blue-600 transition-colors" href="#">Terms</Link></li>
            <li><Link className="hover:text-blue-600 transition-colors" href="#">Cookies</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold text-on-surface mb-6">Connect</h4>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-sm">alternate_email</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-outline-variant/10">
        <p className="text-sm text-slate-500">© 2024 Flexiti Studio. Built for the digital architect.</p>
      </div>
    </footer>
  );
}
