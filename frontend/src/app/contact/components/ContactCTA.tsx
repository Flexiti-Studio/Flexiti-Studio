export default function ContactCTA() {
  return (
    <section className="py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-on-surface rounded-xl p-12 md:p-20 flex flex-col items-center text-center">
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#0052ff33,transparent_60%)]"></div>
          </div>
          <h2 className="relative font-headline text-4xl md:text-5xl font-bold text-surface-container-lowest mb-8">
            Ready to Build Something Great?
          </h2>
          <p className="relative text-surface-variant text-lg md:text-xl max-w-2xl mb-12 font-body leading-relaxed">
            Join the ranks of successful entrepreneurs who chose Flexiti Studio to bring their digital visions to life.
          </p>
          <button className="relative bg-primary text-on-primary px-10 py-4 rounded-full font-headline font-bold text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all active:scale-95">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
