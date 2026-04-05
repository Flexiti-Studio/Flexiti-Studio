'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Button from '../../../components/navbar/Button';

export default function LandingCTA() {
  return (
    <section className="py-40 relative overflow-hidden bg-slate-900 dark:bg-zinc-950 transition-colors duration-500">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_100%_100%,rgba(99,102,241,0.1),transparent_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-bold text-[10px] tracking-[0.3em] uppercase mb-8 border border-white/20">
            Ready to scale?
          </span>
          <h2 className="font-headline text-5xl md:text-7xl font-black mb-12 leading-[1.1] text-white tracking-tight">
            Let’s Build Your <br /> Next Product
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button
              variant="white"
              href="/contact"
              className="px-12 py-6 rounded-2xl text-xl font-black !bg-white !text-black shadow-2xl shadow-blue-500/20 hover:scale-105 transition-all active:scale-95"
            >
              Start a Project
            </Button>
            
            <Link 
              href="/contact"
              className="px-10 py-5 rounded-2xl font-bold text-lg text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center gap-3 group"
            >
              <span className="material-symbols-outlined text-white/60 group-hover:text-white">calendar_today</span>
              Book a Strategy Call
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating particles or subtle noise could go here */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]" />
    </section>
  );
}
