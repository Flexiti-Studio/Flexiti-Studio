'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const stats = [
    { value: '12', label: 'Active SaaS Tools' },
    { value: '85k', label: 'End Users' },
    { value: '1.2M', label: 'Lines of Code' },
    { value: '06', label: 'In Development' },
];

export default function ProductsStats() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className={`py-32 px-8 transition-colors duration-500 border-y ${isDark ? 'bg-black border-white/5' : 'bg-white border-slate-200'}`}>
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-20">
                {stats.map((stat, index) => (
                    <motion.div 
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center space-y-4"
                    >
                        <div className={`text-4xl md:text-6xl font-black font-headline tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</div>
                        <div className={`text-[10px] font-black uppercase tracking-[0.3em] opacity-40 ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
