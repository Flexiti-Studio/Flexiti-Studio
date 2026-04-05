'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const projects = [
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

export default function LandingPortfolio() {
  return (
    <section className="py-32 bg-surface dark:bg-black transition-colors duration-500" id="portfolio">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-[0.3em] uppercase mb-6 border border-blue-500/20">
              Selected Work
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white leading-tight">
              Built for Success
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
              A selection of platforms we&apos;ve architected for industry leaders.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link className="text-primary font-black flex items-center gap-2 group text-sm uppercase tracking-widest" href="/portfolio">
              Explore Full Portfolio
              <span className="material-symbols-outlined font-black group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={`${project.span} group relative overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-white/5 h-[500px] border border-slate-200 dark:border-white/10`}
            >
              <img 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                src={project.image}
              />
              
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex gap-3 mb-6">
                  {project.category.split('•').map((cat, i) => (
                    <span 
                      key={i} 
                      className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em]"
                    >
                      {cat.trim()}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-white text-3xl md:text-4xl font-black mb-4 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-white/60 font-medium max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 group-hover:mt-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
                     <span className="material-symbols-outlined font-black">arrow_outward</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
