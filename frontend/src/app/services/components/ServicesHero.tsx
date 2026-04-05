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
        <section className={`relative pt-64 pb-32 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
            {/* Ambient Background */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] rounded-full opacity-20 pointer-events-none ${isDark ? 'bg-blue-600' : 'bg-blue-400'}`} />

            <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={`inline-block px-4 py-1.5 mb-8 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border ${isDark ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
                        Full-Cycle Engineering
                    </span>
                    
                    <h1 className={`text-[4rem] md:text-[8rem] font-black font-headline leading-[0.9] tracking-[calc(-0.05em)] mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        BUILD SCALABLE <br />
                        <span className="text-blue-500">SYSTEMS, NOT WEBSITES.</span>
                    </h1>
                    
                    <p className={`max-w-2xl mx-auto text-xl font-medium leading-relaxed mb-16 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        End-to-end digital engineering for high-growth enterprises. We architect Web Apps, Mobile Platforms, and AI-Powered Systems for maximum performance.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link 
                        href="/contact"
                        className={`w-full sm:w-auto px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.3em] transition-all duration-500 shadow-2xl ${isDark ? 'bg-white text-black hover:bg-slate-100 shadow-white/5' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20'}`}
                    >
                        Start a Project
                    </Link>
                    <Link 
                        href="/contact"
                        className={`w-full sm:w-auto px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.3em] transition-all duration-500 border ${isDark ? 'bg-transparent border-white/10 text-white hover:bg-white/5' : 'bg-transparent border-slate-200 text-slate-900 hover:bg-slate-50'}`}
                    >
                        Book a Call
                    </Link>
                </motion.div>
            </div>

            {/* Background Texture */}
            <div className={`absolute inset-0 opacity-[0.02] pointer-events-none ${isDark ? 'bg-[radial-gradient(#fff_1px,transparent_1px)]' : 'bg-[radial-gradient(#000_1px,transparent_1px)]'} [background-size:60px_60px]`} />
        </section>
    );
}
