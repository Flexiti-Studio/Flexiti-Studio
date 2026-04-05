'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

export default function AboutOverview() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <section className={`py-32 ${isDark ? 'bg-black' : 'bg-white'} overflow-hidden relative`}>
            {/* Structural Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm" />
            
            <div className="max-w-4xl mx-auto px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center"
                >
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`font-black text-5xl md:text-6xl ${isDark ? 'text-white' : 'text-black'} mb-16 tracking-tight`}
                    >
                        Engineering <br />
                        <span className="text-primary-light">The Future</span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className={`text-xl md:text-2xl leading-relaxed ${
                            isDark ? 'text-white/70' : 'text-black/70'
                        } font-medium tracking-tight`}
                    >
                        Flexiti Studio is a premier tech powerhouse dedicated to building web, mobile, SaaS, and complex digital systems for ambitious startups and established businesses. We operate at the intersection of performance and elegance, ensuring every line of code serves a strategic purpose. Our philosophy is rooted in the belief that technology should be an invisible enabler—powerful, seamless, and infinitely scalable.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}
