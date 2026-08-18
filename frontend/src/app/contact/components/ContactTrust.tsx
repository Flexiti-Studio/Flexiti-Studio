'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const logos = [
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
];

export default function ContactTrust() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section className={`py-32 ${isDark ? 'bg-black' : 'bg-gray-50/50'}`}>
      <div className="max-w-7xl mx-auto px-8">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center font-bold text-xs uppercase tracking-[0.3em] mb-20 ${
            isDark ? 'text-white' : 'text-black/30'
          }`}
        >
          Engineering the Future for Global Innovators
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
          {logos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, filter: 'grayscale(100%)' }}
              whileInView={{ opacity: 0.5, filter: 'grayscale(100%)' }}
              whileHover={{ opacity: 1, filter: 'grayscale(0%)', scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative cursor-pointer transition-all"
            >
              <img alt="Partner Logo" className="h-10 md:h-12 object-contain" src={src} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
