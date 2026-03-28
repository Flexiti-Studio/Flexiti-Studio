import Link from 'next/link';

export default function PortfolioHero() {
  return (
    <section className="relative pt-24 pb-16 px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center text-center space-y-6">
        <span className="text-sm uppercase tracking-[0.2em] text-primary font-bold">Portfolio</span>
        <h1 className="text-[3.5rem] md:text-[5.5rem] font-headline font-extrabold leading-[1.1] tracking-tighter text-on-surface">
          Our Work
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-on-surface-variant leading-relaxed">
          We build scalable digital products for startups and global businesses. Our approach blends technical precision with editorial design.
        </p>
        <div className="pt-8 flex gap-4">
          <Link 
            href="/contact"
            className="btn-gradient text-on-primary px-8 py-4 rounded-full font-headline font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center"
          >
            Start a Project
          </Link>
        </div>
      </div>
      {/* Decorative Element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-secondary/5 rounded-full blur-[80px] -z-10"></div>
    </section>
  );
}