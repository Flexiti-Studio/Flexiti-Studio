import { Metadata } from 'next';
import BlogPage from '../blog/page';
import ServicesPage from '../services/page';
import OurWorkPage from '../portfolio/page';

interface PageProps {
  params: Promise<{
    tenant: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const tenant = resolvedParams.tenant.toLowerCase();
  
  if (tenant === 'blogs' || tenant === 'blog') {
    return {
      title: 'Journal | Flexiti Studio',
      description: 'Expert perspectives on building high-performance digital products, scaling engineering teams, and the future of SaaS.',
    };
  }

  if (tenant === 'services') {
    return {
      title: 'Services | Flexiti Studio',
      description: 'End-to-end digital solutions for modern businesses: Web Apps, Mobile Apps, SaaS, and AI-powered systems.',
    };
  }

  if (tenant === 'portfolio') {
    return {
      title: 'Our Work | Flexiti Studio',
      description: 'We build scalable digital products for startups and global businesses. Explore our portfolio.',
    };
  }

  return {
    title: `${tenant.charAt(0).toUpperCase() + tenant.slice(1)} Space | Flexiti Multi-Tenant`,
    description: `Personalized client dashboard for ${tenant} on Flexiti Studio's high-performance network.`,
  };
}

export default async function TenantPage({ params }: PageProps) {
  const resolvedParams = await params;
  const tenant = resolvedParams.tenant.toLowerCase();

  // 1. Mapped Subdomains
  if (tenant === 'blogs' || tenant === 'blog') {
    // Render the server component directly!
    return <BlogPage />;
  }

  if (tenant === 'services') {
    return <ServicesPage />;
  }

  if (tenant === 'portfolio') {
    return <OurWorkPage />;
  }

  // 2. Default Dynamic Client Space Dashboard for any other custom subdomains
  return (
    <main className="min-h-screen bg-[#07070a] text-white flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* Planetary ambient neon glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[140px] opacity-10 bg-indigo-500 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-[120px] opacity-5 bg-sky-500 pointer-events-none" />

      {/* Decorative dashboard outline overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl space-y-12">
        {/* Top Branding Tag */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-slate-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-400"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Multi-Tenant Hub</span>
          </div>
        </div>

        {/* Dynamic Glassmorphic Card Frame */}
        <div className="p-8 md:p-16 rounded-[3rem] border border-white/5 bg-zinc-950/40 backdrop-blur-md shadow-2xl relative overflow-hidden text-center space-y-8">
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black font-headline tracking-tighter leading-none">
              Welcome to the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400 uppercase tracking-wide">
                {tenant}
              </span> Space
            </h1>
            
            <p className="text-slate-400 text-sm md:text-base font-medium max-w-lg mx-auto leading-relaxed">
              Your personalized client workspace on Flexiti Studio. Manage project milestones, view active pipelines, and collaborate with engineering leads.
            </p>
          </div>

          {/* Premium stats summary mockup inside workspace */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01]">
              <span className="block text-2xl font-black font-headline text-indigo-400">01</span>
              <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mt-1">Active Space</span>
            </div>
            
            <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01]">
              <span className="block text-2xl font-black font-headline text-sky-400">100%</span>
              <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mt-1">Network SLA</span>
            </div>

            <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01]">
              <span className="block text-2xl font-black font-headline text-emerald-400">Online</span>
              <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mt-1">Status</span>
            </div>

            <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01]">
              <span className="block text-2xl font-black font-headline text-indigo-400">Node</span>
              <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mt-1">Deployment</span>
            </div>
          </div>

          {/* Call-to-action details */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-center items-center">
             <a 
               href="http://localhost:3000/"
               className="w-full sm:w-auto px-8 h-12 rounded-full font-bold text-[10px] uppercase tracking-widest bg-white text-black hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-black/10"
             >
               Return to Main Site
               <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L18 3m0 0h-5.25M18 3v5.25" />
               </svg>
             </a>

             <a 
               href="http://localhost:3000/contact"
               className="w-full sm:w-auto px-8 h-12 rounded-full font-bold text-[10px] uppercase tracking-widest border border-white/10 text-white hover:bg-white/5 transition-colors flex items-center justify-center gap-2 active:scale-95"
             >
               Request Space Access
             </a>
          </div>

        </div>
      </div>
    </main>
  );
}
