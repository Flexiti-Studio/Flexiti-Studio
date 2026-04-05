'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Rocket, Eye } from 'lucide-react'

export default function AboutMission() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    const items = [
        {
            icon: Rocket,
            title: "Our Mission",
            desc: "To build flexible, scalable, and impactful digital solutions that empower businesses to solve complex problems and thrive in a digital-first economy.",
            gradient: "from-primary/20 via-primary/5 to-transparent",
            iconColor: "text-primary-light"
        },
        {
            icon: Eye,
            title: "Our Vision",
            desc: "To become a trusted African-born technology studio recognized globally for setting the gold standard in product engineering and architectural excellence.",
            gradient: "from-secondary/20 via-secondary/5 to-transparent",
            iconColor: "text-secondary-light"
        }
    ]

    return (
        <section className={`py-40 ${isDark ? 'bg-black' : 'bg-white'} relative overflow-hidden`}>
            {/* Tech Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`group relative p-12 rounded-[3rem] border backdrop-blur-2xl transition-all duration-500 overflow-hidden ${
                                isDark ? 'bg-white/5 border-white/10 hover:bg-white/[0.08]' : 'bg-black/5 border-black/10 hover:bg-black/[0.08]'
                            }`}
                        >
                            {/* Card Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                            
                            <div className="relative z-10">
                                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                                    isDark ? 'bg-white/10' : 'bg-black/10'
                                }`}>
                                    <item.icon className={`w-10 h-10 ${item.iconColor}`} strokeWidth={1.5} />
                                </div>
                                
                                <h3 className={`font-black text-4xl md:text-5xl ${isDark ? 'text-white' : 'text-black'} mb-6 tracking-tight`}>
                                    {item.title}
                                </h3>
                                
                                <p className={`text-xl md:text-2xl leading-relaxed ${
                                    isDark ? 'text-white/60' : 'text-black/60'
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
