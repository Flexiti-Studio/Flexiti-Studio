'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProductsHero() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className={`relative pt-40 pb-32 px-8 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
            {/* Ambient Background */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] blur-[120px] rounded-full opacity-20 pointer-events-none ${isDark ? 'bg-blue-600' : 'bg-blue-400'}`} />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                    <div className="lg:col-span-12 xl:col-span-6 space-y-12">
                        <div className="space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="flex items-center gap-3"
                            >
                                <div className="w-12 h-[1px] bg-blue-500" />
                                <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>The Digital Architect</span>
                            </motion.div>
                            
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className={`text-6xl md:text-8xl font-black font-headline leading-[0.9] tracking-[calc(-0.06em)] ${isDark ? 'text-white' : 'text-slate-900'}`}
                            >
                                PRODUCTS <br />
                                <span className="text-blue-500">ENGINEERED</span> <br />
                                TO SCALE.
                            </motion.h1>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={`text-xl font-medium max-w-xl leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}
                            >
                                We design and engineer high-performance SaaS platforms and internal tools that empower modern teams to scale beyond their limits.
                            </motion.p>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-6"
                        >
                            <Link 
                                href="#catalog"
                                className={`px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] transition-all duration-500 shadow-2xl ${isDark ? 'bg-white text-black hover:bg-slate-100 shadow-white/5' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20'}`}
                            >
                                Explore Products
                            </Link>
                            <Link 
                                href="/contact"
                                className={`px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] transition-all duration-500 border ${isDark ? 'bg-transparent border-white/10 text-white hover:bg-white/5' : 'bg-transparent border-slate-200 text-slate-900 hover:bg-slate-50'}`}
                            >
                                Start a Project
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-12 xl:col-span-6 relative perspective-1000"
                    >
                        <div className={`relative rounded-[3rem] overflow-hidden border shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:rotate-1 hover:scale-[1.02] ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                            <img
                                alt="Modern SaaS Dashboard Interface"
                                className="w-full aspect-square object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn4CnNo4BQb6ZO8oh20npY-aGTjNRKcss8REz9r-xN3jeJHEto1tNYnNOJ8us5jMqroDJ9t0lWgZl0IrYaIZIl62b1QIvpRzmgySpddOakvErG_9N9jTn97BN4bBLDqwmZS0yfeIyPFWbQNylGiOqfTSGWe8NX7BWsc91_x5NQhgFFyYlz1_lke1MoNi3pQaUMIoo-fHW8TenkgA6jFlfecW3TBA2XdX7l1BWdETZ2LFsdzhuUdn-76Bcm21i_-YaPnfwnbNnBoDjC"
                            />
                        </div>
                        
                        {/* Interactive Accents */}
                        <div className={`absolute -top-12 -right-12 w-64 h-64 blur-3xl opacity-30 rounded-full transition-opacity duration-1000 ${isDark ? 'bg-blue-600' : 'bg-blue-400'}`} />
                    </motion.div>
                </div>
            </div>

            {/* Background Texture */}
            <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${isDark ? 'bg-[radial-gradient(#fff_1px,transparent_1px)]' : 'bg-[radial-gradient(#000_1px,transparent_1px)]'} [background-size:40px_40px]`} />
        </section>
    );
}
