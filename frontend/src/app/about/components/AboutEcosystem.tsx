export default function AboutEcosystem() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">Our Ecosystem</h2>
          <p className="text-on-surface-variant">The pillars of our technological impact.</p>
        </div>
        <div className="relative flex flex-col items-center">
          {/* Parent */}
          <div className="bg-surface-container-highest px-12 py-6 rounded-lg border-2 border-primary/20 shadow-md mb-20 relative">
            <span className="font-headline font-extrabold text-on-surface text-xl">Flexiti Studio Tech Limited</span>
            <div className="absolute -bottom-20 left-1/2 w-0.5 h-20 bg-outline-variant/30"></div>
          </div>
          {/* Children */}
          <div className="grid md:grid-cols-2 gap-24 w-full relative">
            <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-outline-variant/30 hidden md:block"></div>
            <div className="bg-white p-8 rounded-lg shadow-xl border border-outline-variant/15 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-white text-3xl">terminal</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">Flexiti Studio</h3>
              <p className="text-on-surface-variant">Bespoke product development and engineering for startups and global enterprises.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl border border-outline-variant/15 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-tertiary-container rounded-full flex items-center justify-center mb-6 shadow-lg shadow-tertiary/20">
                <span className="material-symbols-outlined text-white text-3xl">school</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">Flex Academe</h3>
              <p className="text-on-surface-variant">Our educational arm dedicated to mentoring and training the next wave of tech talent.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
