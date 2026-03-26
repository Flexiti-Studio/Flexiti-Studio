import Link from 'next/link';

export default function BlogFooter() {
  return (
    <footer className="w-full rounded-t-[2rem] bg-slate-50 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <div className="text-lg font-bold text-slate-900 mb-6">Flexiti Studio</div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Elevating the digital landscape through architectural precision and high-performance product design.
          </p>
        </div>
        <div>
          <h4 className="text-slate-900 font-bold mb-6">Company</h4>
          <ul className="space-y-4">
            <li><Link className="text-sm text-slate-500 hover:text-blue-600 underline-offset-4 hover:underline" href="#">About</Link></li>
            <li><Link className="text-sm text-slate-500 hover:text-blue-600 underline-offset-4 hover:underline" href="#">Services</Link></li>
            <li><Link className="text-sm text-slate-500 hover:text-blue-600 underline-offset-4 hover:underline" href="#">Case Studies</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 font-bold mb-6">Resources</h4>
          <ul className="space-y-4">
            <li><Link className="text-sm font-bold text-slate-900" href="/blog">Blog</Link></li>
            <li><Link className="text-sm text-slate-500 hover:text-blue-600 underline-offset-4 hover:underline" href="#">Newsletter</Link></li>
            <li><Link className="text-sm text-slate-500 hover:text-blue-600 underline-offset-4 hover:underline" href="#">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 font-bold mb-6">Socials</h4>
          <ul className="space-y-4">
            <li><Link className="text-sm text-slate-500 hover:text-blue-600 underline-offset-4 hover:underline" href="#">Twitter / X</Link></li>
            <li><Link className="text-sm text-slate-500 hover:text-blue-600 underline-offset-4 hover:underline" href="#">LinkedIn</Link></li>
            <li><Link className="text-sm text-slate-500 hover:text-blue-600 underline-offset-4 hover:underline" href="#">Dribbble</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 py-8 border-t border-slate-200">
        <p className="text-sm text-slate-500">© 2024 Flexiti Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
