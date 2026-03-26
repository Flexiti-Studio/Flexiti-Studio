export default function LandingHowItWorks() {
  return (
    <section className="py-32 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="text-center mb-24">
          <h2 className="font-headline text-4xl font-bold mb-4">A Proven Path to Launch</h2>
          <p className="text-on-surface-variant">Transparency at every stage of the build.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Steps */}
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 text-primary">
              <span className="material-symbols-outlined text-3xl" data-icon="lightbulb">lightbulb</span>
            </div>
            <h4 className="font-bold mb-2">Idea / Consultation</h4>
            <p className="text-sm text-on-surface-variant">Defining your vision and market fit.</p>
          </div>
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 text-primary">
              <span className="material-symbols-outlined text-3xl" data-icon="draw">draw</span>
            </div>
            <h4 className="font-bold mb-2">Design &amp; Planning</h4>
            <p className="text-sm text-on-surface-variant">High-fidelity UI/UX and system architecture.</p>
          </div>
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 text-primary">
              <span className="material-symbols-outlined text-3xl" data-icon="code">code</span>
            </div>
            <h4 className="font-bold mb-2">Development</h4>
            <p className="text-sm text-on-surface-variant">Agile building with weekly updates.</p>
          </div>
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 text-primary">
              <span className="material-symbols-outlined text-3xl" data-icon="auto_awesome">auto_awesome</span>
            </div>
            <h4 className="font-bold mb-2">Launch &amp; Scale</h4>
            <p className="text-sm text-on-surface-variant">Global deployment and ongoing support.</p>
          </div>
          {/* Connecting Line (Desktop Only) */}
          <div className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}
