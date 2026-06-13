'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

export default function AboutOverview() {
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true

    return (
        <section className={`py-32 ${isDark ? 'bg-[#030014]' : 'bg-white'} overflow-hidden relative transition-colors duration-500`}>
            {/* Ambient Nebula Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[600px] h-[300px] bg-gradient-to-r from-[#7c3aed]/10 to-[#4f46e5]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7c3aed]/30 to-transparent blur-sm" />
            
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
                        className={`font-headline font-black text-4xl md:text-5xl ${isDark ? 'text-white' : 'text-slate-900'} mb-12 tracking-tight`}
                    >
                        Engineering <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-400">The Future</span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className={`text-lg md:text-xl leading-relaxed ${
                            isDark ? 'text-slate-400' : 'text-slate-600'
                        } font-medium tracking-tight`}
                    >
                        Flexiti Studio is a premier tech powerhouse dedicated to building web, mobile, SaaS, and complex digital systems for ambitious startups and established businesses. We operate at the intersection of performance and elegance, ensuring every line of code serves a strategic purpose. Our philosophy is rooted in the belief that technology should be an invisible enabler—powerful, seamless, and infinitely scalable.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}
