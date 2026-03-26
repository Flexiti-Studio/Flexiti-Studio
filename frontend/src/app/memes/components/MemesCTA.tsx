export default function MemesCTA() {
  return (
    <section className="bg-primary-container rounded-[2.5rem] p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <span className="material-symbols-outlined text-[120px]">auto_awesome_motion</span>
      </div>
      <div className="max-w-2xl relative z-10">
        <h3 className="text-3xl font-black font-headline text-white mb-4 leading-tight">
          Elevate your creations further.
        </h3>
        <p className="text-on-primary-container text-lg mb-8 opacity-90 leading-relaxed">
          Free Meme Videos is just the beginning. Discover our full suite of AI-driven creative tools, motion templates, and digital asset managers built for professional teams.
        </p>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-2xl font-headline font-extrabold text-sm uppercase tracking-widest hover:shadow-2xl transition-all active:scale-95">
            Explore Flexiti Studio <span className="material-symbols-outlined">rocket_launch</span>
          </button>
        </div>
      </div>
    </section>
  );
}
