'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { ArrowRight } from 'lucide-react'

export default function AboutCTA() {
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true

    return (
        <section className={`py-40 px-8 ${isDark ? 'bg-[#030014]' : 'bg-white'} relative overflow-hidden transition-colors duration-500`}>
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className={`relative rounded-[4.5rem] p-12 md:p-28 text-center overflow-hidden border backdrop-blur-3xl ${
                        isDark 
                            ? 'bg-white/[0.01] border-white/[0.06] text-white' 
                            : 'bg-slate-950 border-slate-800 text-white shadow-xl shadow-slate-200/50'
                    }`}
                >
                    {/* Immersive Background Glows */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7c3aed]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4f46e5]/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="font-headline font-black text-4xl md:text-6xl text-white mb-10 tracking-tight leading-tight"
                        >
                            Let&apos;s Build Something <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300">
                                Great Together
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-slate-300 mb-14 font-medium tracking-tight"
                        >
                            Ready to transform your vision into a world-class digital product? <br className="hidden md:block" />
                            Our team is standing by to architect your next success story.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <Link 
                                href="/contact"
                                className={`group relative px-10 py-5 rounded-[2rem] font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl ${
                                    isDark
                                        ? 'bg-primary-light text-black shadow-primary-light/10'
                                        : 'bg-primary text-white shadow-primary/20'
                                }`}
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Start a Project <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </Link>

                            <Link 
                                href="/portfolio"
                                className="group relative bg-white/5 border border-white/10 text-white px-10 py-5 rounded-[2rem] font-bold text-lg backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/10 active:scale-95"
                            >
                                <span className="relative z-10">Our Portfolio</span>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

