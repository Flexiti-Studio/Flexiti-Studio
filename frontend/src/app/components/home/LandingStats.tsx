'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const stats = [
  { label: "Projects Delivered", value: "25+" },
  { label: "Founders & Clients", value: "20+" },
  { label: "Avg MVP Launch Time", value: "4 Wks" },
  { label: "Production Uptime", value: "99.9%" }
];

export default function LandingStats() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <section className="py-16 px-4 md:px-8 bg-slate-50 dark:bg-[#030014] transition-colors duration-500">
      <div 
        className={`max-w-6xl mx-auto rounded-[2rem] p-10 md:p-12 border backdrop-blur-xl transition-all duration-700 ${
          isDark 
            ? 'bg-white/[0.01] border-white/[0.06] shadow-xl' 
            : 'bg-white border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.01)]'
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              className={`flex flex-col justify-center items-center ${
                idx >= 2 ? 'pt-8 md:pt-0' : 'pt-0'
              } ${
                idx === 1 ? 'pt-8 sm:pt-0' : ''
              }`}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-400">
                {stat.value}
              </div>
              
              <div className={`font-bold text-[10px] uppercase tracking-[0.25em] transition-colors ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
