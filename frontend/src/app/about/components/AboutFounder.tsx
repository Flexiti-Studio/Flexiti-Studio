'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Quote } from 'lucide-react'

const tags = ['System Design', 'Fullstack Dev', 'Product Strategy'];

export default function AboutFounder() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <section className={`py-40 ${isDark ? 'bg-black' : 'bg-white'} overflow-hidden relative`}>
            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className={`relative rounded-[4rem] p-12 md:p-24 border backdrop-blur-3xl overflow-hidden ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
                        }`}
                >
                    {/* Technical Background Grid */}
                    <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${isDark ? 'invert' : ''}`} 
                        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
                    />

                    {/* Background Decorative Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="grid md:grid-cols-12 gap-16 items-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="md:col-span-5"
                        >
                            <div className="relative group p-4">
                                {/* Technical Corner Frames */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-light/40 rounded-tl-2xl z-20" />
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary-light/40 rounded-tr-2xl z-20" />
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary-light/40 rounded-bl-2xl z-20" />
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-light/40 rounded-br-2xl z-20" />

                                {/* Moving Data Stream Ornament */}
                                <motion.div 
                                    animate={{ y: [0, 100, 0] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="absolute right-0 top-10 w-[1px] h-20 bg-gradient-to-b from-transparent via-primary-light/50 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity"
                                />

                                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                
                                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl z-10">
                                    <Image
                                        src="/images/about/founder.jpg"
                                        alt="Ola — Founder of Flexiti Studio"
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                                </div>

                                {/* Floating Tech Tag */}
                                <motion.div 
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="absolute -right-6 bottom-10 bg-black/80 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl shadow-2xl z-30 flex items-center gap-3"
                                >
                                    <div className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
                                    <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">Verified Builder</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="md:col-span-7"
                        >
                            <span className="text-primary-light font-black tracking-[0.3em] mb-6 block uppercase text-sm">
                                The Architect
                            </span>
                            <h2 className={`font-black text-5xl md:text-7xl ${isDark ? 'text-white' : 'text-black'} mb-8 tracking-tighter`}>
                                Ola, <span className={`${isDark ? 'text-white/40' : 'text-black/40'} font-medium`}>Founder</span>
                            </h2>
                            <p className={`text-xl md:text-2xl leading-relaxed mb-10 ${isDark ? 'text-white/70' : 'text-black/70'
                                } font-medium tracking-tight`}>
                                A builder focused on creating scalable digital systems that move the needle. With a background in heavy engineering and a passion for minimalist design, Ola founded Flexiti Studio to bridge the gap between complex backend logic and premium user experiences.
                            </p>

                            <div className="flex flex-wrap gap-3 mb-12">
                                {tags.map((tag) => (
                                    <span key={tag} className={`px-6 py-2 rounded-full border backdrop-blur-md text-sm font-bold transition-colors ${isDark
                                            ? 'bg-white/10 border-white/5 text-white/80'
                                            : 'bg-black/5 border-black/10 text-black/60'
                                        }`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="relative group">
                                <Quote className="absolute -top-6 -left-6 w-12 h-12 text-primary-light/10 group-hover:text-primary-light/30 transition-colors duration-500" />
                                <p className="italic text-primary-light text-xl md:text-2xl font-semibold leading-relaxed border-l-4 border-primary-light/30 pl-10 py-4 group-hover:border-primary-light transition-colors duration-500">
                                    &ldquo;Our vision is to empower the next generation of African builders by providing the infrastructure they need to scale globally.&rdquo;
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
