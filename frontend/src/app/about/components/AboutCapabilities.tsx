'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Globe, Smartphone, Cloud, Zap, Cpu, Layers, ArrowUpRight } from 'lucide-react'

const capabilities = [
    { 
        icon: Globe, 
        title: 'Web App Dev', 
        desc: 'Modern, responsive, and blazing-fast web applications built with the latest frameworks.',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10'
    },
    { 
        icon: Smartphone, 
        title: 'Mobile App Dev', 
        desc: 'Native and cross-platform mobile experiences that users love to interact with daily.',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10'
    },
    { 
        icon: Cloud, 
        title: 'SaaS Platforms', 
        desc: 'Multi-tenant, scalable software-as-a-service architectures built for high volume.',
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10'
    },
    { 
        icon: Zap, 
        title: 'MVP Dev', 
        desc: 'Rapid prototyping and development to get your product to market and validated fast.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-500/10'
    },
    { 
        icon: Cpu, 
        title: 'AI & Automation', 
        desc: 'Integrating intelligent workflows and machine learning to optimize your operations.',
        color: 'text-green-400',
        bg: 'bg-green-500/10'
    },
    { 
        icon: Layers, 
        title: 'System Design', 
        desc: 'High-level consulting on tech stacks, database design, and cloud infrastructure.',
        color: 'text-indigo-400',
        bg: 'bg-indigo-500/10',
        isFeatured: true
    },
]

export default function AboutCapabilities() {
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true

    return (
        <section className={`py-32 ${isDark ? 'bg-[#030014]' : 'bg-slate-50'} transition-colors duration-500`}>
            <div className="max-w-7xl mx-auto px-8">
                <div className="mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary-light font-bold tracking-[0.3em] uppercase text-sm mb-6 block animate-pulse"
                    >
                        Core Capabilities
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`font-headline font-black text-4xl md:text-6xl ${isDark ? 'text-white' : 'text-slate-900'} tracking-tighter`}
                    >
                        Architecting <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Solutions</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((cap, index) => {
                        const isFeatured = cap.isFeatured;
                        return (
                            <motion.div 
                                key={cap.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`group relative p-10 rounded-[2.5rem] border backdrop-blur-xl transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[300px] ${
                                    isFeatured
                                        ? isDark
                                            ? 'bg-gradient-to-br from-blue-600 to-indigo-700 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.25)] hover:scale-[1.03] text-white'
                                            : 'bg-gradient-to-br from-blue-500 to-indigo-600 border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:scale-[1.03] text-white'
                                        : isDark 
                                            ? 'bg-white/[0.01] border-white/[0.06] hover:bg-white/[0.03] hover:border-white/10 hover:scale-[1.02] text-slate-100' 
                                            : 'bg-white border-slate-200/60 hover:bg-slate-50 hover:border-slate-300 hover:scale-[1.02] shadow-sm text-slate-800'
                                }`}
                            >
                                {/* Glow hover state for standard glass cards */}
                                {!isFeatured && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#4f46e5]/5 to-[#7c3aed]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                )}

                                {/* Card Header (Icon + UpRight Arrow) */}
                                <div className="flex items-center justify-between">
                                    <div className={`p-4 rounded-2xl transition-all duration-500 ${
                                        isFeatured 
                                            ? 'bg-white/15 text-white' 
                                            : isDark ? 'bg-white/5 text-indigo-400' : 'bg-slate-100 text-indigo-600'
                                    }`}>
                                        <cap.icon className="w-8 h-8" strokeWidth={1.5} />
                                    </div>
                                    <ArrowUpRight className={`w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                                        isFeatured ? 'text-white' : isDark ? 'text-slate-500 group-hover:text-white' : 'text-slate-400 group-hover:text-slate-800'
                                    }`} />
                                </div>

                                {/* Content block */}
                                <div className="mt-8 space-y-3">
                                    <h4 className={`font-headline font-bold text-2xl tracking-tight transition-colors ${
                                        isFeatured 
                                            ? 'text-white' 
                                            : isDark ? 'text-white group-hover:text-primary-light' : 'text-slate-900 group-hover:text-primary'
                                    }`}>
                                        {cap.title}
                                    </h4>
                                    <p className={`leading-relaxed text-sm font-medium ${
                                        isFeatured 
                                            ? 'text-indigo-100' 
                                            : isDark ? 'text-slate-400' : 'text-slate-600'
                                    }`}>
                                        {cap.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
