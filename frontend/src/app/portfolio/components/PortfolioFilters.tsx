'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const categories = ['All', 'Web Apps', 'Mobile Apps', 'SaaS', 'AI Tools'];

export default function PortfolioFilters() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [activeFilter, setActiveFilter] = useState('All');

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className="px-8 max-w-7xl mx-auto mb-20 relative z-20">
            <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-8 p-6 md:p-8 rounded-[2.5rem] border backdrop-blur-xl ${isDark ? 'bg-zinc-900/50 border-white/5 shadow-2xl shadow-white/5' : 'bg-slate-50/50 border-slate-200 shadow-xl shadow-slate-200/50'}`}>
                <div className="flex flex-col gap-4">
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-white/40' : 'text-slate-400'}`}>Filter Projects</span>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button 
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`relative px-6 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${activeFilter === cat 
                                    ? (isDark ? 'text-white' : 'text-blue-600') 
                                    : (isDark ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900')}`}
                            >
                                {activeFilter === cat && (
                                    <motion.div 
                                        layoutId="activeFilter"
                                        className={`absolute inset-0 rounded-xl -z-10 ${isDark ? 'bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'bg-blue-50'}`}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full md:w-auto">
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-white/40' : 'text-slate-400'}`}>Industry</span>
                    <div className={`relative flex items-center px-6 py-2 rounded-xl border transition-all ${isDark ? 'bg-black border-white/5 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
                        <select className="bg-transparent border-none focus:ring-0 cursor-pointer font-bold text-xs uppercase tracking-widest outline-none appearance-none pr-8 w-full md:w-40">
                            <option className={isDark ? 'bg-zinc-900' : 'bg-white'}>All Industries</option>
                            <option className={isDark ? 'bg-zinc-900' : 'bg-white'}>Education</option>
                            <option className={isDark ? 'bg-zinc-900' : 'bg-white'}>Finance</option>
                            <option className={isDark ? 'bg-zinc-900' : 'bg-white'}>Healthcare</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 pointer-events-none text-lg opacity-50">expand_more</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
