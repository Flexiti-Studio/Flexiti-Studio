export default function LandingFooter() {
  return (
    <footer className="w-full pt-24 pb-12 bg-slate-50 dark:bg-slate-900 tonal-shift surface_container_low">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
        <div className="col-span-2 md:col-span-1">
          <div className="text-lg font-bold text-slate-900 dark:text-slate-50 font-headline mb-6">Flexiti Studio</div>
          <p className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            © 2024 Flexiti Studio. Built for the digital architect. Empowering founders with high-end digital products.
          </p>
        </div>
        <div>
          <h4 className="text-on-surface font-bold mb-6">Services</h4>
          <ul className="space-y-4 font-['Inter'] text-sm text-slate-500">
            <li className="hover:text-blue-600 transition-colors cursor-pointer hover:translate-x-1 transition-transform">Web Apps</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer hover:translate-x-1 transition-transform">Mobile Apps</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer hover:translate-x-1 transition-transform">SaaS Platforms</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer hover:translate-x-1 transition-transform">AI Solutions</li>
          </ul>
        </div>
        <div>
          <h4 className="text-on-surface font-bold mb-6">Resources</h4>
          <ul className="space-y-4 font-['Inter'] text-sm text-slate-500">
            <li className="hover:text-blue-600 transition-colors cursor-pointer hover:translate-x-1 transition-transform">Portfolio</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer hover:translate-x-1 transition-transform">Blog</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer hover:translate-x-1 transition-transform">Case Studies</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer hover:translate-x-1 transition-transform">Documentation</li>
          </ul>
        </div>
        <div>
          <h4 className="text-on-surface font-bold mb-6">Contact</h4>
          <ul className="space-y-4 font-['Inter'] text-sm text-slate-500">
            <li className="text-blue-600 font-medium">hello@flexitistudio.com</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer hover:translate-x-1 transition-transform">Twitter</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer hover:translate-x-1 transition-transform">LinkedIn</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer hover:translate-x-1 transition-transform">Instagram</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-24 pt-8 border-t border-outline-variant/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-label text-on-surface-variant uppercase tracking-widest">
          <span>Designed &amp; Engineered by Flexiti</span>
          <span>All Rights Reserved 2024</span>
        </div>
      </div>
    </footer>
  );
}
