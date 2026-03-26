export default function PortfolioCTA() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-[3rem] md:text-[4rem] font-headline font-extrabold tracking-tighter leading-tight">
          Have an Idea? <br /> <span className="text-primary">Let&apos;s Build It</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <button className="w-full md:w-auto btn-gradient text-on-primary px-12 py-5 rounded-full font-headline font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all">
            Work with us
          </button>
          <button className="w-full md:w-auto bg-surface-container-high text-on-surface px-12 py-5 rounded-full font-headline font-bold text-xl hover:bg-surface-container transition-all">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
}
