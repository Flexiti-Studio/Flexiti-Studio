export default function AboutMission() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-12 bg-surface-container-lowest rounded-lg border border-outline-variant/15 shadow-sm">
            <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-primary">rocket_launch</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Our Mission</h3>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              To build flexible, scalable, and impactful digital solutions that empower businesses to solve complex problems and thrive in a digital-first economy.
            </p>
          </div>
          <div className="p-12 bg-surface-container-lowest rounded-lg border border-outline-variant/15 shadow-sm">
            <div className="w-12 h-12 bg-tertiary-fixed rounded-xl flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-tertiary">visibility</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Our Vision</h3>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              To become a trusted African-born technology studio recognized globally for setting the gold standard in product engineering and architectural excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
