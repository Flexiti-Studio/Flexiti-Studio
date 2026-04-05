'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { PortfolioItem } from './types';

interface CaseStudyModalProps {
    item: PortfolioItem | null;
    isOpen: boolean;
    onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ item, isOpen, onClose }) => {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <AnimatePresence>
            {isOpen && item && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-[10px]"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ type: 'spring', duration: 0.7, bounce: 0.2 }}
                        className={`relative w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col rounded-[3rem] border shadow-[0_0_80px_rgba(0,0,0,0.5)] ${isDark ? 'bg-zinc-950 border-white/5' : 'bg-white border-slate-200'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className={`p-8 md:p-12 border-b flex justify-between items-start ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                                        {item.category}
                                    </span>
                                    <span className={`text-xs font-black uppercase tracking-widest opacity-30 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.year}</span>
                                </div>
                                <h2 className={`text-4xl md:text-6xl font-black font-headline tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h2>
                                {item.client && (
                                    <p className={`text-xs font-black uppercase tracking-widest opacity-50 ${isDark ? 'text-white' : 'text-slate-900'}`}>Project for: {item.client}</p>
                                )}
                            </div>
                            <button 
                                onClick={onClose}
                                className={`p-4 rounded-full transition-all group ${isDark ? 'bg-zinc-900 hover:bg-zinc-800 text-white' : 'bg-slate-50 hover:bg-slate-100 text-slate-900'}`}
                            >
                                <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">close</span>
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="overflow-y-auto p-8 md:p-12 custom-scrollbar">
                            <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-16 shadow-2xl group">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                                <div className="lg:col-span-2 space-y-12">
                                    <section className="space-y-6">
                                        <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                            <span className="w-1.5 h-1.5 rounded-full bg-current" /> Overview
                                        </h3>
                                        <p className={`text-xl md:text-2xl font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                            {item.description}
                                        </p>
                                    </section>

                                    <section className="space-y-6">
                                        <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                                            <span className="w-1.5 h-1.5 rounded-full bg-current" /> Technologies
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map(tag => (
                                                <span key={tag} className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border ${isDark ? 'bg-zinc-900 border-white/5 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </section>
                                </div>

                                <div className="space-y-8">
                                    <div className={`p-8 rounded-[2rem] border ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                                        <div className="space-y-8">
                                            <div>
                                                <h4 className={`text-[10px] font-black uppercase tracking-widest mb-2 opacity-40 ${isDark ? 'text-white' : 'text-slate-900'}`}>Status</h4>
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                                    <span className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.status}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className={`text-[10px] font-black uppercase tracking-widest mb-2 opacity-40 ${isDark ? 'text-white' : 'text-slate-900'}`}>Industry</h4>
                                                <span className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.category}</span>
                                            </div>
                                            <div>
                                                <h4 className={`text-[10px] font-black uppercase tracking-widest mb-2 opacity-40 ${isDark ? 'text-white' : 'text-slate-900'}`}>Year</h4>
                                                <span className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.year}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4 pt-4">
                                        <button className={`w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-2xl flex items-center justify-center gap-3 ${isDark ? 'bg-white text-black hover:bg-slate-100 shadow-white/5' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20'}`}>
                                            View Live Project
                                            <span className="material-symbols-outlined text-lg">north_east</span>
                                        </button>
                                        <button className={`w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all border flex items-center justify-center gap-3 ${isDark ? 'bg-transparent border-white/10 text-white hover:bg-white/5' : 'bg-transparent border-slate-200 text-slate-900 hover:bg-slate-50'}`}>
                                            Inquire Details
                                            <span className="material-symbols-outlined text-lg">mail</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CaseStudyModal;