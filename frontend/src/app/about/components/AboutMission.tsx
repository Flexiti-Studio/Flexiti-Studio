'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Rocket, Eye } from 'lucide-react'

export default function AboutMission() {
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true

    const items = [
        {
            icon: Rocket,
            title: "Our Mission",
            desc: "To build flexible, scalable, and impactful digital solutions that empower businesses to solve complex problems and thrive in a digital-first economy.",
            gradient: "from-[#7c3aed]/20 via-[#4f46e5]/5 to-transparent",
            iconColor: "text-blue-400"
        },
        {
            icon: Eye,
            title: "Our Vision",
            desc: "To become a trusted African-born technology studio recognized globally for setting the gold standard in product engineering and architectural excellence.",
            gradient: "from-[#4f46e5]/20 via-[#7c3aed]/5 to-transparent",
            iconColor: "text-indigo-400"
        }
    ]

    return (
        <section className={`py-40 ${isDark ? 'bg-[#030014]' : 'bg-slate-50'} relative overflow-hidden transition-colors duration-500`}>
            {/* Tech Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`group relative p-12 rounded-[2.5rem] border backdrop-blur-2xl transition-all duration-500 overflow-hidden ${
                                isDark 
                                    ? 'bg-white/[0.01] border-white/[0.06] hover:bg-white/[0.03] hover:border-white/10 hover:scale-[1.02]' 
                                    : 'bg-white border-slate-200/60 hover:bg-slate-50 hover:border-slate-300 hover:scale-[1.02] shadow-sm'
                            }`}
                        >
                            {/* Card Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                            
                            <div className="relative z-10">
                                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                                    isDark ? 'bg-white/5' : 'bg-slate-100'
                                }`}>
                                    <item.icon className={`w-10 h-10 ${item.iconColor}`} strokeWidth={1.5} />
                                </div>
                                
                                <h3 className={`font-headline font-black text-3xl md:text-4xl ${isDark ? 'text-white' : 'text-slate-900'} mb-6 tracking-tight`}>
                                    {item.title}
                                </h3>
                                
                                <p className={`text-lg md:text-xl leading-relaxed ${
                                    isDark ? 'text-slate-400' : 'text-slate-605 text-slate-600'
                                } font-medium tracking-tight`}>
                                    {item.desc}
                                </p>
                            </div>

                            {/* Corner Accent */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.gradient} blur-3xl opacity-20`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
