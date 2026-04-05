'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const steps = [
    { icon: 'search', label: 'Discovery', desc: 'Defining goals and technical requirements.' },
    { icon: 'brush', label: 'Design', desc: 'UX strategy and technical architecture.' },
    { icon: 'code', label: 'Development', desc: 'Clean, scalable code and agile sprints.' },
    { icon: 'biotech', label: 'Testing', desc: 'QA automation and security audits.' },
    { icon: 'support_agent', label: 'Support', desc: 'Post-launch monitoring and optimization.' },
];

export default function ServicesProcess() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className={`py-32 px-8 transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24 space-y-6">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border ${isDark ? 'bg-zinc-900 border-white/5 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}
                    >
                        Our Methodology
                    </motion.div>
                    
                    <h2 className={`text-5xl md:text-7xl font-black font-headline tracking-tighter leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        ARCHITECTURE <br /> PROCESS
                    </h2>
                    
                    <p className={`max-w-xl mx-auto text-lg font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                        A high-fidelity engineering framework designed for explosive growth and flawless execution.
                    </p>
                </div>

                <div className="relative">
                    {/* Desktop Progress Line */}
                    <div className={`hidden lg:block absolute top-[4.5rem] left-0 w-full h-[1px] ${isDark ? 'bg-white/5' : 'bg-slate-200'}`}>
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="h-full bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.8)]"
                        />
                    </div>

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
                                <div className={`relative w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto border transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${isDark ? 'bg-zinc-900 border-white/5 shadow-2xl shadow-white/5' : 'bg-white border-slate-200 shadow-xl shadow-slate-100'}`}>
                                    <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-10 dark:bg-blue-600 bg-blue-500 transition-opacity`} />
                                    <span className="material-symbols-outlined text-3xl text-blue-500">{step.icon}</span>
                                    
                                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-black ${isDark ? 'bg-black border-white/10 text-white/40' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                                        0{index + 1}
                                    </div>
                                </div>

                                <div className="space-y-3 px-4">
                                    <h4 className={`text-xl font-black font-headline tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{step.label}</h4>
                                    <p className={`text-xs font-medium leading-relaxed opacity-60 ${isDark ? 'text-white' : 'text-slate-900'}`}>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
