'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const features = [
  { title: "Scalable Systems", description: "Code that grows with your user base.", icon: "layers" },
  { title: "Modern Tech Stack", description: "Using the latest industry-standard frameworks.", icon: "bolt" },
  { title: "Clean Architecture", description: "Maintainable code for long-term health.", icon: "architecture" }
];

export default function LandingAbout() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <section className="py-32 bg-slate-50 dark:bg-zinc-900/10 transition-colors duration-500 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[2.5rem] overflow-hidden h-[550px] shadow-2xl relative border border-slate-200 dark:border-white/10"
        >
          <img 
            alt="Team Collaboration" 
            className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCylo7xjcBakczlNSBj5DqaYriS58VSiSFUJvkc7ji4-DngqOJvoUGdEuJ9MENA2ix6M85UtTeN5grXQ57x80fL4JEEx3a1nGYfZMFswruT1ULZTGrzC9dynSZNOHsdGCW75Z6FRg89TpvRmEcbnwpISb_Cv3fHcW_UbGaRo9KVuPSXtoqBilWIps8rrF759yLWPUnsLm6GXAXK7e4OW6HPbeOF29ijS6aj36AVnUwVSOK-NItqMnnAsZTG9fto--becXxdjYCNHKQY" 
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className={`absolute bottom-8 right-8 p-8 rounded-[2.5rem] shadow-2xl backdrop-blur-3xl max-w-[280px] border border-white/20 ${isDark ? 'bg-black/60' : 'bg-white/80'}`}
          >
            <p className={`font-black text-lg mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>African-born, <br /> Global reach.</p>
            <p className={`text-sm font-medium leading-relaxed ${isDark ? 'text-white/60' : 'text-slate-600'}`}>We build with the grit of local challenges and the standards of Silicon Valley.</p>
          </motion.div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-[0.3em] uppercase mb-8 border border-blue-500/20">
            Our Mission
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-black mb-8 text-slate-900 dark:text-white leading-tight">
            Engineering Impact <br /> Through Technology
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed mb-10 font-medium">
             Flexiti Studio builds flexible, scalable, and impactful digital solutions for businesses and founders. We aren&apos;t just developers; we are partners in your growth journey.
          </p>
          
          <div className="grid gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-5 group"
              >
                <div className={`
                  mt-1 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 flex-shrink-0
                  ${isDark ? 'bg-white/5 text-blue-400 border border-white/10 group-hover:bg-blue-600 group-hover:text-white' : 'bg-slate-100 text-blue-600 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white'}
                `}>
                  <span className="material-symbols-outlined font-light text-2xl">{feature.icon}</span>
                </div>
                <div>
                  <h4 className="font-black text-lg mb-1 text-slate-900 dark:text-white">{feature.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
