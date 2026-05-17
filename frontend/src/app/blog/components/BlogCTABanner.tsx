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
        <section className="mt-40 relative px-4 w-full">
            {/* Ambient Background Glows */}
            <div className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 blur-[120px] opacity-10 pointer-events-none rounded-full ${isDark ? 'bg-sky-500' : 'bg-slate-200'}`} />
            <div className={`absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 blur-[120px] opacity-10 pointer-events-none rounded-full ${isDark ? 'bg-indigo-500' : 'bg-slate-200'}`} />

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className={`relative z-10 p-12 md:p-24 rounded-[3rem] border text-center overflow-hidden shadow-xl ${
                    isDark 
                        ? 'bg-zinc-950 border-white/5 shadow-white/5' 
                        : 'bg-slate-900 border-slate-800 shadow-slate-900/10'
                }`}
            >
                {/* Background Subtle Dot Pattern */}
                <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${
                    isDark ? 'bg-[radial-gradient(#fff_1px,transparent_1px)]' : 'bg-[radial-gradient(#0066ff_1px,transparent_1px)]'
                } [background-size:24px_24px]`} />

                <div className="relative z-10 max-w-3xl mx-auto space-y-10">
                    
                    {/* Top Work with us pill */}
                    <div className="flex justify-center">
                        <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                            <span className="text-[9px] font-bold uppercase tracking-widest">Work with Flexiti</span>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black font-headline text-white leading-tight tracking-tight">
                        Need Help Building <br /> Your Product?
                    </h2>
                    
                    <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto">
                        From discovery and design to full-scale engineering, we provide the excellence you need to win the market.
                    </p>

                    {/* Capsule Button Triggers */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link 
                            href="/contact"
                            className="w-full sm:w-auto px-8 h-12 rounded-full font-bold text-[10px] uppercase tracking-widest bg-white text-black hover:bg-slate-100 transition-colors flex items-center justify-center gap-2.5 active:scale-95 shadow-md shadow-black/10"
                        >
                            Book a Strategy Call
                            {/* Custom SVG calendar icon */}
                            <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                        </Link>

                        <Link 
                            href="/portfolio"
                            className="w-full sm:w-auto px-8 h-12 rounded-full font-bold text-[10px] uppercase tracking-widest border border-white/10 text-white hover:bg-white/5 transition-colors flex items-center justify-center gap-2.5 active:scale-95"
                        >
                            View Our Work
                            {/* Custom SVG outward arrow */}
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Subtly animated decorative blur in bottom right */}
                <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full blur-[100px] opacity-15 bg-sky-500 pointer-events-none" />
            </motion.div>
        </section>
    );
}
