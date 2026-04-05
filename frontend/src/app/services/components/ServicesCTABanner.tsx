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
        <section className={`py-48 px-8 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-slate-50'}`}>
            {/* Ambient Background */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[150px] rounded-full opacity-20 pointer-events-none ${isDark ? 'bg-blue-600' : 'bg-blue-400'}`} />

            <div className="max-w-5xl mx-auto text-center relative z-10 space-y-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className={`text-6xl md:text-[8rem] font-black font-headline leading-[0.9] tracking-[calc(-0.05em)] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        LET&apos;S BUILD <br />
                        <span className="text-blue-500">SOMETHING POWERFUL.</span>
                    </h2>
                    
                    <p className={`text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                        Turn your vision into a world-class digital product. Our engineering team is ready to scale your next big thing.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-6"
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
                        Contact Sales
                    </Link>
                </motion.div>
            </div>

            {/* Background Texture */}
            <div className={`absolute inset-0 opacity-[0.02] pointer-events-none ${isDark ? 'bg-[radial-gradient(#fff_1px,transparent_1px)]' : 'bg-[radial-gradient(#000_1px,transparent_1px)]'} [background-size:50px_50px]`} />
        </section>
    );
}
