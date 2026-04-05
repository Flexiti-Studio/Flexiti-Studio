'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { PortfolioItem } from './types';

interface PortfolioCardProps {
    item: PortfolioItem;
    onViewCaseStudy?: (item: PortfolioItem) => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onViewCaseStudy }) => {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className={`group relative flex flex-col h-full rounded-[2.5rem] border overflow-hidden transition-all duration-500 cursor-pointer ${isDark ? 'bg-zinc-900 shadow-white/5 border-white/5 hover:border-blue-500/40' : 'bg-white shadow-slate-200/50 border-slate-200 hover:border-blue-500/40'}`}
            onClick={() => onViewCaseStudy?.(item)}
        >
            {/* Image Section */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border backdrop-blur-md ${isDark ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-white/90 border-blue-100 text-blue-600'}`}>
                        {item.year}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border backdrop-blur-md ${isDark ? 'bg-zinc-800/80 border-white/10 text-slate-400' : 'bg-slate-900/80 border-white/10 text-white'}`}>
                        {item.status.replace('-', ' ')}
                    </span>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_40px_rgba(37,99,235,0.6)]">
                        <span className="material-symbols-outlined text-3xl">north_east</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-8">
                <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-blue-500/60' : 'text-blue-600'}`}>{item.category}</span>
                    <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] opacity-40 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.type}</span>
                </div>

                <h3 className={`text-2xl font-black font-headline tracking-tighter mb-4 group-hover:text-blue-500 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                </h3>

                <p className={`text-sm font-medium leading-relaxed mb-8 line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {item.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className={`text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg border ${isDark ? 'bg-zinc-800 border-white/5 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className={`text-[10px] font-black uppercase tracking-widest transition-all group-hover:text-blue-500 ${isDark ? 'text-white/40' : 'text-slate-400'}`}>View Project</span>
                    <span className="material-symbols-outlined text-blue-500 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
            </div>

            {/* Glow on hover */}
            <div className={`absolute inset-0 -z-10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 ${isDark ? 'bg-blue-600' : 'bg-blue-500'}`} />
        </motion.div>
    );
};

export default PortfolioCard;