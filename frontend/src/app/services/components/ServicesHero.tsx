'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ServicesHero() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className={`relative pt-64 pb-32 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#07070a]' : 'bg-white'}`}>
            
            {/* 🌌 Atmospheric Sky-Blue & Indigo Ambient Backdrop Lights */}
            <div className={`absolute top-[-10%] left-1/4 w-[60%] aspect-square rounded-full blur-[130px] opacity-15 pointer-events-none ${isDark ? 'bg-sky-500' : 'bg-sky-400'}`} />
            <div className={`absolute top-[10%] right-1/4 w-[50%] aspect-square rounded-full blur-[120px] opacity-10 pointer-events-none ${isDark ? 'bg-indigo-500' : 'bg-indigo-400'}`} />

            <div className="max-w-7xl mx-auto px-8 relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    <span className={`inline-block px-4 py-1.5 mb-8 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border transition-colors ${
                        isDark 
                            ? 'bg-sky-500/10 border-sky-500/20 text-sky-400' 
                            : 'bg-sky-50 border-sky-100 text-sky-600'
                    }`}>
                        Full-Cycle Engineering
                    </span>
                    
                    <h1 className={`text-[4rem] md:text-[7.5rem] font-black font-headline leading-[0.95] tracking-[calc(-0.04em)] mb-12 max-w-5xl transition-colors ${
                        isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                        BUILD SCALABLE <br />
                        <span className="relative inline-block text-[#eef227] select-none">
                            SYSTEMS
                            {/* Handdrawn curly underline accent SVG */}
                            <span className="absolute bottom-[-10px] left-0 w-full pointer-events-none text-[#eef227]">
                                <svg viewBox="0 0 100 10" className="w-full h-3 fill-none stroke-current" strokeWidth="3" strokeLinecap="round">
                                    <path d="M5 5 C 20 8, 40 8, 60 5 C 75 3, 85 2, 95 6 C 80 5, 50 3, 20 6" />
                                </svg>
                            </span>
                        </span>, NOT WEBSITES.
                    </h1>
                    
                    <p className={`max-w-2xl mx-auto text-xl font-medium leading-relaxed mb-16 transition-colors ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                        End-to-end digital engineering for high-growth enterprises. We architect Web Apps, Mobile Platforms, and AI-Powered Systems for maximum performance.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
                >
                    <Link 
                        href="/contact"
                        className={`group w-full sm:w-auto px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl ${
                            isDark 
                                ? 'bg-white text-black hover:bg-slate-100 shadow-white/5' 
                                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20'
                        }`}
                    >
                        Start a Project
                        {/* Outward Diagonal Arrow SVG */}
                        <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </Link>
                    
                    <Link 
                        href="/contact"
                        className={`group w-full sm:w-auto px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 border ${
                            isDark 
                                ? 'bg-transparent border-white/10 text-white hover:bg-white/5' 
                                : 'bg-transparent border-slate-200 text-slate-900 hover:bg-slate-50'
                        }`}
                    >
                        Book a Call
                        <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </Link>
                </motion.div>
            </div>

            {/* Background Texture Overlay */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.015]"
                style={{
                    backgroundImage: `
                        linear-gradient(90deg, transparent 95%, currentColor 100%),
                        linear-gradient(0deg, transparent 95%, currentColor 100%)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />
        </section>
    );
}
