'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const heroImages = [
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
];

export default function MemesHero() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <section className={`relative overflow-hidden rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-16 border transition-colors duration-500 ${isDark ? 'bg-zinc-900/40 border-white/10' : 'bg-slate-50 border-slate-200 shadow-xl shadow-slate-200/50'}`}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className={`absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] ${isDark ? 'bg-blue-600/30' : 'bg-blue-400/20'}`} />
        <div className={`absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full blur-[100px] ${isDark ? 'bg-indigo-600/20' : 'bg-indigo-400/10'}`} />
      </div>

      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl"
      >
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 backdrop-blur-md ${isDark ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-blue-50 text-blue-600 border-blue-200'}`}
        >
          <span className="material-symbols-outlined text-[18px] font-light">auto_awesome</span>
          <span className="text-[10px] font-black tracking-[0.2em] uppercase">Premium Asset Library</span>
        </motion.div>

        <h1 className={`text-5xl md:text-7xl font-black font-headline leading-[1.05] tracking-tight mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">High-Fidelity</span> <br />
          Meme Templates.
        </h1>

        <p className={`text-xl leading-relaxed mb-12 font-medium max-w-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          The curated collection of viral templates and high-quality reaction clips for professional digital creators.
        </p>

        <div className="flex flex-wrap gap-5">
          <button onClick={() => document.getElementById('memes-library')?.scrollIntoView({ behavior: 'smooth' })} className={`px-10 py-5 rounded-2xl font-black text-sm tracking-widest uppercase transition-all shadow-2xl active:scale-95 ${isDark ? 'bg-white text-black shadow-white/10 hover:bg-slate-100' : 'bg-slate-900 text-white shadow-slate-900/20 hover:bg-black'}`}>
            Explore Library
          </button>
          <button className={`px-10 py-5 rounded-2xl font-black text-sm tracking-widest uppercase border transition-all active:scale-95 backdrop-blur-sm ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-slate-200 text-slate-900 hover:bg-slate-100'}`}>
            Suggest Assets
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative z-10 w-full lg:w-[450px]"
      >
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-5">
            <motion.div whileHover={{ y: -10, rotate: -2 }} className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <img className="w-full h-full object-cover" src={heroImages[0]} alt="Meme 1" />
            </motion.div>
            <motion.div whileHover={{ y: -10, rotate: 2 }} className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <img className="w-full h-full object-cover" src={heroImages[1]} alt="Meme 2" />
            </motion.div>
          </div>
          <div className="space-y-5 pt-12">
            <motion.div whileHover={{ y: -10, rotate: 4 }} className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <img className="w-full h-full object-cover" src={heroImages[2]} alt="Meme 3" />
            </motion.div>
            <motion.div whileHover={{ y: -10, rotate: -3 }} className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <img className="w-full h-full object-cover" src={heroImages[3]} alt="Meme 4" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
