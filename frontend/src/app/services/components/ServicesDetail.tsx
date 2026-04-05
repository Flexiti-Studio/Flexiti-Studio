'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const details = [
    {
        icon: 'analytics',
        title: 'Web & Dashboards',
        items: ['Custom CRM Dashboards', 'Real-time Data Analytics', 'Interactive Visualization', 'SSR & Static Generation'],
    },
    {
        icon: 'payments',
        title: 'SaaS Infrastructure',
        items: ['Stripe/Paddle Integration', 'Multi-tenancy Isolation', 'RBAC & User Permissions', 'Automated Provisioning'],
    },
    {
        icon: 'smart_toy',
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
        <section className={`py-32 px-8 transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                    <div className="lg:col-span-5 lg:sticky lg:top-40 space-y-12">
                        <div className="space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3"
                            >
                                <div className="w-12 h-[1px] bg-blue-500" />
                                <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Deep Dive</span>
                            </motion.div>
                            
                            <h2 className={`text-5xl md:text-6xl font-black font-headline leading-none tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                EXPERTISE <br /> THAT SCALES.
                            </h2>
                            
                            <p className={`text-xl font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                                We don&apos;t just build features; we engineer systems that drive business objectives through specialized technical domains.
                            </p>
                        </div>

                        <div className="relative group">
                            <div className={`absolute -inset-4 blur-2xl rounded-[3rem] opacity-20 transition-opacity group-hover:opacity-30 ${isDark ? 'bg-blue-600' : 'bg-blue-400'}`} />
                            <img
                                className={`relative rounded-[2.5rem] border shadow-2xl w-full transition-transform duration-700 group-hover:scale-[1.02] ${isDark ? 'border-white/10' : 'border-slate-200'}`}
                                alt="Modern engineering dashboard interface"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzQ1ai9yzbfSA7R3yYAu46iNyd1Huh9lxQ-mxrYRmxIKeFMt-Qu6c4UyyXKZ06p2ZBfR7iQ2YJEU0QLsVtKC2t5jCuTg1yDLJzyyQ9pvh2fEfZzBYZs0vi-TT6-YMnnibxxmGvuI2CQzLlXhHzdI55-4NuGpouW7ebJ6N2tKhJWA1ZgOw4tpcZscOn77XfUWXD3ypRfSMZ8-trDt_RpJ_cN7KWbrtHgqHk2UyyiyLUDfcSgC0qGFBTUZY28EW-_RNkR0HPhLmKbkbE"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-10">
                        {details.map((detail, index) => (
                            <motion.div 
                                key={detail.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-10 rounded-[3rem] border transition-all duration-500 hover:border-blue-500/30 ${isDark ? 'bg-zinc-900 border-white/5' : 'bg-slate-50 border-slate-200 shadow-xl shadow-slate-100'}`}
                            >
                                <div className="flex items-center gap-6 mb-8">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-colors ${isDark ? 'bg-black border-white/5' : 'bg-white border-slate-200'}`}>
                                        <span className="material-symbols-outlined text-2xl text-blue-500">{detail.icon}</span>
                                    </div>
                                    <h3 className={`text-3xl font-black font-headline tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{detail.title}</h3>
                                </div>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {detail.items.map((item) => (
                                        <li key={item} className={`flex items-center gap-3 text-sm font-bold tracking-tight ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
                                            <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-blue-500 text-[10px] font-black">check</span>
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
