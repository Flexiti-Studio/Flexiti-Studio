'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function MemesCTA() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <section className={`relative overflow-hidden rounded-[3rem] p-10 md:p-20 border transition-all duration-500 mb-20 ${isDark ? 'bg-zinc-900 border-white/5 shadow-2xl shadow-black/40' : 'bg-slate-900 border-transparent shadow-2xl shadow-slate-900/20'}`}>
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 p-12 opacity-20 group">
        <motion.span 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="material-symbols-outlined text-[140px] text-blue-500 font-light"
        >
          auto_awesome_motion
        </motion.span>
      </div>

      <div className="max-w-3xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-4xl md:text-5xl font-black font-headline text-white leading-[1.1]">
            Elevate your creative <br /> reach further.
          </h3>
          <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            Free Meme Videos is just the beginning. Discover our full suite of AI-driven creative tools and premium asset managers built for the next generation of professional teams.
          </p>
          <div className="flex pt-4">
            <Link href="/" className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl transition-all hover:bg-slate-100 hover:scale-[1.02] active:scale-95">
              Explore Flexiti Studio 
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Subtle Bottom Glow */}
      <div className={`absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full blur-[120px] ${isDark ? 'bg-blue-600/10' : 'bg-blue-500/10'}`} />
    </section>
  );
}
