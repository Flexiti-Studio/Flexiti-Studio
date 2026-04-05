'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { ArrowRight } from 'lucide-react'

export default function AboutCTA() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <section className={`py-40 px-8 ${isDark ? 'bg-black' : 'bg-white'} relative overflow-hidden`}>
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className={`relative rounded-[4rem] p-16 md:p-32 text-center overflow-hidden border backdrop-blur-3xl ${
                        isDark ? 'bg-white/5 border-white/10' : 'bg-black/90 border-black/10'
                    }`}
                >
                    {/* Immersive Background Glows */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="font-black text-5xl md:text-[5.5rem] leading-[0.9] text-white mb-12 tracking-tighter"
                        >
                            Let&apos;s Build Something <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary">
                                Great Together
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-white/60 mb-16 font-medium tracking-tight"
                        >
                            Ready to transform your vision into a world-class digital product? <br className="hidden md:block" />
                            Our team is standing by to architect your next success story.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap justify-center gap-8"
                        >
                            <Link 
                                href="/contact"
                                className="group relative bg-primary text-white px-12 py-6 rounded-[2.5rem] font-bold text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/20"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Start a Project <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            </Link>

                            <Link 
                                href="/portfolio"
                                className="group relative bg-white/5 border border-white/10 text-white px-12 py-6 rounded-[2.5rem] font-bold text-xl backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/10 active:scale-95"
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
