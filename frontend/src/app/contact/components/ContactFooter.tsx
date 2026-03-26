import Link from 'next/link';

export default function ContactFooter() {
  return (
    <footer className="w-full py-16 px-8 mt-24 bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between items-start max-w-7xl mx-auto gap-12 lg:gap-0">
        <div className="space-y-6">
          <div className="font-headline font-bold text-slate-900 text-2xl">Flexiti Studio</div>
          <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
            © 2024 Flexiti Studio. Digital Architects of the Future. Crafting premium digital experiences for global visionaries.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
          <div className="flex flex-col gap-4">
            <h5 className="font-headline font-bold text-on-surface text-sm uppercase tracking-widest">Platform</h5>
            <Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Twitter</Link>
            <Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">LinkedIn</Link>
            <Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">GitHub</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-headline font-bold text-on-surface text-sm uppercase tracking-widest">Company</h5>
            <Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="/contact">Contact</Link>
            <Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Privacy</Link>
            <Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
