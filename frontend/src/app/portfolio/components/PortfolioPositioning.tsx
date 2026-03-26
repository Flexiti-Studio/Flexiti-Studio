export default function PortfolioPositioning() {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="bg-on-surface text-surface rounded-lg p-12 md:p-24 relative overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8 leading-tight">
              We don&apos;t just build projects — we build <span className="text-primary-fixed-dim">scalable systems.</span>
            </h2>
            <p className="text-surface-variant/80 text-lg mb-8 leading-relaxed">
              Our architecture is designed for growth. We prioritize modularity, performance, and maintainability to ensure your product can evolve alongside your business.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold font-headline">99.9%</h4>
                <p className="text-sm text-surface-variant/60 uppercase tracking-widest">Uptime Record</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold font-headline">&lt;100ms</h4>
                <p className="text-sm text-surface-variant/60 uppercase tracking-widest">Latency Focus</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full aspect-square max-w-md bg-white/5 rounded-full border border-white/10 flex items-center justify-center p-8 backdrop-blur-sm">
              <div className="w-full h-full bg-white/5 rounded-full border border-white/20 flex items-center justify-center p-8">
                <div className="w-full h-full bg-primary/20 rounded-full flex items-center justify-center border border-primary/40 animate-pulse">
                  <span className="material-symbols-outlined text-6xl text-primary-fixed">architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Background Accent */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/20 blur-[150px] -z-0"></div>
      </div>
    </section>
  );
}
