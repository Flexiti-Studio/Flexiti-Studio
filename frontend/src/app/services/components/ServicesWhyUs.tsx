'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const reasons = [
    {
        icon: (
            <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Fast Execution',
        desc: 'We prioritize momentum without sacrificing structural integrity.',
    },
    {
        icon: (
            <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
        title: 'Scalable Architecture',
        desc: 'Systems designed to handle 10x growth from day one.',
    },
    {
        icon: (
            <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        title: 'Business Focused',
        desc: 'We build for ROI, not just for the sake of the tech stack.',
    },
    {
        icon: (
            <svg className="w-6 h-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Secure by Design',
        desc: 'Enterprise-grade security standards in every line of code.',
    },
];

export default function ServicesWhyUs() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className={`py-48 px-8 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#07070a]' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`rounded-[3rem] p-12 md:p-24 relative overflow-hidden border shadow-2xl transition-all duration-700 ${
                        isDark 
                            ? 'bg-white/[0.01] border-white/5 shadow-black/40' 
                            : 'bg-white border-slate-200 shadow-[0_20px_50px_rgba(99,102,241,0.02)]'
                    }`}
                >
                    <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-10 h-[1px] bg-sky-500" />
                                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${
                                        isDark ? 'text-sky-400' : 'text-sky-600'
                                    }`}>
                                        The Flexiti Advantage
                                    </span>
                                </motion.div>
                                
                                <h2 className={`text-4xl md:text-6xl font-black font-headline leading-none tracking-tighter transition-colors ${
                                    isDark ? 'text-white' : 'text-slate-900'
                                }`}>
                                    WHY HIGH-GROWTH <br /> COMPANIES CHOOSE US.
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {reasons.map((reason, index) => (
                                    <motion.div 
                                        key={reason.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="space-y-4 group"
                                    >
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 group-hover:scale-105 ${
                                            isDark ? 'bg-zinc-950 border-white/5' : 'bg-slate-50 border-slate-200'
                                        }`}>
                                            {reason.icon}
                                        </div>
                                        <div>
                                            <h4 className={`text-lg font-black font-headline tracking-tighter mb-2 transition-colors group-hover:text-sky-500 ${
                                                isDark ? 'text-white' : 'text-slate-900'
                                            }`}>
                                                {reason.title}
                                            </h4>
                                            <p className={`text-xs font-medium leading-relaxed transition-colors ${
                                                isDark ? 'text-slate-400' : 'text-slate-500'
                                            }`}>
                                                {reason.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive space image frame */}
                        <div className="relative hidden lg:block h-[500px]">
                            {/* Ambient radial glow backlit */}
                            <div className={`absolute -inset-10 blur-[100px] rounded-full opacity-15 pointer-events-none transition-opacity ${
                                isDark ? 'bg-sky-600' : 'bg-sky-400'
                            }`} />
                            
                            <div className={`h-full w-full rounded-[2.5rem] overflow-hidden border p-3 transition-all duration-700 ${
                                isDark 
                                    ? 'bg-white/5 border-white/10' 
                                    : 'bg-white border-slate-200 shadow-xl'
                            }`}>
                                <img
                                    className="h-full w-full object-cover rounded-[2rem] opacity-90 transition-transform duration-[1200ms] hover:scale-103"
                                    alt="Modern architectural space"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbJY7D_iauf102qghO5-q7qhJtewZrrZRclr4sy18VARNDZA82sHWwJzyYiyC2Gcb3uqFlYRtJ_BCZYSaTTTri0xgLE2iiOcheM2ZkBcIP8nsQK50DtqlRgjFsK9l6TllMhy-rQcADpnj2qtmPU_VcY2erOnyhVAm-LiQsDQ2k7n-QnACmi48NYQoFONXbwGG8AmDH4mELLkRO5IyhWuM8VEW7RMaSinh-4ujHgWjQhJTK6a3KQpxE3Jas4AHr9HKb7QHrlVDbiF22"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Ambient background dots overlay */}
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
                </motion.div>
            </div>
        </section>
    );
}
