export default function LandingCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <h2 className="font-headline text-5xl md:text-6xl font-extrabold mb-10 leading-tight">Let’s Build Your Next Product</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all active:scale-95">
            Start a Project
          </button>
          <button className="bg-surface-container-high text-on-surface px-10 py-5 rounded-full font-bold text-xl hover:bg-surface-container-highest transition-all flex items-center gap-2">
            <span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
            Book a Call
          </button>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
}
