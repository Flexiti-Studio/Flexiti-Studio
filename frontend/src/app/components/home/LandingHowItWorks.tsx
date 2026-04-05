'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const steps = [
  {
    title: "Idea / Consultation",
    description: "Defining your vision and market fit.",
    icon: "lightbulb",
  },
  {
    title: "Design & Planning",
    description: "High-fidelity UI/UX and system architecture.",
    icon: "draw",
  },
  {
    title: "Development",
    description: "Agile building with weekly updates.",
    icon: "code",
  },
  {
    title: "Launch & Scale",
    description: "Global deployment and ongoing support.",
    icon: "auto_awesome",
  }
];

export default function LandingHowItWorks() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <section className="py-32 bg-slate-50 dark:bg-zinc-900/10 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-[0.3em] uppercase mb-6 border border-blue-500/20">
            Our Process
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">
            A Proven Path to Launch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
            Transparency at every stage of the build.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative z-10 text-center group"
            >
              <div className={`
                w-24 h-24 rounded-[2rem] shadow-xl flex items-center justify-center mx-auto mb-8 transition-all duration-500
                ${isDark ? 'bg-white/5 text-white group-hover:bg-blue-600 border border-white/10' : 'bg-white text-slate-900 group-hover:bg-slate-900 group-hover:text-white border border-slate-100'}
              `}>
                <span className="material-symbols-outlined text-4xl font-light">{step.icon}</span>
              </div>
              <h4 className="font-black text-lg mb-3 text-slate-900 dark:text-white">{step.title}</h4>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed px-4">{step.description}</p>
            </motion.div>
          ))}
          
          {/* Connecting Line (Desktop Only) */}
          <div className={`absolute top-12 left-[12%] right-[12%] h-[1px] ${isDark ? 'bg-white/5' : 'bg-slate-200'} hidden md:block -z-0`}>
             <motion.div 
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="h-full bg-blue-500 origin-left opacity-30" 
             />
          </div>
        </div>
      </div>
    </section>
  );
}
