'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ContactCTA() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section className="py-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`relative rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center overflow-hidden border shadow-2xl ${
            isDark 
              ? 'bg-white/[0.02] border-white/10 shadow-black/40' 
              : 'bg-black/[0.01] border-black/10 shadow-primary/5'
          }`}
        >
          {/* Ambient Glows Inside Banner */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#0052ff15,transparent_70%)]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative font-black text-4xl md:text-6xl tracking-tighter mb-8 max-w-3xl"
          >
            Ready to Build <br />
            <span className="text-primary-light font-black uppercase tracking-[0.1em] text-2xl md:text-3xl block mt-4">Something Extraordinary?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`relative text-lg md:text-2xl max-w-2xl mb-12 font-medium leading-relaxed ${
              isDark ? 'text-white/50' : 'text-black/50'
            }`}
          >
            Join the ranks of successful innovators who chose Flexiti Studio to architect their digital future.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/contact"
              className={`group relative bg-primary ${isDark ? 'text-black' : 'text-white'} px-12 py-6 rounded-full font-black text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 flex items-center gap-4`}
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
