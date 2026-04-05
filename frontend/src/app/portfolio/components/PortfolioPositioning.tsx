'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function PortfolioPositioning() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className="py-48 px-8 max-w-7xl mx-auto relative">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`rounded-[3rem] p-12 md:p-24 relative overflow-hidden border shadow-2xl ${isDark ? 'bg-zinc-900 border-white/5 shadow-white/5' : 'bg-white border-slate-200 shadow-slate-200/40'}`}
            >
                <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-3"
                            >
                                <div className="w-10 h-[1px] bg-blue-500" />
                                <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>The Flexiti Edge</span>
                            </motion.div>
                            
                            <h2 className={`text-5xl md:text-7xl font-black font-headline leading-none tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                We don&apos;t just build projects — we build <span className="text-blue-500">scalable systems.</span>
                            </h2>
                            
                            <p className={`text-xl font-medium leading-relaxed max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                Our architecture is designed for explosive growth. We prioritize modularity, performance, and long-term maintainability to ensure your product evolves at the speed of your ambition.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-12 pt-8 border-t border-white/5">
                            <div className="space-y-2">
                                <h4 className={`text-4xl font-black font-headline ${isDark ? 'text-white' : 'text-slate-900'}`}>99.9%</h4>
                                <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Uptime Record</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className={`text-4xl font-black font-headline ${isDark ? 'text-white' : 'text-slate-900'}`}>&lt;100ms</h4>
                                <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Latency Focus</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex justify-center items-center">
                        <div className={`absolute inset-0 blur-[120px] rounded-full opacity-30 ${isDark ? 'bg-blue-600' : 'bg-blue-500'}`} />
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="relative w-full aspect-square max-w-md"
                        >
                            <div className={`absolute inset-0 rounded-full border border-dashed p-12 transition-colors ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                                <div className={`w-full h-full rounded-full border border-dashed p-12 transition-colors ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                                    <div className={`w-full h-full rounded-full border border-dashed transition-colors ${isDark ? 'border-white/10' : 'border-slate-200'}`} />
                                </div>
                            </div>
                        </motion.div>
                        
                        <div className={`absolute w-32 h-32 rounded-3xl backdrop-blur-2xl flex items-center justify-center border shadow-2xl transition-all duration-700 ${isDark ? 'bg-blue-600/20 border-white/10 shadow-blue-500/20' : 'bg-blue-500/10 border-blue-200 shadow-blue-500/10'}`}>
                            <span className="material-symbols-outlined text-5xl text-blue-500 animate-pulse">architecture</span>
                        </div>
                    </div>
                </div>

                {/* Background Texture */}
                <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${isDark ? 'bg-[radial-gradient(#fff_1px,transparent_1px)]' : 'bg-[radial-gradient(#000_1px,transparent_1px)]'} [background-size:30px_30px]`} />
            </motion.div>
        </section>
    );
}
