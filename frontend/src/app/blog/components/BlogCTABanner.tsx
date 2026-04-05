'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BlogCTABanner() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className="mt-40 relative px-4">
            {/* Ambient Glows */}
            <div className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 blur-[100px] opacity-20 pointer-events-none rounded-full ${isDark ? 'bg-blue-600' : 'bg-blue-400'}`} />
            <div className={`absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 blur-[100px] opacity-20 pointer-events-none rounded-full ${isDark ? 'bg-purple-600' : 'bg-purple-400'}`} />

            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className={`relative z-10 p-12 md:p-24 rounded-[4rem] border text-center overflow-hidden shadow-2xl ${isDark ? 'bg-zinc-900 shadow-white/5 border-white/5' : 'bg-slate-900 shadow-slate-900/20 border-slate-800'}`}
            >
                {/* Background Pattern */}
                <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${isDark ? 'bg-[radial-gradient(#fff_1px,transparent_1px)]' : 'bg-[radial-gradient(#0066ff_1px,transparent_1px)]'} [background-size:24px_24px]`} />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`inline-flex items-center gap-2 px-5 py-2 rounded-full mb-10 border ${isDark ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-500/10 border-blue-500/20 text-blue-400'}`}
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Work with Flexiti</span>
                    </motion.div>

                    <h2 className={`text-5xl md:text-7xl font-black font-headline mb-8 leading-[1.1] tracking-tighter ${isDark ? 'text-white' : 'text-white'}`}>
                        Need Help Building <br className="hidden md:block" /> Your Product?
                    </h2>
                    
                    <p className={`text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto mb-16 ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>
                        From discovery and design to full-scale engineering, we provide the excellence you need to win the market.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link 
                                href="/contact"
                                className={`inline-flex items-center gap-3 px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest transition-all ${isDark ? 'bg-white text-black hover:bg-slate-100' : 'bg-white text-black hover:bg-slate-100'}`}
                            >
                                Book a Strategy Call
                                <span className="material-symbols-outlined text-lg">calendar_today</span>
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link 
                                href="/portfolio"
                                className={`inline-flex items-center gap-3 px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest transition-all border ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-white/10 text-white hover:bg-white/5'}`}
                            >
                                View Our Work
                                <span className="material-symbols-outlined text-lg">arrow_outward</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Ambient Blur in corners */}
                <div className={`absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-[100px] opacity-20 pointer-events-none ${isDark ? 'bg-blue-600' : 'bg-blue-500'}`} />
            </motion.div>
        </section>
    );
}
