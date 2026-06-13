'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { PortfolioItem } from '../../portfolio/components/types';

interface LandingPortfolioProps {
  projects?: PortfolioItem[];
}

const staticLandingProjects = [
  {
    title: "Quantum Analytics",
    category: "SaaS • Fintech",
    description: "Next-gen financial data processing platform with real-time AI insights.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvqrjzbfaD7g80f3gufB-4UolEs7ElOP-hdmb-YNE2u5hQOZRScflJot2h448P49CEJYSOrK8f3mdMZR1Gz874Vbqf1LgVeqG5cGliwAvvLt4OfIq6y7ghCxH1K5VsBvKz3G3TOLu-kqdBm0aXYuUUZVaCorRSXZNntqiMMQ6oBBnLWH1IbolH7hoPG_tB3nwpyU4frEcP9nixSyvKaJ1DMISuhOwxQPIYvYfYhraFwoW4FZ0Bu1TCyv7G-dibbKsJmpIawvNx8ypc",
    span: "md:col-span-8"
  },
  {
    title: "Voda Health",
    category: "Mobile • Health",
    description: "Transforming telemedicine for emerging markets.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgKnlK96GaljKKsaCRy5aGD8xi0kL2a3IUnRV7uoULVPuhWs1mpsYhNZQxuLWdKRW4DzbU8c8rzzfukgli5fiNvHX_zJvG-6QG2elKDXtGhqwF4e4eIsUqsR8A4ODKJOcH_1aJVaqOMLKWVeptXJ4xsRqERh_NSJrerck6zhVJdEi2UFXNSzGyeyKx_w8NAR5h14qCoM0g83LoqmNpqdxopDXzS5njj_wwe1bqOi_ySx66ESOuZaSp7vevWfSGtV1tzZ5oIKIDnm9r",
    span: "md:col-span-4"
  }
];

export default function LandingPortfolio({ projects = [] }: LandingPortfolioProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  // Select exactly one web project and one mobile project if available
  const webProject = projects.find(p => p.category !== 'mobile');
  const mobileProject = projects.find(p => p.category === 'mobile');

  const selectedProjects: PortfolioItem[] = [];
  if (webProject) selectedProjects.push(webProject);
  if (mobileProject) selectedProjects.push(mobileProject);

  // Fallback: fill up to 2 items if needed
  if (selectedProjects.length < 2 && projects.length > 0) {
    projects.forEach(p => {
      if (!selectedProjects.some(sp => sp.id === p.id) && selectedProjects.length < 2) {
        selectedProjects.push(p);
      }
    });
  }

  // Process and format projects
  const displayProjects = selectedProjects.length > 0 ? selectedProjects.map((project, idx) => {
    // Dynamic layout spans: alternating patterns (8-4, 4-8)
    let span = "md:col-span-6";
    const mod = idx % 4;
    if (mod === 0) span = "md:col-span-8";
    else if (mod === 1) span = "md:col-span-4";
    else if (mod === 2) span = "md:col-span-4";
    else if (mod === 3) span = "md:col-span-8";

    // Categories list formatting
    let categoriesList: string[] = [];
    if (project.tags && project.tags.length > 0) {
      categoriesList = project.tags.slice(0, 2);
    } else if (project.category) {
      categoriesList = [project.category];
    } else {
      categoriesList = ["Platform"];
    }

    return {
      id: project.id,
      title: project.title,
      description: project.description,
      image: project.image,
      categories: categoriesList,
      span
    };
  }) : staticLandingProjects.map((proj) => ({
    id: proj.title,
    title: proj.title,
    description: proj.description,
    image: proj.image,
    categories: proj.category.split('•').map(c => c.trim()),
    span: proj.span
  }));

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#030014] transition-colors duration-500" id="portfolio">
      <div className="max-w-7xl mx-auto px-8 w-full">
        {/* Centered Header block to preserve space design */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-center space-y-4"
          >
            <span className={`inline-block px-4 py-1.5 rounded-full font-bold text-[10px] tracking-[0.3em] uppercase border transition-colors ${
              isDark 
                ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' 
                : 'bg-indigo-50 text-indigo-600 border-indigo-100'
            }`}>
              Selected Work
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Built for Success
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">
              A selection of platforms we&apos;ve architected for industry leaders.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link 
              className="text-indigo-600 dark:text-indigo-400 font-extrabold flex items-center gap-2 group text-sm uppercase tracking-widest hover:opacity-80 transition-opacity" 
              href="/portfolio"
            >
              Explore Full Portfolio
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {displayProjects.map((project, idx) => (
            <motion.div 
              key={project.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={`${project.span} group relative overflow-hidden rounded-[2rem] h-[480px] border transition-all duration-500 ${
                isDark 
                  ? 'bg-white/5 border-white/10 hover:border-white/20 shadow-2xl' 
                  : 'bg-white border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:shadow-indigo-500/5'
              }`}
            >
              <Link href="/portfolio" className="absolute inset-0 z-25 block">
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out" 
                  src={project.image}
                />
                
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-30">
                  <div className="flex gap-3 mb-6">
                    {project.categories.map((cat, i) => (
                      <span 
                        key={i} 
                        className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.25em]"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-white text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/60 font-medium max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 group-hover:mt-6">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black hover:scale-105 active:scale-95 transition-all">
                      {/* SVG arrow outward */}
                      <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
