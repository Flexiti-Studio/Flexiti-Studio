'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const steps = [
    { 
        icon: (
            <svg className="w-8 h-8 text-indigo-500 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ), 
        label: 'Discovery', 
        desc: 'Defining goals and technical requirements.' 
    },
    { 
        icon: (
            <svg className="w-8 h-8 text-indigo-500 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        ), 
        label: 'Design', 
        desc: 'UX strategy and technical architecture.' 
    },
    { 
        icon: (
            <svg className="w-8 h-8 text-indigo-500 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ), 
        label: 'Development', 
        desc: 'Clean, scalable code and agile sprints.' 
    },
    { 
        icon: (
            <svg className="w-8 h-8 text-indigo-500 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ), 
        label: 'Testing', 
        desc: 'QA automation and security audits.' 
    },
    { 
        icon: (
            <svg className="w-8 h-8 text-indigo-500 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ), 
        label: 'Support', 
        desc: 'Post-launch monitoring and optimization.' 
    },
];

export default function ServicesProcess() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className={`py-32 px-8 transition-colors duration-500 ${isDark ? 'bg-[#030014]' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto">
                
                {/* Header */}
                <div className="text-center mb-24 space-y-6">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border transition-colors ${
                            isDark ? 'bg-zinc-950 border-white/5 text-indigo-400' : 'bg-indigo-50 border-indigo-100 text-indigo-600'
                        }`}
                    >
                        Our Methodology
                    </motion.div>
                    
                    <h2 className={`text-5xl md:text-7xl font-black font-headline tracking-tighter leading-none transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        ARCHITECTURE <br /> PROCESS
                    </h2>
                    
                    <p className={`max-w-xl mx-auto text-lg font-medium leading-relaxed transition-colors ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        A high-fidelity engineering framework designed for explosive growth and flawless execution.
                    </p>
                </div>

                <div className="relative">
                    {/* Desktop Progress Line with Neon Glow */}
                    <div className={`hidden lg:block absolute top-[4.5rem] left-0 w-full h-[1.5px] ${isDark ? 'bg-white/5' : 'bg-slate-200'}`}>
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.8)]"
                        />
                    </div>

                    {/* 5-step grid row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
                        {steps.map((step, index) => (
                            <motion.div 
                                key={step.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative z-10 text-center space-y-8 group"
                            >
                                <div className={`relative w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto border transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                                    isDark 
                                        ? 'bg-zinc-950 border-white/5 shadow-2xl shadow-black/40' 
                                        : 'bg-white border-slate-200 shadow-xl shadow-slate-100'
                                }}`}>
                                    <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-10 dark:bg-indigo-600 bg-indigo-500 transition-opacity" />
                                    
                                    {step.icon}
                                    
                                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-black transition-colors ${
                                        isDark ? 'bg-black border-white/10 text-white/40' : 'bg-slate-50 border-slate-200 text-slate-400'
                                    }`}>
                                        0{index + 1}
                                    </div>
                                </div>

                                <div className="space-y-3 px-4">
                                    <h4 className={`text-xl font-black font-headline tracking-tighter transition-colors group-hover:text-indigo-500 ${
                                        isDark ? 'text-white' : 'text-slate-900'
                                    }`}>
                                        {step.label}
                                    </h4>
                                    <p className={`text-xs font-medium leading-relaxed transition-colors ${
                                        isDark ? 'text-slate-400' : 'text-slate-500'
                                    }`}>
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
