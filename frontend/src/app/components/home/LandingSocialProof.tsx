'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function LandingSocialProof() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-zinc-900/30 transition-colors duration-500 border-y border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[10px] font-black text-slate-400 dark:text-white/30 uppercase tracking-[0.4em] mb-12"
        >
          Trusted by startups and growing businesses
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
        >
          {['Qefas', 'Selfpaced-Tracker', 'School Hub', 'NicxBlog', 'Rotary'].map((brand) => (
            <span key={brand} className="font-headline text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
