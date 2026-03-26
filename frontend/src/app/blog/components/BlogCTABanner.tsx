export default function BlogCTABanner() {
  return (
    <section className="mt-32 rounded-lg bg-gradient-to-br from-primary to-primary-container p-12 md:p-20 text-center text-on-primary shadow-2xl shadow-primary/30">
      <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8">Need Help Building Your Product?</h2>
      <p className="text-xl md:text-2xl text-on-primary-container/80 max-w-3xl mx-auto mb-12">
        From discovery and design to full-scale development, we provide the engineering excellence you need to win.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-surface-container-high transition-all shadow-xl">
          Book a Strategy Call
        </button>
        <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
          View Our Work
        </button>
      </div>
    </section>
  );
}
