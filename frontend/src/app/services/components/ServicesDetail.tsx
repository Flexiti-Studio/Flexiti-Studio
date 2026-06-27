'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const details = [
    {
        icon: (
            <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: 'Web & Dashboards',
        items: ['Custom CRM Dashboards', 'Real-time Data Analytics', 'Interactive Visualization', 'SSR & Static Generation'],
    },
    {
        icon: (
            <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        ),
        title: 'SaaS Infrastructure',
        items: ['Stripe/Paddle Integration', 'Multi-tenancy Isolation', 'RBAC & User Permissions', 'Automated Provisioning'],
    },
    {
        icon: (
            <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: 'AI Intelligence',
        items: ['Custom GPT Implementations', 'AI-Powered Chatbots', 'Predictive Maintenance', 'Intelligent Data Mining'],
    },
];

export default function ServicesDetail() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className={`py-32 px-8 transition-colors duration-500 ${isDark ? 'bg-[#030014]' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                    
                    {/* Left Sticky Column */}
                    <div className="lg:col-span-5 lg:sticky lg:top-40 space-y-12">
                        <div className="space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3"
                            >
                                <div className="w-12 h-[1px] bg-indigo-500" />
                                <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Deep Dive</span>
                            </motion.div>
                            
                            <h2 className={`text-5xl md:text-6xl font-black font-headline leading-none tracking-tighter transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                EXPERTISE <br /> THAT SCALES.
                            </h2>
                            
                            <p className={`text-xl font-medium leading-relaxed transition-colors ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                We don&apos;t just build features; we engineer systems that drive business objectives through specialized technical domains.
                            </p>
                        </div>

                        {/* Interactive glow mockup card */}
                        <div className="relative group max-w-md">
                            <div className={`absolute -inset-4 blur-2xl rounded-[3rem] opacity-15 transition-opacity duration-700 group-hover:opacity-30 ${isDark ? 'bg-indigo-600' : 'bg-indigo-400'}`} />
                            
                            <div className={`relative rounded-[2.5rem] overflow-hidden border p-3 shadow-2xl transition-all duration-700 ${
                                isDark 
                                    ? 'bg-white/5 border-white/10 shadow-black/40' 
                                    : 'bg-white border-slate-200 shadow-slate-200/20'
                            }`}>
                                <Image
                                    className="relative rounded-[2rem] w-full transition-transform duration-1000 group-hover:scale-105"
                                    alt="Modern engineering dashboard interface"
                                    src="/branding/dashboard services.png"
                                    width={800}
                                    height={800}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Info List */}
                    <div className="lg:col-span-7 space-y-10">
                        {details.map((detail, index) => (
                            <motion.div 
                                key={detail.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-10 rounded-[3rem] border transition-all duration-500 hover:border-indigo-500/30 relative overflow-hidden ${
                                    isDark 
                                        ? 'bg-white/[0.01] border-white/5' 
                                        : 'bg-slate-50 border-slate-200 shadow-xl shadow-slate-100'
                                }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="flex items-center gap-6 mb-8 relative z-10">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-colors ${
                                        isDark ? 'bg-zinc-950 border-white/5' : 'bg-white border-slate-200'
                                    }`}>
                                        {detail.icon}
                                    </div>
                                    <h3 className={`text-3xl font-black font-headline tracking-tighter transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        {detail.title}
                                    </h3>
                                </div>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                    {detail.items.map((item) => (
                                        <li key={item} className={`flex items-center gap-3 text-sm font-bold tracking-tight transition-colors ${
                                            isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                                        }`}>
                                            <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shrink-0">
                                                {/* Crisp SVG checkmark replacing material symbols */}
                                                <svg className="w-3 h-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
