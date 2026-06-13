'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const stats = [
    { value: '50+', label: 'Projects Built', color: 'text-purple-400' },
    { value: '12+', label: 'Systems Developed', color: 'text-indigo-400' },
    { value: '30+', label: 'Clients Served', color: 'text-blue-400' },
    { value: '15+', label: 'Tools Created', color: 'text-emerald-400' },
];

export default function AboutStats() {
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true

    return (
        <section className={`py-20 ${isDark ? 'bg-[#030014]' : 'bg-white'} border-y transition-colors duration-500 ${
            isDark ? 'border-white/5' : 'border-slate-200'
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
                            <div className={`font-headline font-black text-5xl md:text-7xl mb-4 tracking-tighter ${stat.color} transition-transform duration-500 group-hover:scale-110`}>
                                {stat.value}
                            </div>
                            <div className={`font-headline font-black text-xs md:text-sm uppercase tracking-[0.3em] ${
                                isDark ? 'text-white/40' : 'text-slate-500'
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
