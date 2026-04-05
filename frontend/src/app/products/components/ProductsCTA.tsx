'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProductsCTA() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className={`py-48 px-8 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`relative rounded-[4rem] p-12 md:p-32 overflow-hidden border shadow-2xl text-center ${isDark ? 'bg-zinc-900 border-white/10 shadow-white/5' : 'bg-slate-900 border-slate-800 shadow-slate-900/20'}`}
                >
                    {/* Ambient Glows */}
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full" />
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />

                    <div className="relative z-10 space-y-12">
                        <div className="space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-white/10 bg-white/5 text-blue-400"
                            >
                                Let&apos;s Build
                            </motion.div>
                            <h2 className="text-5xl md:text-8xl font-black font-headline text-white tracking-[calc(-0.06em)] leading-[0.9]">
                                HAVE AN IDEA? <br />
                                <span className="text-blue-500">LET&apos;S BUILD IT.</span>
                            </h2>
                            <p className="text-xl font-medium text-slate-400 max-w-2xl mx-auto leading-relaxed">
                                Whether you need a custom tool for your team or have the next billion-dollar SaaS idea, we are ready to architect it.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 pt-8">
                            <Link 
                                href="/contact"
                                className="px-12 py-6 rounded-full bg-white text-black font-black text-xs uppercase tracking-[0.3em] hover:bg-slate-100 transition-all duration-500 shadow-2xl shadow-white/10"
                            >
                                Start a Project
                            </Link>
                            <Link 
                                href="/contact"
                                className="px-12 py-6 rounded-full bg-transparent border border-white/20 text-white font-black text-xs uppercase tracking-[0.3em] hover:bg-white/5 transition-all duration-500"
                            >
                                Partner With Us
                            </Link>
                        </div>
                    </div>

                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
                </motion.div>
            </div>
        </section>
    );
}
