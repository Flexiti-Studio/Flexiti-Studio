'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const features = [
  { 
    title: "Scalable Systems", 
    description: "Code that grows with your user base.", 
    icon: (
      <svg className="w-5 h-5 text-indigo-500 transition-colors group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  { 
    title: "Modern Tech Stack", 
    description: "Using the latest industry-standard frameworks.", 
    icon: (
      <svg className="w-5 h-5 text-indigo-500 transition-colors group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  { 
    title: "Clean Architecture", 
    description: "Maintainable code for long-term health.", 
    icon: (
      <svg className="w-5 h-5 text-indigo-500 transition-colors group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  }
];

export default function LandingAbout() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#030014] transition-colors duration-500 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center w-full">
        
        {/* Left Side: Photo Frame Overlay */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[2.5rem] overflow-hidden h-[500px] shadow-2xl relative border border-slate-200 dark:border-white/10 w-full"
        >
          <Image 
            alt="Built for Africans" 
            className="object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000" 
            src="/branding/built for africans.png" 
            fill
            sizes="(max-w-1024px) 100vw, 50vw"
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className={`absolute bottom-8 right-8 p-8 rounded-[2rem] shadow-2xl backdrop-blur-3xl max-w-[280px] border border-white/20 ${isDark ? 'bg-black/60' : 'bg-white/80'}`}
          >
            <p className={`font-extrabold text-lg mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>African-born, <br /> Global reach.</p>
            <p className={`text-sm font-medium leading-relaxed ${isDark ? 'text-white/60' : 'text-slate-600'}`}>We build with the grit of local challenges and the standards of Silicon Valley.</p>
          </motion.div>
        </motion.div>

        {/* Right Side: Copywriting */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full font-bold text-[10px] tracking-[0.3em] uppercase border mb-8 transition-colors ${
            isDark 
              ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
              : 'bg-blue-50 text-blue-600 border-blue-100'
          }`}>
            Our Mission
          </span>
          
          <h2 className={`font-headline text-4xl md:text-5xl font-extrabold mb-8 transition-colors ${
            isDark ? 'text-white' : 'text-slate-900'
          } leading-tight`}>
            Engineering Impact <br /> Through Technology
          </h2>
          
          <p className={`text-xl leading-relaxed mb-10 font-medium transition-colors ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
             Flexiti Studio builds flexible, scalable, and impactful digital solutions for businesses and founders. We aren&apos;t just developers; we are partners in your growth journey.
          </p>
          
          {/* Features Column */}
          <div className="grid gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-5 group cursor-pointer"
              >
                <div className={`
                  mt-1 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 flex-shrink-0
                  ${isDark ? 'bg-white/5 text-indigo-400 border border-white/10 group-hover:bg-indigo-600' : 'bg-slate-100 text-indigo-600 border border-slate-200 group-hover:bg-indigo-600 group-hover:text-white'}
                `}>
                  {feature.icon}
                </div>
                <div>
                  <h4 className={`font-bold text-lg mb-1 transition-colors ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>{feature.title}</h4>
                  <p className={`font-medium transition-colors ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
