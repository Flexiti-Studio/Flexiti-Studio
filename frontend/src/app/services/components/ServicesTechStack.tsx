'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const technologies = [
  { 
    name: "React / Next.js", 
    icon: (
      <svg className="w-8 h-8 text-indigo-500 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m15.5-5.5l-13 13m0-13l13 13" />
      </svg>
    )
  },
  { 
    name: "Mobile / Flutter", 
    icon: (
      <svg className="w-8 h-8 text-indigo-500 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    )
  },
  { 
    name: "Cloud Architecture", 
    icon: (
      <svg className="w-8 h-8 text-indigo-500 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  { 
    name: "AI Ecosystems", 
    icon: (
      <svg className="w-8 h-8 text-indigo-500 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  { 
    name: "Advanced Data", 
    icon: (
      <svg className="w-8 h-8 text-indigo-500 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  { 
    name: "Real-time Ops", 
    icon: (
      <svg className="w-8 h-8 text-indigo-500 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c.88 0 1.5-.62 1.5-1.5S12.88 8 12 8s-1.5.62-1.5 1.5.62 1.5 1.5 1.5zm0-6a9 9 0 00-9 9m18 0a9 9 0 00-9-9zm-4.5 9a4.5 4.5 0 019 0" />
      </svg>
    )
  }
];

export default function ServicesTechStack() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <section className="py-24 px-6 md:px-8 overflow-hidden bg-slate-50 dark:bg-[#030014] transition-colors duration-500 w-full">
      <div className="max-w-7xl mx-auto text-center space-y-16">
        
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-[10px] font-bold uppercase tracking-[0.45em] transition-colors ${
            isDark ? 'text-slate-500' : 'text-slate-400'
          }`}
        >
          Our Core Technology Stack
        </motion.h3>

        {/* Technologies Grid */}
        <div className="flex flex-wrap justify-center gap-x-12 lg:gap-x-16 gap-y-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex items-center gap-4 cursor-pointer"
            >
              <div 
                className={`p-4 rounded-2xl border transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-0.5 ${
                  isDark 
                    ? 'bg-white/[0.01] border-white/5 group-hover:border-indigo-500/30 group-hover:bg-indigo-600/5' 
                    : 'bg-white border-slate-200 group-hover:border-indigo-500/30 group-hover:bg-indigo-50'
                }`}
              >
                {tech.icon}
              </div>
              
              <span className={`text-lg font-bold font-headline tracking-tight transition-colors duration-300 group-hover:text-indigo-500 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
