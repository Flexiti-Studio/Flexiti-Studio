export default function PortfolioTechStack() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto text-center">
      <h3 className="text-on-surface-variant font-bold text-xs uppercase tracking-[0.3em] mb-12">Our Core Technology Stack</h3>
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2 group">
          <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">javascript</span>
          <span className="font-bold font-headline">React</span>
        </div>
        <div className="flex items-center gap-2 group">
          <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">deployed_code</span>
          <span className="font-bold font-headline">Next.js</span>
        </div>
        <div className="flex items-center gap-2 group">
          <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">smartphone</span>
          <span className="font-bold font-headline">Flutter</span>
        </div>
        <div className="flex items-center gap-2 group">
          <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">cloud</span>
          <span className="font-bold font-headline">GCP / AWS</span>
        </div>
        <div className="flex items-center gap-2 group">
          <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">psychology</span>
          <span className="font-bold font-headline">AI APIs</span>
        </div>
        <div className="flex items-center gap-2 group">
          <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">database</span>
          <span className="font-bold font-headline">PostgreSQL</span>
        </div>
      </div>
    </section>
  );
}
