'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const tabs = ['All Products', 'SaaS Platforms', 'Business Tools', 'AI & Automation', 'Internal Tools', 'Experimental'];

interface ProductsCategoryTabsProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export default function ProductsCategoryTabs({ activeTab, setActiveTab }: ProductsCategoryTabsProps) {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className={`relative z-20 -mt-8 pb-16 px-8 transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <div className={`max-w-7xl mx-auto flex flex-wrap justify-center gap-2 p-2 rounded-full border transition-all duration-500 backdrop-blur-xl ${isDark ? 'bg-zinc-900/60 border-white/10' : 'bg-slate-100/60 border-slate-200'}`}>
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 cursor-pointer ${
                            activeTab === tab
                                ? 'text-white'
                                : isDark ? 'text-slate-500 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                        }`}
                    >
                        {activeTab === tab && (
                            <motion.div
                                layoutId="activeTabProduct"
                                className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-lg shadow-blue-600/20"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {tab}
                    </button>
                ))}
            </div>
        </section>
    );
}
