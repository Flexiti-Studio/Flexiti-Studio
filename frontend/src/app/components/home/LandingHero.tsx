export default function LandingHero() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container text-primary font-semibold text-xs tracking-widest uppercase mb-6">
            The Digital Architect
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight mb-8">
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Scalable</span> Digital Products.
          </h1>
          <p className="text-on-surface-variant text-xl leading-relaxed max-w-xl mb-10">
            Custom web apps, mobile solutions, SaaS platforms, and MVP development for startups and global founders.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all active:scale-95 flex items-center gap-2">
              Start a Project
              <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </button>
            <button className="bg-surface-container-high text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container-highest transition-all">
              View Work
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="relative rounded-lg overflow-hidden shadow-2xl bg-surface-container-lowest p-4">
            <img alt="Dashboard Mockup" className="rounded-DEFAULT w-full object-cover aspect-video" data-alt="Modern SaaS dashboard interface with complex data visualizations, glassmorphism sidebar, and clean typography in a bright tech office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd7_c_r3Hm7s9fRsZhKi1qAmiePPVcUGjyg8ddbQgaLvv7S_VZZTvlf7wYuOAqoFpng4X2Md0cXuoAY2TW6OJt-o3GCME4ZueJzuxNx1ETKY6EeNKALYxqYXUI8G1jAdn9FCSNFGpEjDr6OSHw92HKZnOQoDvPqiYT7JIk1ugl1UDXb0dLXUZGDwRC6L2qZNwYgPtYBEJ3GwAMtInrRVYr1sBcYd-Myf0hJltYXSPzjXjU_ygS9ndk5Z3SBRkUK7pwuDAd_RcZbW8r"/>
            <div className="absolute -bottom-8 -left-8 glass-dock p-6 rounded-lg shadow-xl border border-white/20 hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" data-icon="trending_up">trending_up</span>
                </div>
                <div>
                  <div className="text-xs font-label text-on-surface-variant">Active Growth</div>
                  <div className="text-lg font-headline font-bold text-primary">+128%</div>
                </div>
              </div>
              <div className="h-2 w-48 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
