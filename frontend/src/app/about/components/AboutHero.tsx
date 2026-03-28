import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container text-primary font-label text-xs font-semibold mb-6 uppercase tracking-widest">
            The Digital Architect
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface leading-[1.1] tracking-tighter mb-8">
            About <span className="text-gradient">Flexiti Studio</span>
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl mb-10">
            We build flexible, scalable, and impactful digital solutions for modern businesses. From concept to code, we craft the systems that define tomorrow.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact"
              className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-headline font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center"
            >
              Start a Project
            </Link>
            <Link 
              href="/portfolio"
              className="bg-surface-container-high text-primary px-8 py-4 rounded-full font-headline font-bold hover:bg-surface-container-highest transition-all flex items-center justify-center"
            >
              View Our Work
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px]"></div>
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              alt="Digital Architecture — Abstract 3D digital nodes connected by glowing lines"
              className="w-full aspect-square object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtVH6mYiTq_AvqhW5DXZy7JGROl5Aqbp3tykGRCoG-zkW-I9O0m12ubHaySZnMQW7MfD7ntQB00RLsK3SvQcUtNfOuXcJRRWRaRjG54IQPVdnDX3pQG5dTLz7NOSHcR_cc4bU6_oomSWMTA3DV3dOAHzSCGDeihe05ZNtx40-WaJqVxbjbl5ZwCkHFD7vONvqguCygqmywRIVdx6qzGVVg9LTfM_cAZpt_9pTSZyBsB9fWzk2X2sGuWXSH1NEf5nB7WuqlBP1BqRtc"
            />
          </div>
        </div>
      </div>
    </section>
  );
}