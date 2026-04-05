'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

export default function AboutHero() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <section className={`relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`inline-block px-4 py-1.5 rounded-full ${
                            isDark ? 'bg-white/10 text-primary-light' : 'bg-primary/5 text-primary'
                        } text-xs font-bold mb-8 uppercase tracking-[0.2em] backdrop-blur-md border border-white/5`}
                    >
                        The Digital Architect
                    </motion.span>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="font-black text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-tighter mb-8"
                    >
                        About <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary">
                            Flexiti Studio
                        </span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className={`text-xl md:text-2xl ${
                            isDark ? 'text-white/60' : 'text-black/60'
                        } leading-relaxed max-w-xl mb-12 font-medium`}
                    >
                        We build flexible, scalable, and impactful digital solutions for modern businesses. From concept to code, we craft the systems that define tomorrow.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-wrap gap-6"
                    >
                        <Link 
                            href="/contact"
                            className={`group relative px-10 py-5 rounded-[2rem] font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl ${
                                isDark 
                                    ? 'bg-primary-light text-black shadow-primary-light/20' 
                                    : 'bg-primary text-white shadow-primary/20'
                            }`}
                        >
                            <span className="relative z-10">Start a Project</span>
                            <div className={`absolute inset-0 bg-gradient-to-r ${
                                isDark ? 'from-white/0 via-white/40 to-white/0' : 'from-white/0 via-white/20 to-white/0'
                            } -translate-x-full group-hover:translate-x-full transition-transform duration-1000`} />
                        </Link>
                        <Link 
                            href="/portfolio"
                            className={`group px-10 py-5 rounded-[2rem] font-bold text-lg backdrop-blur-xl border transition-all hover:scale-105 active:scale-95 ${
                                isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-black/5 border-black/10 hover:bg-black/10'
                            }`}
                        >
                            View Our Work
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative lg:h-[700px] flex items-center"
                >
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-[3rem] blur-3xl opacity-30 animate-pulse" />
                    
                    <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 group">
                        <Image
                            src="/images/about/hero-tech.png"
                            alt="Digital Architecture Visualization"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            priority
                            sizes="(max-w-768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    </div>

                    {/* Floating Badge */}
                    <motion.div 
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-10 -left-10 hidden lg:block bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl z-20"
                    >
                        <div className="text-primary-light font-black text-4xl mb-1">Africa Born</div>
                        <div className="text-white/60 font-bold uppercase tracking-widest text-sm text-center">Global Impact</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}