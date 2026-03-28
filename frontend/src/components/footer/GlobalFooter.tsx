'use client';

import Link from 'next/link';

export default function GlobalFooter() {
  return (
    <footer className="w-full pt-24 pb-12 bg-surface-container-low text-on-surface">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
        <div className="col-span-2 md:col-span-1">
          <div className="text-lg font-bold text-on-surface font-headline mb-6">Flexiti Studio</div>
          <p className="font-['Inter'] text-sm text-on-surface-variant leading-relaxed">
            © {new Date().getFullYear()} Flexiti Studio. Built for the digital architect. Empowering founders with high-end digital products.
          </p>
        </div>
        <div>
          <h4 className="text-on-surface font-bold mb-6">Services</h4>
          <ul className="space-y-4 font-['Inter'] text-sm text-on-surface-variant">
            <li><Link href="/services" className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 inline-block transition-transform">Web Apps</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 inline-block transition-transform">Mobile Apps</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 inline-block transition-transform">SaaS Platforms</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 inline-block transition-transform">AI Solutions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-on-surface font-bold mb-6">Resources</h4>
          <ul className="space-y-4 font-['Inter'] text-sm text-on-surface-variant">
            <li><Link href="/portfolio" className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 inline-block transition-transform">Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 inline-block transition-transform">Blog</Link></li>
            <li><Link href="/memes" className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 inline-block transition-transform">Memes</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 inline-block transition-transform">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-on-surface font-bold mb-6">Contact</h4>
          <ul className="space-y-4 font-['Inter'] text-sm text-on-surface-variant">
            <li className="text-primary font-medium">admin@flexitistudio.com</li>
            <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 inline-block transition-transform">Twitter</li>
            <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 inline-block transition-transform">LinkedIn</li>
            <li className="hover:text-primary transition-colors cursor-pointer hover:translate-x-1 inline-block transition-transform">Instagram</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-24 pt-8 border-t border-outline-variant/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-label text-on-surface-variant uppercase tracking-widest">
          <span>All Rights Reserved {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
