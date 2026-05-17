'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const services = [
  {
    title: "Web App Development",
    description: "High-performance, scalable web applications built with React, Next.js, and robust backends.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Mobile App Development",
    description: "Native-feel cross-platform mobile experiences that users love to keep on their home screens.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: "indigo",
  },
  {
    title: "SaaS Product Development",
    description: "Multi-tenant architectures, subscription management, and secure cloud infrastructure.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: "purple",
    isFeatured: true, // Codifying one prominent accent card
  },
  {
    title: "MVP Development",
    description: "Fast-track your idea to market with essential features and scalable code foundation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "cyan",
  },
  {
    title: "AI Tools & Automation",
    description: "Integrating LLMs and custom automation flows to supercharge your business efficiency.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: "teal",
  },
  {
    title: "System Integration",
    description: "Connecting disparate systems via custom APIs to create a unified digital ecosystem.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    color: "sky",
  }
];

export default function LandingServices() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#030014] transition-colors duration-500" id="services">
      {/* Subtle bottom glow accent */}
      <div 
        className={`absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square rounded-full pointer-events-none transition-all duration-700 ${
          isDark ? 'bg-[#7c3aed]/10 blur-[100px]' : 'bg-indigo-500/5 blur-[80px]'
        }`} 
      />

      <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl mx-auto text-center"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full font-bold text-[10px] tracking-[0.3em] uppercase mb-6 border transition-colors ${
            isDark 
              ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' 
              : 'bg-indigo-50 text-indigo-600 border-indigo-100'
          }`}>
            Our Expertise
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 dark:text-white leading-tight">
            Expert Solutions for <br /> Modern Challenges
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">
            We combine engineering precision with creative vision to deliver products that dominate markets.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => {
            const featured = service.isFeatured;
            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`
                  group p-8 rounded-[2rem] transition-all duration-500 border flex flex-col justify-between min-h-[280px] relative overflow-hidden cursor-pointer
                  ${featured 
                    ? 'bg-gradient-to-br from-indigo-600 to-purple-700 border-indigo-500 text-white shadow-[0_20px_50px_-10px_rgba(99,102,241,0.25)]' 
                    : isDark 
                      ? 'bg-white/[0.01] border-white/[0.06] hover:bg-white/[0.03] hover:border-white/10 text-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]' 
                      : 'bg-white border-slate-200 hover:border-indigo-100 text-slate-800 shadow-[0_4px_12px_rgba(99,102,241,0.01)] hover:shadow-[0_20px_40px_rgba(99,102,241,0.06)]'
                  }
                `}
              >
                {/* Accent glow on hover for non-featured cards */}
                {!featured && (
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                )}

                {/* Header: Icon + UpRight indicator */}
                <div className="flex items-center justify-between">
                  <div className={`p-3.5 rounded-2xl transition-all duration-300 ${
                    featured 
                      ? 'bg-white/15 text-white' 
                      : isDark 
                        ? 'bg-white/5 text-indigo-400 group-hover:bg-indigo-600/20 group-hover:text-indigo-300' 
                        : 'bg-slate-50 text-indigo-600 group-hover:bg-indigo-50 group-hover:text-indigo-700'
                  }`}>
                    {service.icon}
                  </div>
                  
                  {/* UpRight Indicator arrow */}
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      featured ? 'text-white' : 'text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-white'
                    }`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>

                {/* Content */}
                <div className="mt-8 space-y-3">
                  <h3 className={`text-xl font-bold tracking-tight ${
                    featured ? 'text-white' : 'text-slate-900 dark:text-white'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    featured ? 'text-indigo-100' : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
