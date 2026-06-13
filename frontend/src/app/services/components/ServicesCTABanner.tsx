'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ServicesCTABanner() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className={`py-48 px-8 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#030014]' : 'bg-slate-50'}`}>
            
            {/* 🌌 Ambient Celestial Deep Glows */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] rounded-full opacity-15 pointer-events-none ${isDark ? 'bg-indigo-600' : 'bg-indigo-400'}`} />
            <div className={`absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] blur-[120px] rounded-full opacity-10 pointer-events-none ${isDark ? 'bg-purple-600' : 'bg-purple-400'}`} />

            <div className="max-w-5xl mx-auto text-center relative z-10 space-y-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className={`text-6xl md:text-[8rem] font-black font-headline leading-[0.95] tracking-[calc(-0.04em)] transition-colors ${
                        isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                        LET&apos;S BUILD <br />
                        <span className="text-indigo-500">SOMETHING POWERFUL.</span>
                    </h2>
                    
                    <p className={`text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed transition-colors ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                        Turn your vision into a world-class digital product. Our engineering team is ready to scale your next big thing.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full sm:w-auto"
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
                        {/* Custom SVG Outward Arrow */}
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
                        Contact Sales
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
