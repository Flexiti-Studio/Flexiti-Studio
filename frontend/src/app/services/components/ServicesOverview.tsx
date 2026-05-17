'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const services = [
    {
        icon: (
            <svg className="w-8 h-8 text-sky-500 group-hover:text-sky-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: 'Web App Dev',
        description: 'High-performance React and Next.js applications optimized for speed, SEO, and seamless user interaction.',
    },
    {
        icon: (
            <svg className="w-8 h-8 text-sky-500 group-hover:text-sky-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <path d="M12 18h.01" />
            </svg>
        ),
        title: 'Mobile App Dev',
        description: 'Native-feel cross-platform apps built with Flutter or React Native for iOS and Android deployment.',
    },
    {
        icon: (
            <svg className="w-8 h-8 text-sky-500 group-hover:text-sky-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
        title: 'SaaS Product Dev',
        description: 'End-to-end multi-tenant architectures featuring complex billing, role management, and scalability.',
    },
    {
        icon: (
            <svg className="w-8 h-8 text-sky-500 group-hover:text-sky-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        ),
        title: 'MVP Dev',
        description: 'Rapid development cycles to get your core product to market in weeks, not months, without technical debt.',
    },
    {
        icon: (
            <svg className="w-8 h-8 text-sky-500 group-hover:text-sky-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: 'AI & Automation',
        description: 'Integrating LLMs, custom machine learning models, and automated workflows into your existing stack.',
    },
    {
        icon: (
            <svg className="w-8 h-8 text-sky-500 group-hover:text-sky-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
        ),
        title: 'System Integration',
        description: 'Connecting fragmented tools and legacy systems through robust custom API layers and middleware.',
    },
];

export default function ServicesOverview() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className={`py-32 px-8 transition-colors duration-500 ${isDark ? 'bg-[#07070a]' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 flex items-center gap-3"
                    >
                        <div className="w-12 h-[1px] bg-sky-500" />
                        <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>Capabilities</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`text-5xl md:text-7xl font-black font-headline leading-none tracking-tighter mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}
                    >
                        CORE <br /> COMPETENCIES
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`max-w-xl text-lg font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}
                    >
                        We bridge the gap between complex engineering and elegant user experiences across the entire digital landscape.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group p-10 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${
                                isDark 
                                    ? 'bg-white/[0.01] border-white/5 hover:border-sky-500/40 hover:bg-white/[0.02]' 
                                    : 'bg-white border-slate-200 hover:border-sky-500/40 shadow-xl shadow-slate-200/50'
                            }`}
                        >
                            {/* Ambient light glow behind cards on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 border transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                                isDark ? 'bg-zinc-950 border-white/5' : 'bg-slate-50 border-slate-200'
                            }`}>
                                {service.icon}
                            </div>
                            
                            <h3 className={`text-2xl font-black font-headline tracking-tighter mb-4 transition-colors group-hover:text-sky-500 ${
                                isDark ? 'text-white' : 'text-slate-900'
                            }`}>
                                {service.title}
                            </h3>
                            
                            <p className={`text-sm font-medium leading-relaxed mb-8 transition-colors ${
                                isDark ? 'text-slate-400' : 'text-slate-500'
                            }`}>
                                {service.description}
                            </p>
                            
                            <div className={`h-[1px] w-0 transition-all duration-700 group-hover:w-full ${
                                isDark ? 'bg-sky-500/40' : 'bg-sky-600'
                            }`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
