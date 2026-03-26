import Link from 'next/link';

const links = [
  { label: 'Services', href: '/services', active: false },
  { label: 'Products', href: '/products', active: true },
  { label: 'Portfolio', href: '/portfolio', active: false },
  { label: 'Twitter', href: '#', active: false },
  { label: 'LinkedIn', href: '#', active: false },
  { label: 'Instagram', href: '#', active: false },
];

export default function ProductsFooter() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/15">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-12 py-16">
        <div className="mb-8 md:mb-0 space-y-2">
          <div className="text-lg font-bold text-slate-900 font-headline">Flexiti Studio</div>
          <p className="text-sm text-slate-500 font-body">© 2024 Flexiti Studio. The Digital Architect.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={link.active ? 'text-primary font-bold' : 'hover:text-primary hover:underline decoration-primary/30 underline-offset-4 transition-all'}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
