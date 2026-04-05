'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const reasons = [
    {
        icon: 'speed',
        title: 'Fast Execution',
        desc: 'We prioritize momentum without sacrificing structural integrity.',
    },
    {
        icon: 'layers',
        title: 'Scalable Architecture',
        desc: 'Systems designed to handle 10x growth from day one.',
    },
    {
        icon: 'verified',
        title: 'Business Focused',
        desc: 'We build for ROI, not just for the sake of the tech stack.',
    },
    {
        icon: 'security',
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
        <section className={`py-48 px-8 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`rounded-[3rem] p-12 md:p-24 relative overflow-hidden border shadow-2xl ${isDark ? 'bg-zinc-900 border-white/5 shadow-white/5' : 'bg-white border-slate-200 shadow-slate-200/40'}`}
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
                                    <div className="w-10 h-[1px] bg-blue-500" />
                                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>The Flexiti Advantage</span>
                                </motion.div>
                                
                                <h2 className={`text-4xl md:text-6xl font-black font-headline leading-none tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
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
                                        className="space-y-4"
                                    >
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${isDark ? 'bg-black border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                                            <span className="material-symbols-outlined text-xl text-blue-500">{reason.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className={`text-lg font-black font-headline tracking-tighter mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{reason.title}</h4>
                                            <p className={`text-xs font-medium leading-relaxed opacity-60 ${isDark ? 'text-white' : 'text-slate-900'}`}>{reason.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative hidden lg:block h-[500px]">
                            <div className={`absolute -inset-10 blur-[100px] rounded-full opacity-20 ${isDark ? 'bg-blue-600' : 'bg-blue-400'}`} />
                            <img
                                className={`h-full w-full object-cover rounded-[2.5rem] border opacity-80 ${isDark ? 'border-white/10' : 'border-slate-200'}`}
                                alt="Modern architectural space"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbJY7D_iauf102qghO5-q7qhJtewZrrZRclr4sy18VARNDZA82sHWwJzyYiyC2Gcb3uqFlYRtJ_BCZYSaTTTri0xgLE2iiOcheM2ZkBcIP8nsQK50DtqlRgjFsK9l6TllMhy-rQcADpnj2qtmPU_VcY2erOnyhVAm-LiQsDQ2k7n-QnACmi48NYQoFONXbwGG8AmDH4mELLkRO5IyhWuM8VEW7RMaSinh-4ujHgWjQhJTK6a3KQpxE3Jas4AHr9HKb7QHrlVDbiF22"
                            />
                        </div>
                    </div>

                    {/* Background Texture */}
                    <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${isDark ? 'bg-[radial-gradient(#fff_1px,transparent_1px)]' : 'bg-[radial-gradient(#000_1px,transparent_1px)]'} [background-size:40px_40px]`} />
                </motion.div>
            </div>
        </section>
    );
}
