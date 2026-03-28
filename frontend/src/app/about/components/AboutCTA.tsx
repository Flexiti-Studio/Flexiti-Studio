import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-5xl mx-auto rounded-xl bg-gradient-to-br from-primary to-primary-container p-16 text-center text-on-primary shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8 relative z-10">
          Let&apos;s Build Something Great Together
        </h2>
        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          <Link 
            href="/contact"
            className="bg-white text-primary px-8 py-4 rounded-full font-headline font-bold text-lg hover:opacity-90 transition-all active:scale-95 flex items-center justify-center"
          >
            Start a Project
          </Link>
          <Link 
            href="/contact"
            className="bg-primary-container/20 border border-white/30 text-white px-8 py-4 rounded-full font-headline font-bold text-lg hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
