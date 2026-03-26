import Link from 'next/link';

export default function PortfolioFooter() {
  return (
    <footer className="w-full rounded-t-[2rem] mt-20 bg-slate-50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8 py-16">
        <div className="col-span-2 md:col-span-1 space-y-6">
          <div className="text-lg font-bold text-slate-900">Flexiti Studio</div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Crafting premium digital experiences for the next generation of global industry leaders.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-xs uppercase tracking-widest text-on-surface">Capability</h4>
          <Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Product Design</Link>
          <Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Engineering</Link>
          <Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Strategy</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-xs uppercase tracking-widest text-on-surface">Company</h4>
          <Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Journal</Link>
          <Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">About</Link>
          <Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Contact</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-xs uppercase tracking-widest text-on-surface">Social</h4>
          <Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">LinkedIn</Link>
          <Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Instagram</Link>
          <Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Twitter (X)</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 pb-8 flex flex-col md:flex-row justify-between border-t border-slate-200 pt-8 gap-4">
        <p className="text-sm text-slate-500">© 2024 Flexiti Studio. Built for the Digital Architect.</p>
        <div className="flex gap-6">
          <Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Privacy Policy</Link>
          <Link className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
