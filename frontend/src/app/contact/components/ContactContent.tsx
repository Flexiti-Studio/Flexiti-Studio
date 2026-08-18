'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import ContactHeroForm from './ContactHeroForm';
import ContactTrust from './ContactTrust';
import ContactCTA from './ContactCTA';

export default function ContactContent() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <main className={`relative min-h-screen pt-32 pb-24 overflow-hidden ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
        {/* Ambient Background Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 max-w-4xl"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className={`inline-block px-4 py-1.5 rounded-full ${
                isDark ? 'bg-white/10 text-primary-light' : 'bg-primary/10 text-primary'
              } text-xs font-bold mb-8 uppercase tracking-[0.2em] backdrop-blur-md border border-white/5 shadow-sm`}
            >
              Start a Conversation & Get a Free Quote
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-black text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-tighter mb-10"
            >
              Get a Free Consultation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary">
                For Your Project.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`text-xl md:text-2xl ${
                isDark ? 'text-white' : 'text-black/60'
              } leading-relaxed max-w-2xl font-medium`}
            >
              Have a visionary custom software, AI automation, or SaaS MVP project in mind? We partner with ambitious founders to engineer world-class digital experiences.
            </motion.p>
          </motion.div>

          {/* Form + Sidebar Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <ContactHeroForm />
          </motion.div>
        </div>
      </main>

      <ContactTrust />
      <ContactCTA />
    </>
  );
}
