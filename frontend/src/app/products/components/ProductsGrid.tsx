'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const products = [
    {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJS8jIVQ7Mh5QRkqbiHwl3J95ipNwhN_Z84F1QZcjIpzczC2Iyfbsw7qKd4X8k5oil_V64Ij_NMoHc4B1jxUSBDndyIUr-8hMM0J1qkLAEqWAqTCTzd7VsFpAX0GDFeNXrqIcZHcG4EIJ1L1b2RkbTBHFE4jS5QQpHW_g6_yUBVxFd3WLrUIVHv_yHJcrfjBnDQfC2a7eu5YK9RTf8xAKNb_m9jOPprKVpzxXirOTa3aVH2RcIJRGGvwjH5vvZLdSU6ock8PwRboDE',
        tag: 'AI & Automation', status: 'Live',
        title: 'AI Chatbot System',
        desc: 'Enterprise-grade LLM integration for automated customer success.',
    },
    {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoMmEq9umsFm2-lPwrske0dU8szav3UeR8ZB0MS5GyvBTv1pH_hrtMnFWZ_oztKfXxvwH1D6Vl94mh9GBBM3VXs-ev7qMY0T5vLtYs5rZXi3iDWSoQe1IQu3soNJwds4sNdkdlX7RRstO8esmNNSsmYJAvmwy2gNB-d4e_iZMnEt3R4WbU_oibIYaLj5qTXEi2LPv9e2mTOLfAY0RHddWug5FJQKinSxBp5f8ysXDxWawgn21Bf3FZmSt4QFYmDZwlItNJqzhEjO_h',
        tag: 'FinTech', status: 'Private Beta',
        title: 'Trade Copier Tool',
        desc: 'Latency-optimized execution for professional trading desk synchronization.',
    },
    {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRsa5YlqNey4XzleA8Al9bTMLY5isHrJ5wQSt1X_xYETl6yNxeaHddXrILUvBx7U6XetMPYoPVzc2_P69TLJiTMRcp-8j_SGdO16vHPC-1y8Q4J_V9FdSPqETUQZ4E1Yux20h1HOaAuPjbRwm02sjdA-76obfX5RYFaiWWx4nTeupkTS3hXoI77IE49QufYJo614T_0P1Ldt2iGmGTeG40zxX6NseDXIOfIAWkGbZBTMrGhemgr-ooDcDl_zRxHCO4waHYhTxLGZdy',
        tag: 'Internal Tools', status: 'Live',
        title: 'Escrow System',
        desc: 'Secure transactional layer for high-trust digital marketplace environments.',
    },
    {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRkWOnHEOjHacJS-e0Y2760jBZlh1EBFjPxxoBP_IY2xhOYzFldYOH3GkQ45aucbxro1LHv_Vi4h01N9NnScDYnQ-MuS5FyTqHoUKXcI2XDnlukUjb4_tFJcRQ1ZoRZjSyTo6-rkCVI_mxUrSu1iLqTkes4V6NWha56V1QKzZTUgIdWgADAiUrWT6tMMkDZ0RBsLjzTpVY2hzDr3Entco1_ORa6PCH36Tv6OUKHsrS8DqyRzzThzhxlL8qSB-7myK_53JtC3mI0_lY',
        tag: 'Utilities', status: 'Open Source',
        title: 'YT Downloader',
        desc: 'High-speed media extraction tool for content creators and editors.',
    },
];

export default function ProductsGrid() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section id="catalog" className={`py-32 px-8 transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                    <div className="space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-12 h-[1px] bg-blue-500" />
                            <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>The Ecosystem</span>
                        </motion.div>
                        <h2 className={`text-4xl md:text-6xl font-black font-headline tracking-tighter leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            CURATED <br /> SOLUTIONS.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div 
                            key={product.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group h-full flex flex-col rounded-[2.5rem] border transition-all duration-500 hover:scale-[1.02] ${isDark ? 'bg-zinc-900 border-white/5 hover:border-blue-500/30 shadow-2xl shadow-white/5' : 'bg-slate-50 border-slate-200 hover:border-blue-500/30 shadow-xl shadow-slate-100'}`}
                        >
                            <div className="aspect-[1.2] overflow-hidden rounded-t-[2.5rem]">
                                <img
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    src={product.image}
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-grow space-y-6">
                                <div className="flex justify-between items-center">
                                    <span className={`text-[10px] font-black uppercase tracking-[0.1em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{product.tag}</span>
                                    <span className={`text-[9px] font-black uppercase tracking-tighter opacity-40 ${isDark ? 'text-white' : 'text-black'}`}>{product.status}</span>
                                </div>
                                
                                <div className="space-y-3 flex-grow">
                                    <h4 className={`text-xl font-black font-headline tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{product.title}</h4>
                                    <p className={`text-xs font-medium leading-relaxed opacity-60 ${isDark ? 'text-white' : 'text-slate-900'}`}>{product.desc}</p>
                                </div>

                                <button className={`w-full py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 border ${isDark ? 'bg-black border-white/10 text-white hover:bg-white hover:text-black' : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white'}`}>
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
