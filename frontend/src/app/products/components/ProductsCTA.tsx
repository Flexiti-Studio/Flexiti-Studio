export default function ProductsCTA() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-primary-container p-12 md:p-24 rounded-lg text-center relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold font-headline text-on-primary tracking-tighter">
            Have an Idea? Let&apos;s Build It Together.
          </h2>
          <p className="text-xl text-primary-fixed max-w-2xl mx-auto leading-relaxed">
            Whether you need a custom tool for your team or have the next billion-dollar SaaS idea, we are ready to architect it.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <button className="px-10 py-4 rounded-full bg-white text-primary font-bold hover:scale-105 transition-transform shadow-xl">
              Start a Project
            </button>
            <button className="px-10 py-4 rounded-full border-2 border-white/20 text-white font-bold hover:bg-white/10 transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
