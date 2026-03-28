import Link from 'next/link';

export default function LandingPortfolio() {
  return (
    <section className="py-32" id="portfolio">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl font-bold mb-6">Built for Success</h2>
            <p className="text-on-surface-variant text-lg">A selection of platforms we&apos;ve architected for industry leaders.</p>
          </div>
          <Link className="text-primary font-bold flex items-center gap-2 group" href="#">
            Explore Full Portfolio
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Project 1 */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-lg bg-surface-container-high h-[400px]">
            <img alt="Data Viz Platform" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Close up of a professional data visualization software screen with dark mode UI, glowing line charts and financial metrics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvqrjzbfaD7g80f3gufB-4UolEs7ElOP-hdmb-YNE2u5hQOZRScflJot2h448P49CEJYSOrK8f3mdMZR1Gz874Vbqf1LgVeqG5cGliwAvvLt4OfIq6y7ghCxH1K5VsBvKz3G3TOLu-kqdBm0aXYuUUZVaCorRSXZNntqiMMQ6oBBnLWH1IbolH7hoPG_tB3nwpyU4frEcP9nixSyvKaJ1DMISuhOwxQPIYvYfYhraFwoW4FZ0Bu1TCyv7G-dibbKsJmpIawvNx8ypc"/>
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent p-10 flex flex-col justify-end">
              <div className="flex gap-2 mb-4">
                <span className="bg-primary-container/40 backdrop-blur-md text-on-primary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">SaaS</span>
                <span className="bg-surface-container-highest/60 backdrop-blur-md text-on-surface px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Fintech</span>
              </div>
              <h3 className="text-white text-3xl font-headline font-bold mb-2">Quantum Analytics</h3>
              <p className="text-white/70 max-w-lg">Next-gen financial data processing platform with real-time AI insights.</p>
            </div>
          </div>
          {/* Project 2 */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-lg bg-surface-container-high h-[400px]">
             <img alt="Health Mobile App" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Hand holding a modern smartphone showing a minimalist health and wellness tracking app interface with soft pastel colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgKnlK96GaljKKsaCRy5aGD8xi0kL2a3IUnRV7uoULVPuhWs1mpsYhNZQxuLWdKRW4DzbU8c8rzzfukgli5fiNvHX_zJvG-6QG2elKDXtGhqwF4e4eIsUqsR8A4ODKJOcH_1aJVaqOMLKWVeptXJ4xsRqERh_NSJrerck6zhVJdEi2UFXNSzGyeyKx_w8NAR5h14qCoM0g83LoqmNpqdxopDXzS5njj_wwe1bqOi_ySx66ESOuZaSp7vevWfSGtV1tzZ5oIKIDnm9r"/>
             <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent p-10 flex flex-col justify-end">
               <div className="flex gap-2 mb-4">
                 <span className="bg-primary/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Mobile</span>
               </div>
               <h3 className="text-white text-2xl font-headline font-bold mb-2">Voda Health</h3>
               <p className="text-white/70">Transforming telemedicine for emerging markets.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
