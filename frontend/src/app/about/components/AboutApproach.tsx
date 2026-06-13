'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Cpu } from 'lucide-react'

const steps = [
    {
        num: '01',
        title: 'Problem-First Thinking',
        desc: "We don't just build; we solve. Every project starts with identifying the core business challenge.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        num: '02',
        title: 'Scalable Architecture',
        desc: 'Our systems are designed to handle 10x growth from day one without breaking a sweat.',
        color: "from-indigo-500 to-purple-600"
    },
    {
        num: '03',
        title: 'Performance-Focused',
        desc: 'Clean code and optimized assets ensure your users never have to wait for a loading screen.',
        color: "from-pink-500 to-purple-500"
    },
]

export default function AboutApproach() {
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true

    return (
        <section className={`py-40 ${isDark ? 'bg-[#030014]' : 'bg-white'} overflow-hidden transition-colors duration-500`}>
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`font-headline font-black text-4xl md:text-5xl ${isDark ? 'text-white' : 'text-slate-900'} mb-16 tracking-tight`}
                        >
                            The Flexiti <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Approach</span>
                        </motion.h2>

                        <div className="space-y-10">
                            {steps.map((step, index) => (
                                <motion.div 
                                    key={step.num} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="flex gap-8 group"
                                >
                                    <div className={`shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-[1px] shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
                                        <div className="w-full h-full rounded-[0.9rem] bg-black flex items-center justify-center font-black text-xl text-white">
                                            {step.num}
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <h4 className={`font-headline font-bold text-2xl ${isDark ? 'text-white' : 'text-slate-900'} mb-3 tracking-tight group-hover:text-primary-light transition-colors`}>
                                            {step.title}
                                        </h4>
                                        <p className={`text-lg leading-relaxed ${
                                            isDark ? 'text-slate-400' : 'text-slate-600'
                                        } font-medium`}>
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        {/* Glow Behind Image */}
                        <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl opacity-30 animate-pulse" />
                        
                        <div className={`relative rounded-[3rem] p-4 border backdrop-blur-3xl overflow-hidden shadow-2xl ${
                            isDark ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-slate-100 border-slate-200'
                        }`}>
                            <Image
                                src="/images/about/process.png"
                                alt="Modern Design and Engineering Process"
                                className="rounded-[2rem] w-full object-cover aspect-[4/3] shadow-inner"
                                width={800}
                                height={600}
                                priority
                            />
                        </div>

                        {/* Floating Tech Badge */}
                        <motion.div 
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-[2rem] shadow-2xl hidden md:block"
                        >
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 bg-primary-light/20 rounded-xl">
                                    <Cpu className="w-8 h-8 text-primary-light" />
                                </div>
                                <span className="text-white font-bold text-sm uppercase tracking-widest">Process Alpha</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
