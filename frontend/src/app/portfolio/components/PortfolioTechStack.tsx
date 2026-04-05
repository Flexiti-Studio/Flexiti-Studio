'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const technologies = [
    { name: "React / Next.js", icon: "deployed_code", color: "blue" },
    { name: "Mobile / Flutter", icon: "smartphone", color: "emerald" },
    { name: "Cloud Architecture", icon: "cloud", color: "purple" },
    { name: "AI Ecosystems", icon: "psychology", color: "amber" },
    { name: "Advanced Data", icon: "database", color: "cyan" },
    { name: "Real-time Ops", icon: "sensors", color: "rose" }
];

export default function PortfolioTechStack() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className={`py-32 px-8 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto text-center space-y-16">
                <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`text-[10px] font-black uppercase tracking-[0.4em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
                >
                    Our Core Technology Stack
                </motion.h3>

                <div className="flex flex-wrap justify-center gap-x-16 gap-y-12">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex items-center gap-4 cursor-pointer"
                        >
                            <div className={`p-4 rounded-2xl border transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 ${isDark ? 'bg-zinc-900 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                                <span className={`material-symbols-outlined text-3xl group-hover:text-blue-500 transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-900'}`}>{tech.icon}</span>
                            </div>
                            <span className={`text-lg font-black font-headline tracking-tighter transition-colors duration-500 group-hover:text-blue-500 ${isDark ? 'text-white/60' : 'text-slate-600'}`}>{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
