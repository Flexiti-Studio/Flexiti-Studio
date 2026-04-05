'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Zap, Target, Palette, Cpu } from 'lucide-react'

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
        color: 'text-primary-light'
    },
    {
        icon: Palette,
        title: 'Design First',
        desc: "Premium UI/UX isn't an afterthought; it's integrated into every feature we architect from the start.",
        color: 'text-secondary-light'
    },
];

export default function AboutWhyUs() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <section className={`py-40 ${isDark ? 'bg-black' : 'bg-white'} relative overflow-hidden`}>
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

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
                            className="text-primary-light font-black tracking-[0.3em] mb-6 block uppercase text-sm"
                        >
                            Differentiators
                        </motion.span>
                        <h2 className={`font-black text-5xl md:text-7xl ${isDark ? 'text-white' : 'text-black'} mb-8 tracking-tighter leading-none`}>
                            Why Choose <br />
                            <span className="text-primary-light">Our Studio?</span>
                        </h2>
                        <p className={`text-xl font-medium leading-relaxed ${
                            isDark ? 'text-white/50' : 'text-black/50'
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
                                className={`group p-10 rounded-[3rem] border backdrop-blur-2xl transition-all duration-500 hover:scale-[1.02] ${
                                    isDark ? 'bg-white/5 border-white/10 hover:bg-white/[0.08]' : 'bg-black/5 border-black/10 hover:bg-black/[0.08]'
                                }`}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-3 rounded-xl ${isDark ? 'bg-white/5' : 'bg-black/5'} group-hover:scale-110 transition-transform`}>
                                        <reason.icon className={`w-8 h-8 ${reason.color}`} strokeWidth={1.5} />
                                    </div>
                                    <h4 className={`font-bold text-2xl ${isDark ? 'text-white' : 'text-black'} tracking-tight group-hover:text-primary-light transition-colors`}>
                                        {reason.title}
                                    </h4>
                                </div>
                                <p className={`text-lg leading-relaxed ${
                                    isDark ? 'text-white/50' : 'text-black/50'
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
