'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Zap, Target, Palette, Cpu, ArrowUpRight } from 'lucide-react'

const reasons = [
    {
        icon: Cpu,
        title: 'Modern Tech Stack',
        desc: 'We use bleeding-edge technologies (React, Node, Go, AWS) to ensure your product remains relevant and scalable.',
        color: 'text-blue-400'
    },
    {
        icon: Zap,
        title: 'Fast Execution',
        desc: 'Our agile processes and modular components allow us to ship high-quality products in record time.',
        color: 'text-yellow-400'
    },
    {
        icon: Target,
        title: 'Startup Focused',
        desc: "We understand the unique constraints and needs of founders—growth is always the primary metric.",
        color: 'text-purple-400'
    },
    {
        icon: Palette,
        title: 'Design First',
        desc: "Premium UI/UX isn't an afterthought; it's integrated into every feature we architect from the start.",
        color: 'text-pink-400'
    },
];

export default function AboutWhyUs() {
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true

    return (
        <section className={`py-40 ${isDark ? 'bg-[#030014]' : 'bg-slate-50'} relative overflow-hidden transition-colors duration-500`}>
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="grid lg:grid-cols-3 gap-16 items-start">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary-light font-black tracking-[0.3em] mb-6 block uppercase text-sm animate-pulse"
                        >
                            Differentiators
                        </motion.span>
                        <h2 className={`font-headline font-black text-4xl md:text-5xl ${isDark ? 'text-white' : 'text-slate-900'} mb-8 tracking-tighter leading-none`}>
                            Why Choose <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Our Studio?</span>
                        </h2>
                        <p className={`text-lg font-medium leading-relaxed ${
                            isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                            We combine the speed of a startup with the precision of an enterprise engineering team.
                        </p>
                    </motion.div>

                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                        {reasons.map((reason, index) => (
                            <motion.div 
                                key={reason.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`group p-10 rounded-[2.5rem] border backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between min-h-[200px] ${
                                    isDark 
                                        ? 'bg-white/[0.01] border-white/[0.06] hover:bg-white/[0.03] hover:border-white/10 hover:scale-[1.02]' 
                                        : 'bg-white border-slate-200/60 hover:bg-slate-50 hover:border-slate-300 hover:scale-[1.02] shadow-sm'
                                }`}
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-xl transition-all duration-500 ${isDark ? 'bg-white/5' : 'bg-slate-100'} group-hover:scale-110`}>
                                            <reason.icon className={`w-8 h-8 ${reason.color}`} strokeWidth={1.5} />
                                        </div>
                                        <h4 className={`font-headline font-bold text-xl ${isDark ? 'text-white' : 'text-slate-900'} tracking-tight group-hover:text-primary-light transition-colors`}>
                                            {reason.title}
                                        </h4>
                                    </div>
                                    <ArrowUpRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                                        isDark ? 'text-slate-500 group-hover:text-white' : 'text-slate-400 group-hover:text-slate-805 text-slate-800'
                                    }`} />
                                </div>
                                <p className={`text-sm leading-relaxed ${
                                    isDark ? 'text-slate-400' : 'text-slate-600'
                                } font-medium`}>
                                    {reason.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
