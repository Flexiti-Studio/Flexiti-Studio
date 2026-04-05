'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Terminal, GraduationCap } from 'lucide-react'

export default function AboutEcosystem() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <section className={`py-40 ${isDark ? 'bg-black' : 'bg-white'} overflow-hidden relative`}>
            {/* Ambient Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="text-center mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`font-black text-5xl md:text-7xl ${isDark ? 'text-white' : 'text-black'} mb-6 tracking-tighter`}
                    >
                        Our <span className="text-primary-light">Ecosystem</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className={`text-xl font-medium ${isDark ? 'text-white/50' : 'text-black/50'}`}
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
                        className={`relative z-20 px-12 py-8 rounded-[2.5rem] border backdrop-blur-2xl shadow-2xl ${
                            isDark ? 'bg-white/10 border-white/20' : 'bg-black/80 border-white/10'
                        }`}
                    >
                        <span className={`font-black text-2xl md:text-3xl ${isDark ? 'text-white' : 'text-black'} tracking-tight`}>
                             Flexiti Studio Tech Limited
                         </span>
                        
                        {/* Connecting Line - Trunk */}
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute -bottom-20 left-1/2 w-[2px] bg-gradient-to-b from-primary to-secondary/30 origin-top" 
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
                            className="absolute top-12 left-1/4 right-1/4 h-[2px] bg-secondary/30 hidden md:block" 
                        />

                        {/* Child 1: Studio */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className={`group relative p-10 rounded-[3rem] border backdrop-blur-xl transition-all duration-500 overflow-hidden ${
                                isDark ? 'bg-white/5 border-white/10 hover:bg-white/[0.08]' : 'bg-black/5 border-black/10 hover:bg-black/[0.08]'
                            }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            <div className="relative z-10 text-center flex flex-col items-center">
                                <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-primary/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <Terminal className="text-primary-light w-10 h-10" strokeWidth={1.5} />
                                </div>
                                 <h3 className={`font-black text-3xl ${isDark ? 'text-white' : 'text-black'} mb-4 tracking-tight`}>Flexiti Studio</h3>
                                <p className={`text-lg font-medium leading-relaxed ${isDark ? 'text-white/50' : 'text-black/50'}`}>
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
                                isDark ? 'bg-white/5 border-white/10 hover:bg-white/[0.08]' : 'bg-black/5 border-black/10 hover:bg-black/[0.08]'
                            }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10 text-center flex flex-col items-center">
                                <div className="w-20 h-20 bg-secondary/20 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-secondary/10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                    <GraduationCap className="text-secondary-light w-10 h-10" strokeWidth={1.5} />
                                </div>
                                 <h3 className={`font-black text-3xl ${isDark ? 'text-white' : 'text-black'} mb-4 tracking-tight`}>Flex Academe</h3>
                                <p className={`text-lg font-medium leading-relaxed ${isDark ? 'text-white/50' : 'text-black/50'}`}>
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
