'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Button from '../../../components/navbar/Button';

export default function LandingHero() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-surface dark:bg-black transition-colors duration-500">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div 
          className={`absolute inset-0 pointer-events-none ${isDark ? 'opacity-[0.05]' : 'opacity-[0.02]'}`}
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 95%, ${isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'} 100%),
              linear-gradient(0deg, transparent 95%, ${isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'} 100%)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Ambient Glows */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: isDark ? [0.2, 0.3, 0.2] : [0.05, 0.1, 0.05] }}
          transition={{ duration: 15, repeat: Infinity }}
          className={`absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] ${isDark ? 'bg-blue-600/20' : 'bg-blue-400/10'}`} 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: isDark ? [0.15, 0.25, 0.15] : [0.04, 0.08, 0.04] }}
          transition={{ duration: 18, repeat: Infinity }}
          className={`absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[100px] ${isDark ? 'bg-purple-600/20' : 'bg-purple-400/10'}`} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-[10px] tracking-[0.3em] uppercase mb-8 border border-primary/20 backdrop-blur-sm"
          >
            Digital Architecture Studio
          </motion.span>
          <h1 className="font-headline text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-8">
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Scalable</span> <br />
            Digital Products.
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed max-w-xl mb-10 font-medium">
            Custom web apps, mobile solutions, SaaS platforms, and MVP development for startups and global founders.
          </p>
          <div className="flex flex-wrap gap-5">
            <Button
              variant={isDark ? 'primary' : 'white'}
              href="/contact"
              className={`
                px-10 py-5 rounded-2xl text-lg font-black transition-all active:scale-[0.98]
                ${isDark 
                    ? '!bg-white !text-black shadow-[0_20px_50px_rgba(0,0,0,0.3)]' 
                    : '!bg-slate-900 !text-white shadow-xl shadow-slate-200'}
              `}
            >
              Start a Project
            </Button>
            <Link 
              href="/portfolio"
              className="px-10 py-5 rounded-2xl font-bold text-lg border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-all active:scale-[0.98] flex items-center gap-2"
            >
              View Work
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any, delay: 0.3 }}
          className="relative"
        >
          {/* Main Mockup Container with Clipping */}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] dark:shadow-[0_40px_100px_-20px_rgba(0,0,255,0.15)] bg-slate-100 dark:bg-white/5 p-3 backdrop-blur-3xl border border-white/20">
            <Image 
              alt="Dashboard Mockup" 
              width={1920}
              height={1080}
              className="rounded-[2rem] w-full object-cover shadow-2xl" 
              src="/images/hero-mockup.png"
            />
          </div>
          
          {/* Interactive Floaties - MOVED OUTSIDE OVERFLOW HIDDEN */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute -bottom-6 -left-6 glass shadow-2xl p-6 rounded-[1.5rem] hidden md:block border ${isDark ? 'bg-black/60 border-white/10' : 'bg-white/80 border-slate-200'}`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-500">
                <span className="material-symbols-outlined font-black">trending_up</span>
              </div>
              <div>
                <div className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-slate-400'}`}>Active Growth</div>
                <div className={`text-xl font-black ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>+128%</div>
              </div>
            </div>
            <div className={`h-2 w-48 rounded-full overflow-hidden ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '75%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1 }}
                className="h-full bg-blue-500" 
              />
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className={`absolute top-10 -right-8 glass shadow-2xl p-5 rounded-[1.5rem] hidden md:block border ${isDark ? 'bg-black/60 border-white/10' : 'bg-white/80 border-slate-200'}`}
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className={`text-xs font-bold ${isDark ? 'text-white/60' : 'text-slate-500'}`}>+42 Active Users</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
