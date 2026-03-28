import Link from 'next/link';

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden px-8 py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-primary font-semibold text-xs tracking-widest uppercase font-label">
            The Digital Architect
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-on-surface leading-[1.1]">
            Products Built by <span className="text-gradient">Flexiti Studio</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            We design and engineer high-performance SaaS platforms and internal tools that empower modern teams to scale beyond their limits.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn-gradient px-8 py-4 rounded-full text-on-primary font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              Explore Products
            </button>
            <Link 
              href="/contact"
              className="px-8 py-4 rounded-full bg-surface-container-high text-primary font-bold hover:bg-surface-container-highest transition-colors flex items-center justify-center"
            >
              Start a Project
            </Link>
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border border-outline-variant/15">
            <img
              alt="Dashboard Preview"
              className="w-full aspect-[4/3] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn4CnNo4BQb6ZO8oh20npY-aGTjNRKcss8REz9r-xN3jeJHEto1tNYnNOJ8us5jMqroDJ9t0lWgZl0IrYaIZIl62b1QIvpRzmgySpddOakvErG_9N9jTn97BN4bBLDqwmZS0yfeIyPFWbQNylGiOqfTSGWe8NX7BWsc91_x5NQhgFFyYlz1_lke1MoNi3pQaUMIoo-fHW8TenkgA6jFlfecW3TBA2XdX7l1BWdETZ2LFsdzhuUdn-76Bcm21i_-YaPnfwnbNnBoDjC"
            />
          </div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
