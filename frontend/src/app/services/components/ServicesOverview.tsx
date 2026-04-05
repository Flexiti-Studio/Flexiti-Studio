'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const services = [
    {
        icon: 'web',
        title: 'Web App Dev',
        description: 'High-performance React and Next.js applications optimized for speed, SEO, and seamless user interaction.',
    },
    {
        icon: 'smartphone',
        title: 'Mobile App Dev',
        description: 'Native-feel cross-platform apps built with Flutter or React Native for iOS and Android deployment.',
    },
    {
        icon: 'cloud_done',
        title: 'SaaS Product Dev',
        description: 'End-to-end multi-tenant architectures featuring complex billing, role management, and scalability.',
    },
    {
        icon: 'rocket_launch',
        title: 'MVP Dev',
        description: 'Rapid development cycles to get your core product to market in weeks, not months, without technical debt.',
    },
    {
        icon: 'psychology',
        title: 'AI & Automation',
        description: 'Integrating LLMs, custom machine learning models, and automated workflows into your existing stack.',
    },
    {
        icon: 'hub',
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
        <section className={`py-32 px-8 transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 flex items-center gap-3"
                    >
                        <div className="w-12 h-[1px] bg-blue-500" />
                        <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Capabilities</span>
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
                            className={`group p-10 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-2 ${isDark ? 'bg-zinc-900 border-white/5 hover:border-blue-500/40' : 'bg-white border-slate-200 hover:border-blue-500/40 shadow-xl shadow-slate-200/50'}`}
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${isDark ? 'bg-zinc-800' : 'bg-slate-100'}`}>
                                <span className="material-symbols-outlined text-3xl text-blue-500">{service.icon}</span>
                            </div>
                            
                            <h3 className={`text-2xl font-black font-headline tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{service.title}</h3>
                            <p className={`text-sm font-medium leading-relaxed mb-8 opacity-60 ${isDark ? 'text-white' : 'text-slate-900'}`}>{service.description}</p>
                            
                            <div className={`h-[1px] w-0 transition-all duration-700 group-hover:w-full ${isDark ? 'bg-blue-500/40' : 'bg-blue-600'}`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
