'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const stats = [
  { label: "Projects Completed", value: "100+" },
  { label: "Clients Served", value: "50+" },
  { label: "Systems Built", value: "500+" },
  { label: "Uptime", value: "99.9%" }
];

export default function LandingStats() {
  return (
    <section className="py-32 bg-surface dark:bg-black transition-colors duration-500 border-b border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="text-5xl md:text-6xl font-black text-blue-600 dark:text-blue-400 mb-4 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-slate-500 dark:text-slate-400 font-black text-[10px] uppercase tracking-[0.3em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
