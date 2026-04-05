'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Globe, Smartphone, Cloud, Zap, Cpu, Layers } from 'lucide-react'

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
        color: 'text-purple-400',
        bg: 'bg-purple-500/10'
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
        color: 'text-primary-light',
        bg: 'bg-primary/10'
    },
]

export default function AboutCapabilities() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <section className={`py-32 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-8">
                <div className="mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary-light font-bold tracking-[0.3em] uppercase text-sm mb-6 block"
                    >
                        Core Capabilities
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`font-black text-5xl md:text-7xl ${isDark ? 'text-white' : 'text-black'} tracking-tighter`}
                    >
                        Architecting <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Solutions</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((cap, index) => (
                        <motion.div 
                            key={cap.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group p-10 rounded-[2.5rem] border backdrop-blur-xl transition-all duration-500 ${
                                isDark ? 'bg-white/5 border-white/10 hover:bg-white/[0.08]' : 'bg-black/5 border-black/10 hover:bg-black/[0.08]'
                            }`}
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${cap.bg}`}>
                                <cap.icon className={`w-8 h-8 ${cap.color}`} strokeWidth={1.5} />
                            </div>
                             <h4 className={`font-bold text-2xl ${isDark ? 'text-white' : 'text-black'} mb-4 tracking-tight group-hover:text-primary-light transition-colors`}>
                                 {cap.title}
                             </h4>
                            <p className={`leading-relaxed ${
                                isDark ? 'text-white/50' : 'text-black/50'
                            } font-medium`}>
                                {cap.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
