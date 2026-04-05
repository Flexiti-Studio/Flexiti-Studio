'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const logos = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCproLtqV_CoSktr-Rj3WP3ofd3XlKymFExDD5XEX7XeZec_UqfaTLouPwf0YAJbgI8K9Ug8jtZTqAgk5jIbpMFZP9HVP-UbzGA0P1zIMtyQ46KDJuLO7zqXWdcj17KncYq6y5lZo-MxJk7EPt3v1Rh1qZl9DGPB8G0b2ANRLZxusUnNLFdA-u0LcSaiTlCtCfbK_qwuYRIF6aSCq2tma7y03qclHqB0_z3S83ND-lIIzRnVPy2uWzQ2cSTnFcTs9vR9LB-h6x0lqoy',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAo90c1O6ZhHqJVR8aCt2V7uptDWLMbYb5tlYnbsqSE1BI4Aay9eXlOFfaXaNZpKN4TkbGcvLozJ44CrjiWNqTHxbHOsIP4EdhfYf1TgNmsf1uiyiew-9OIG0lW1CXX_4NsQ0rEV26crNs7U3_tArnuFo0wNADicKY_UMMz53fcgfkx-Jh39fmV1h2sNQMbu5fZ8KA2odjQvjIUi-HyaTw5w_x_5nanXcu7YZAnqHVdQsBb2wLgQOoMItj6-EUl7_btVmIpCv-qvXwg',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCdkDuEOtLZEhWByq1upiHt3W502fDcbM1gjkt_SVahS8InT0m_arkO8_icgjN6M0AMe0r9OwUilI7KBdzYjZqpoTqm8KSiRUC4zkEXqm7utBzNuyqY7QghL916ZiSTuwuLqtlBM63zqQHHym4zifX_b8RxzHFysOM1uzZrjZ-jb7JLpvs2VZYNIcQSE6qSC5FiJDm2d9F23N5q3FeDmiHFSoZwJ1-8LcVu7MN4VDWBWBrid6EzesjI1EPYFtZnl1zn5-150nX9QdHZ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBUYJ5MuEwFlFrwRkXiJvWbaPvL5NnEWTa4JDeKEDcxDw2ByOQoTcoAZpkf2tyCYpj866Zxni5pPpZ_Nw6jwGO4GiS-674Be1enrqy6v8z5MLZoILmZifXCWua03SP3YhzZsTbyG8wZy2VxuqYhP534aeUsh4kIxhctUIWi1zawAdU5VKSvnDZJ9dzTGPL_ViBwWHQlu20zYl3q6jyn32ymaHKeKI-Wx09f-SOqd5D28j6oQZ4c-vqGoEQOJ9TB4uy_zTbJKLJTdooS',
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
            isDark ? 'text-white/30' : 'text-black/30'
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
