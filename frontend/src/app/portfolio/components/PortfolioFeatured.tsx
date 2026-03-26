export default function PortfolioFeatured() {
  return (
    <section className="px-8 max-w-7xl mx-auto space-y-32 mb-32">
      {/* Project 1: SchoolHub */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 space-y-8">
          <div className="space-y-4">
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-surface-container text-primary text-xs font-bold rounded-full uppercase tracking-tighter">Education</span>
              <span className="px-3 py-1 bg-surface-container text-primary text-xs font-bold rounded-full uppercase tracking-tighter">Web App</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">SchoolHub</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <div>
                <h4 className="text-on-surface font-bold text-sm uppercase tracking-wider mb-2">The Problem</h4>
                <p>Outdated legacy systems caused significant administrative friction and data silos for a multi-campus educational institution.</p>
              </div>
              <div>
                <h4 className="text-on-surface font-bold text-sm uppercase tracking-wider mb-2">The Solution</h4>
                <p>We engineered a centralized management portal with real-time analytics, automated attendance, and seamless student-teacher communication channels.</p>
              </div>
              <div>
                <h4 className="text-on-surface font-bold text-sm uppercase tracking-wider mb-2">The Result</h4>
                <p>40% reduction in administrative overhead and a 25% increase in student engagement within the first semester.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="text-xs font-bold px-3 py-1.5 bg-surface-container-highest rounded-lg">Next.js</span>
            <span className="text-xs font-bold px-3 py-1.5 bg-surface-container-highest rounded-lg">PostgreSQL</span>
            <span className="text-xs font-bold px-3 py-1.5 bg-surface-container-highest rounded-lg">Tailwind CSS</span>
            <span className="text-xs font-bold px-3 py-1.5 bg-surface-container-highest rounded-lg">AWS</span>
          </div>
          <button className="group flex items-center gap-2 font-headline font-bold text-primary">
            View Case Study 
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative rounded-lg overflow-hidden bg-surface-container-low p-4 shadow-xl">
            <img alt="SchoolHub Dashboard" className="rounded-DEFAULT w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700" data-alt="Modern minimalist educational dashboard interface showing student metrics and schedules on a clean white background with blue accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu0ixATs_haQU-wlQ6sG8H7o9v2U-o2o97r1-Ct_FDfwCse_oEaCSSjYFSWbYhGbj2tuZQgg0Yw-vfl04KPI0bz47w7U7VQ6YuRz1L_kbLrRIvCHTRurkriN46EspnQVT-qlVDLa0kSgcB3oD7ItmlQz2aLmJYpO9ZahZYL_CECP4HWNcII69jfoWCe_Was3eE-7gqbffn1V2V4LakQZB6jl0r79vEnoyZjFjyDfvLEIjU51GzlcYrjyMgS964h-ZCkW00fPreZ2lK"/>
          </div>
        </div>
      </div>
      {/* Project 2: FlexBZ */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative rounded-lg overflow-hidden bg-surface-container-low p-4 shadow-xl">
            <img alt="FlexBZ Analytics" className="rounded-DEFAULT w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700" data-alt="Sleek dark mode data analytics dashboard with glowing blue and violet charts, clean typography, and high-tech feel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyAsjdDIOAr_QFp0A29lEOEbhnCcW-xmMXTniBHaTIaH4jqnLmXKQqfNiXtljwY_qw_ILJVE8xLq8wyPDgSgMY2ASH0tYh-iWMPOi3ORL8WY9jGDUPzG_vRWEP7K6COnv7Zwt1zgtajKZvFjBHpUA7RRX3SE9V3GY7bxRDrDQM7HGIvCUGJftw7kp8zrv46eCsaPscGc4UPyrXKm4n5Q-xQGo9sgmg7VyCFw3MZL9dHh7cz3gsclYJSit7m56KSVvaaSQPhWKTA6bU"/>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-surface-container text-primary text-xs font-bold rounded-full uppercase tracking-tighter">Finance</span>
              <span className="px-3 py-1 bg-surface-container text-primary text-xs font-bold rounded-full uppercase tracking-tighter">SaaS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">FlexBZ</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <div>
                <h4 className="text-on-surface font-bold text-sm uppercase tracking-wider mb-2">The Problem</h4>
                <p>SMEs lacked a unified view of their inventory and cash flow, leading to overstocking and missed revenue opportunities.</p>
              </div>
              <div>
                <h4 className="text-on-surface font-bold text-sm uppercase tracking-wider mb-2">The Solution</h4>
                <p>An AI-powered inventory forecasting system that integrates with existing POS software to provide predictive insights.</p>
              </div>
              <div>
                <h4 className="text-on-surface font-bold text-sm uppercase tracking-wider mb-2">The Result</h4>
                <p>Average inventory holding costs decreased by 18% while stock-outs were reduced by nearly 60%.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="text-xs font-bold px-3 py-1.5 bg-surface-container-highest rounded-lg">React</span>
            <span className="text-xs font-bold px-3 py-1.5 bg-surface-container-highest rounded-lg">Node.js</span>
            <span className="text-xs font-bold px-3 py-1.5 bg-surface-container-highest rounded-lg">OpenAI API</span>
            <span className="text-xs font-bold px-3 py-1.5 bg-surface-container-highest rounded-lg">Vercel</span>
          </div>
          <button className="group flex items-center gap-2 font-headline font-bold text-primary">
            View Case Study 
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
