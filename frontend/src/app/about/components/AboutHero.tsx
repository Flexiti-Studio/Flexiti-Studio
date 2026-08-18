'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

export default function AboutHero() {
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const defaultHeroPic = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80";
    const [heroImg, setHeroImg] = useState("/images/about/about page 1.png");

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true

    return (
        <section className={`relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#030014]' : 'bg-slate-50'}`}>
            {/* 🌌 Planetary Arch Horizon Glow (Dynamic Theme-Aware) */}
            <div 
                className={`absolute top-[-10%] sm:top-[-20%] md:top-[-30%] left-1/2 -translate-x-1/2 w-[140%] md:w-[100%] aspect-square rounded-full pointer-events-none transition-all duration-1000 ${
                    isDark 
                        ? 'bg-gradient-to-b from-[#2563eb]/40 via-[#3b82f6]/8 to-transparent blur-[80px] md:blur-[140px]' 
                        : 'bg-gradient-to-b from-blue-500/10 via-blue-300/5 to-transparent blur-[60px] md:blur-[100px]'
                }`} 
            />

            {/* Layered Crisp Glow Borders representing the Planetary Arch */}
            <div 
                className={`absolute top-[4%] sm:top-[2%] md:top-[-3%] left-1/2 -translate-x-1/2 w-[110%] md:w-[85%] aspect-square rounded-full border-t-[3px] filter pointer-events-none transition-all duration-1000 ${
                    isDark 
                        ? 'border-[#a78bfa]/40 shadow-[0_-20px_80px_rgba(124,58,237,0.3)] blur-[2px]' 
                        : 'border-indigo-400/20 shadow-[0_-10px_40px_rgba(99,102,241,0.15)] blur-[1px]'
                }`} 
            />

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
                        className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-8 text-slate-900 dark:text-white"
                    >
                        About <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-400 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-300">
                            Flexiti Studio
                        </span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className={`text-lg md:text-xl ${
                            isDark ? 'text-white/60' : 'text-black/60'
                        } leading-relaxed max-w-xl mb-12 font-medium`}
                    >
                        Flexiti Studio is a full-stack Next.js and React Native development agency. From concept to scalable code, we craft high-performance systems that define tomorrow's digital landscape.
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
                                isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' : 'bg-black/5 border-black/10 hover:bg-black/10 text-black'
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
                    className="relative lg:h-[600px] flex items-center"
                >
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-[3rem] blur-3xl opacity-30 animate-pulse" />
                    
                    <div className="relative w-full aspect-square lg:aspect-auto lg:h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 group">
                        <Image
                            src={heroImg}
                            alt="Digital Architecture Visualization"
                            fill
                            onError={() => setHeroImg(defaultHeroPic)}
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            priority
                            sizes="(max-w-768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    </div>


                </motion.div>
            </div>
        </section>
    )
}