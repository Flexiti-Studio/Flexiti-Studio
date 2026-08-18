'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Terminal, GraduationCap } from 'lucide-react'

export default function AboutEcosystem() {
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true

    return (
        <section className={`py-40 ${isDark ? 'bg-[#030014]' : 'bg-white'} overflow-hidden relative transition-colors duration-500`}>
            {/* Ambient Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="text-center mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`font-headline font-black text-4xl md:text-5xl ${isDark ? 'text-white' : 'text-slate-900'} mb-6 tracking-tight`}
                    >
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Ecosystem</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className={`text-lg font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
                    >
                        The pillars of our technological impact and expansion.
                    </motion.p>
                </div>

                <div className="relative flex flex-col items-center">
                    {/* Parent Node */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`relative z-20 px-12 py-8 rounded-[2.5rem] border backdrop-blur-2xl shadow-xl transition-all duration-500 ${
                            isDark 
                                ? 'bg-white/[0.02] border-white/[0.08] text-white shadow-black/40' 
                                : 'bg-slate-100 border-slate-200 text-slate-800 shadow-slate-200/50'
                        }`}
                    >
                        <span className="font-headline font-black text-2xl md:text-3xl tracking-tight">
                             Flexiti Studio Tech Limited
                        </span>
                        
                        {/* Connecting Line - Trunk */}
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute -bottom-20 left-1/2 w-[2px] bg-gradient-to-b from-blue-500 to-indigo-500 origin-top" 
                        />
                    </motion.div>

                    {/* Children Container */}
                    <div className="grid md:grid-cols-2 gap-12 md:gap-32 w-full pt-32 relative">
                        {/* Connecting Horizontal Line */}
                        <motion.div 
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1 }}
                            className="absolute top-12 left-1/4 right-1/4 h-[2px] bg-indigo-500/30 hidden md:block" 
                        />

                        {/* Child 1: Studio */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className={`group relative p-10 rounded-[3rem] border backdrop-blur-xl transition-all duration-500 overflow-hidden ${
                                isDark 
                                    ? 'bg-white/[0.01] border-white/[0.06] hover:bg-white/[0.03] hover:border-white/10 hover:scale-[1.02]' 
                                    : 'bg-white border-slate-200/60 hover:bg-slate-50 hover:border-slate-300 hover:scale-[1.02] shadow-sm'
                            }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            
                            <div className="relative z-10 text-center flex flex-col items-center">
                                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                                    isDark ? 'bg-white/5 shadow-black/20' : 'bg-slate-100 shadow-slate-200/20'
                                }`}>
                                    <Terminal className="text-blue-400 w-10 h-10" strokeWidth={1.5} />
                                </div>
                                <h3 className={`font-headline font-black text-2xl md:text-3xl ${isDark ? 'text-white' : 'text-slate-900'} mb-4 tracking-tight`}>
                                    Flexiti Studio
                                </h3>
                                <p className={`text-base font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                    Bespoke product development and engineering for startups and global enterprises.
                                </p>
                            </div>
                        </motion.div>

                        {/* Child 2: Academe */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                            className={`group relative p-10 rounded-[3rem] border backdrop-blur-xl transition-all duration-500 overflow-hidden ${
                                isDark 
                                    ? 'bg-white/[0.01] border-white/[0.06] hover:bg-white/[0.03] hover:border-white/10 hover:scale-[1.02]' 
                                    : 'bg-white border-slate-200/60 hover:bg-slate-50 hover:border-slate-300 hover:scale-[1.02] shadow-sm'
                            }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10 text-center flex flex-col items-center">
                                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 ${
                                    isDark ? 'bg-white/5 shadow-black/20' : 'bg-slate-100 shadow-slate-200/20'
                                }`}>
                                    <GraduationCap className="text-indigo-400 w-10 h-10" strokeWidth={1.5} />
                                </div>
                                <h3 className={`font-headline font-black text-2xl md:text-3xl ${isDark ? 'text-white' : 'text-slate-900'} mb-4 tracking-tight`}>
                                    Flex Academe
                                </h3>
                                <p className={`text-base font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                    Our educational arm dedicated to mentoring and training the next wave of tech talent.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

