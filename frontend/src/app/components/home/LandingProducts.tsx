export default function LandingProducts() {
  return (
    <section className="py-32 bg-on-surface text-white rounded-lg mx-8 overflow-hidden relative" id="products">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <div className="mb-20">
          <span className="text-primary-fixed-dim font-bold tracking-[0.2em] uppercase text-sm">Flexiti Ecosystem</span>
          <h2 className="text-5xl font-headline font-extrabold mt-4">Internal Tools for Founders</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-4">
              <span className="material-symbols-outlined text-primary" data-icon="business_center">business_center</span>
              Business Tools
            </h3>
            <p className="text-white/60 leading-relaxed">Integrated suite for managing lean agencies and digital startups without the bloat.</p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-4">
              <span className="material-symbols-outlined text-primary" data-icon="bolt">bolt</span>
              Automation Hub
            </h3>
            <p className="text-white/60 leading-relaxed">Low-code engine to connect your sales, marketing, and engineering workflows.</p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-4">
              <span className="material-symbols-outlined text-primary" data-icon="smart_toy">smart_toy</span>
              AI Solutions
            </h3>
            <p className="text-white/60 leading-relaxed">Proprietary LLM layers for custom document processing and customer service bots.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
