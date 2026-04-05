'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const stats = [
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '10ms', label: 'Average Latency' },
    { value: '50+', label: 'Active Deployments' },
    { value: '4k+', label: 'Daily Users' },
];

export default function ProductsScalability() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className={`py-48 px-8 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
                <div className={`rounded-[3rem] p-12 md:p-24 relative overflow-hidden border shadow-2xl ${isDark ? 'bg-zinc-900 border-white/5 shadow-white/5' : 'bg-slate-50 border-slate-200 shadow-slate-200/40'}`}>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-10 h-[1px] bg-blue-500" />
                                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Scalability First</span>
                                </motion.div>
                                
                                <h2 className={`text-4xl md:text-6xl font-black font-headline leading-none tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    SOFTWARE BUILT <br /> FOR EXPLOSIVE <br /> <span className="text-blue-500">GROWTH.</span>
                                </h2>
                                
                                <p className={`text-lg font-medium leading-relaxed opacity-60 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    We don&apos;t build just to &ldquo;build.&rdquo; Every line of code at Flexiti Studio is a solution to a specific business pain point.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-12">
                                {stats.map((stat, index) => (
                                    <motion.div 
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="space-y-2"
                                    >
                                        <div className={`text-3xl md:text-5xl font-black font-headline tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</div>
                                        <div className={`text-[10px] font-black uppercase tracking-[0.2em] opacity-40 ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative hidden lg:block"
                        >
                            <div className={`absolute -inset-10 blur-[100px] rounded-full opacity-20 pointer-events-none ${isDark ? 'bg-blue-600' : 'bg-blue-400'}`} />
                            <div className={`relative rounded-[2.5rem] overflow-hidden border shadow-2xl transition-transform duration-700 hover:rotate-1 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                                <img
                                    alt="Code Scalability"
                                    className="w-full aspect-square object-cover opacity-80"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIS50Ox79gwRBDfeQniacuGBX3A2MScnAOwizLmKAwX9qaOQ3g4zfmF_uHLFpPPaTufTmDtLbnXnccukp38B2iQSkfitIHs9owRf1_nzeqGHcabpHxuMXoE-4hjSw_VbQGWj_mzf5YJ6UjxSeHrcbVYU_gJ0fY-CRmIB5Xt14GhqoZrkjin8aEYXJD_mO9dWZOWlWbLPDpWSBIrW1owEOfYiLBTpOnsNftjPmvEfYV-VwyTvj68jtOMacCztJG1RCHWPBnlEpape9w"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Background Texture */}
                    <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${isDark ? 'bg-[radial-gradient(#fff_1px,transparent_1px)]' : 'bg-[radial-gradient(#000_1px,transparent_1px)]'} [background-size:40px_40px]`} />
                </div>
            </div>
        </section>
    );
}
