// New Blog Hero — Insights & Resources header section
export default function BlogHero() {
  return (
    <header className="mb-16 md:mb-24 text-center md:text-left">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label text-xs font-bold uppercase tracking-widest mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        The Journal
      </div>
      <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tight text-on-surface mb-6">
        Insights &amp; <span className="text-gradient">Resources</span>
      </h1>
      <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
        Expert perspectives on building high-performance digital products, scaling engineering teams, and the future of SaaS.
      </p>
    </header>
  );
}
