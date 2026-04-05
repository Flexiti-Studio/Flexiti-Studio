'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PortfolioHero() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className="relative pt-32 pb-20 px-8 overflow-hidden">
            {/* Ambient Background Effects */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 blur-[120px] opacity-20 pointer-events-none rounded-full ${isDark ? 'bg-blue-600' : 'bg-blue-500/30'}`} />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 border ${isDark ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}
                    >
                        <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Our Portfolio</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className={`text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.9] tracking-tighter mb-10 ${isDark ? 'text-white' : 'text-slate-900'}`}
                    >
                        OUR <br /> WORK
                    </motion.h1>

                    {/* Description */}
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`max-w-2xl text-lg md:text-2xl font-medium leading-relaxed mb-12 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                    >
                        Engineering excellence for the next generation of founders. We build scalable digital products that blend technical precision with elite design.
                    </motion.p>

                    {/* CTA */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link 
                            href="/contact"
                            className={`inline-flex items-center gap-3 px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest transition-all shadow-2xl ${isDark ? 'bg-white text-black hover:bg-slate-100 shadow-white/5' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20'}`}
                        >
                            Start a Project
                            <span className="material-symbols-outlined text-lg">calendar_today</span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Background Texture */}
            <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${isDark ? 'bg-[radial-gradient(#fff_1px,transparent_1px)]' : 'bg-[radial-gradient(#000_1px,transparent_1px)]'} [background-size:32px_32px]`} />
        </section>
    );
}