'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const labs = [
    {
        icon: 'biotech',
        title: 'Neural CRM',
        desc: 'Predictive customer behavior modeling using proprietary transformer architectures.',
        status: 'In Research',
    },
    {
        icon: 'cloud_done',
        title: 'VaporSync',
        desc: 'Next-gen peer-to-peer data replication with zero-latency consistency across regions.',
        status: 'Early Prototype',
    },
];

export default function ProductsLabs() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className={`py-48 px-8 transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12 text-center md:text-left">
                    <div className="space-y-6 flex-grow">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border ${isDark ? 'bg-zinc-900 border-white/5 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}
                        >
                            Flexiti Labs
                        </motion.div>
                        <h2 className={`text-4xl md:text-6xl font-black font-headline tracking-tighter leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            EXPERIMENTAL <br /> CONCEPTS.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {labs.map((lab, index) => (
                        <motion.div 
                            key={lab.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-10 rounded-[2.5rem] border flex flex-col md:flex-row gap-10 items-start transition-all duration-500 hover:scale-[1.02] ${isDark ? 'bg-zinc-900 border-white/5 hover:border-blue-500/30' : 'bg-white border-slate-200 hover:border-blue-500/30 shadow-xl shadow-slate-100'}`}
                        >
                            <div className={`p-6 rounded-3xl shrink-0 border ${isDark ? 'bg-black border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                                <span className="material-symbols-outlined text-blue-500 text-4xl">{lab.icon}</span>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h3 className={`text-2xl font-black font-headline tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{lab.title}</h3>
                                    <p className={`text-sm font-medium leading-relaxed opacity-60 ${isDark ? 'text-white' : 'text-slate-900'}`}>{lab.desc}</p>
                                </div>
                                <span className={`inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                    {lab.status}
                                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
