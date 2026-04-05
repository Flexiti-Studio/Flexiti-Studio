'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const stats = [
    { value: '50+', label: 'Projects Built', color: 'text-primary-light' },
    { value: '12+', label: 'Systems Developed', color: 'text-secondary-light' },
    { value: '30+', label: 'Clients Served', color: 'text-blue-400' },
    { value: '15+', label: 'Tools Created', color: 'text-green-400' },
];

export default function AboutStats() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <section className={`py-20 ${isDark ? 'bg-black' : 'bg-white'} border-y ${
            isDark ? 'border-white/5' : 'border-black/5'
        }`}>
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className={`font-black text-5xl md:text-7xl mb-4 tracking-tighter ${stat.color} transition-transform duration-500 group-hover:scale-110`}>
                                {stat.value}
                            </div>
                            <div className={`font-black text-xs md:text-sm uppercase tracking-[0.3em] ${
                                isDark ? 'text-white/40' : 'text-black/40'
                            } group-hover:text-primary transition-colors duration-500`}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
