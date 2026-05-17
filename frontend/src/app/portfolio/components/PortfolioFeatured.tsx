'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const projects = [
  {
    title: "SchoolHub",
    category: "Education",
    type: "Web App",
    problem: "Outdated legacy systems caused significant administrative friction and data silos for a multi-campus educational institution.",
    solution: "We engineered a centralized management portal with real-time analytics, automated attendance, and seamless student-teacher communication channels.",
    result: "40% reduction in administrative overhead and a 25% increase in student engagement within the first semester.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "AWS"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu0ixATs_haQU-wlQ6sG8H7o9v2U-o2o97r1-Ct_FDfwCse_oEaCSSjYFSWbYhGbj2tuZQgg0Yw-vfl04KPI0bz47w7U7VQ6YuRz1L_kbLrRIvCHTRurkriN46EspnQVT-qlVDLa0kSgcB3oD7ItmlQz2aLmJYpO9ZahZYL_CECP4HWNcII69jfoWCe_Was3eE-7gqbffn1V2V4LakQZB6jl0r79vEnoyZjFjyDfvLEIjU51GzlcYrjyMgS964h-ZCkW00fPreZ2lK"
  },
  {
    title: "FlexBZ",
    category: "Finance",
    type: "SaaS",
    problem: "SMEs lacked a unified view of their inventory and cash flow, leading to overstocking and missed revenue opportunities.",
    solution: "An AI-powered inventory forecasting system that integrates with existing POS software to provide predictive insights.",
    result: "Average inventory holding costs decreased by 18% while stock-outs were reduced by nearly 60%.",
    tech: ["React", "Node.js", "OpenAI API", "Vercel"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyAsjdDIOAr_QFp0A29lEOEbhnCcW-xmMXTniBHaTIaH4jqnLmXKQqfNiXtljwY_qw_ILJVE8xLq8wyPDgSgMY2ASH0tYh-iWMPOi3ORL8WY9jGDUPzG_vRWEP7K6COnv7Zwt1zgtajKZvFjBHpUA7RRX3SE9V3GY7bxRDrDQM7HGIvCUGJftw7kp8zrv46eCsaPscGc4UPyrXKm4n5Q-xQGo9sgmg7VyCFw3MZL9dHh7cz3gsclYJSit7m56KSVvaaSQPhWKTA6bU"
  }
];

export default function PortfolioFeatured() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <section className="px-8 max-w-7xl mx-auto space-y-40 mb-40 w-full">
      {projects.map((project, index) => (
        <div 
          key={project.title} 
          className={`grid md:grid-cols-2 gap-16 lg:gap-24 items-center ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Text Details Block */}
          <motion.div 
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'} space-y-8`}
          >
            <div className="space-y-6">
              <div className="flex gap-3">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-colors ${
                  isDark 
                    ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' 
                    : 'bg-indigo-50 border-indigo-100 text-indigo-700'
                }`}>
                  {project.category}
                </span>
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-colors ${
                  isDark 
                    ? 'bg-white/5 border-white/10 text-slate-400' 
                    : 'bg-slate-100 border-slate-200 text-slate-500'
                }`}>
                  {project.type}
                </span>
              </div>
              
              <h2 className={`text-4xl md:text-6xl font-extrabold font-headline leading-tight tracking-tight transition-colors ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {project.title}
              </h2>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-colors ${
                    isDark ? 'text-indigo-400' : 'text-indigo-600'
                  }`}>
                    The Problem
                  </h4>
                  <p className={`text-base font-medium leading-relaxed transition-colors ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {project.problem}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-colors ${
                    isDark ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    The Solution
                  </h4>
                  <p className={`text-base font-medium leading-relaxed transition-colors ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {project.solution}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-colors ${
                    isDark ? 'text-emerald-400' : 'text-emerald-600'
                  }`}>
                    The Result
                  </h4>
                  <p className={`text-base font-medium leading-relaxed transition-colors ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {project.result}
                  </p>
                </div>
              </div>
            </div>

            {/* Tech chips wrapper */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span 
                  key={t} 
                  className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border transition-colors ${
                    isDark 
                      ? 'bg-zinc-900/50 border-white/5 text-slate-500' 
                      : 'bg-slate-50 border-slate-200 text-slate-400'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* View case study trigger */}
            <button className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] transition-all hover:opacity-85">
              <span className={isDark ? 'text-white' : 'text-slate-900'}>
                View Case Study
              </span>
              {/* Crisp SVG arrow replacing raw material symbol */}
              <svg className="w-4 h-4 text-indigo-500 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>

          {/* Graphical Mockup Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'} relative group`}
          >
            {/* Ambient Radial Hover Backlights */}
            <div 
              className={`absolute -inset-4 rounded-[3rem] blur-2xl opacity-15 pointer-events-none transition-all duration-700 group-hover:opacity-35 ${
                isDark ? 'bg-indigo-600' : 'bg-indigo-400'
              }`} 
            />
            
            <div 
              className={`relative rounded-[2rem] overflow-hidden border p-3 shadow-2xl transition-all duration-700 ${
                isDark 
                  ? 'bg-white/5 border-white/10 shadow-black/40' 
                  : 'bg-white border-slate-200 shadow-[0_20px_50px_rgba(99,102,241,0.04)]'
              }`}
            >
              <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
