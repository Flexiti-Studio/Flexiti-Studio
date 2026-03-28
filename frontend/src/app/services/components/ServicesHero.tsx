import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,#eaedff_0%,transparent_100%)] opacity-60"></div>
      <div className="max-w-7xl mx-auto px-8 text-center">
        <span className="inline-block px-4 py-1.5 mb-8 rounded-full bg-primary-fixed text-on-primary-fixed font-label text-[0.75rem] font-semibold tracking-widest uppercase">
          Full-Cycle Engineering
        </span>
        <h1 className="font-headline text-[3.5rem] md:text-[4.5rem] leading-[1.1] font-bold text-on-surface tracking-tighter mb-8">
          Build Scalable Systems, <br /><span className="text-gradient">Not Just Websites.</span>
        </h1>
        <p className="max-w-2xl mx-auto font-body text-lg text-on-surface-variant mb-12">
          End-to-end digital solutions for modern businesses: Web Apps, Mobile Apps, SaaS, and AI-powered systems architected for performance and growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/contact"
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-headline font-semibold shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-95"
          >
            Start a Project
          </Link>
          <Link 
            href="/contact"
            className="bg-surface-container-high text-primary px-8 py-4 rounded-full font-headline font-semibold hover:bg-surface-container transition-all active:scale-95"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </section>
  );
}
