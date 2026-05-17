'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Article } from './types';

interface ArticleCardProps {
    article: Article;
    index?: number;
}

export default function ArticleCard({ article, index = 0 }: ArticleCardProps) {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="h-full"
        >
            <Link href={`/blog/${article.slug}`} className="block h-full group">
                <article className={`flex flex-col rounded-[2rem] overflow-hidden border transition-all duration-500 h-full ${
                    isDark 
                        ? 'bg-zinc-950/40 border-white/5 hover:border-white/10 hover:bg-zinc-950/60 shadow-2xl' 
                        : 'bg-white border-slate-100 shadow-sm hover:shadow-md hover:bg-slate-50/30'
                }`}>
                    
                    {/* Image Section aspect-[16/10] */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-t-[2rem] border-b border-slate-100 dark:border-white/5">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-102"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

                        {/* Category Badge overlay */}
                        <div className="absolute top-6 left-6">
                            <span className={`px-3.5 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase border ${
                                isDark 
                                    ? 'bg-black/60 text-white border-white/10' 
                                    : 'bg-white/95 text-slate-800 border-slate-200 shadow-sm'
                            }`}>
                                {article.category}
                            </span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col flex-1 p-8 md:p-10 space-y-6">
                        
                        {/* Title & Description stack */}
                        <div className="space-y-3 flex-1">
                            <h3 className={`text-xl md:text-2xl font-black font-headline leading-tight tracking-tight transition-colors duration-300 group-hover:text-sky-500 line-clamp-2 ${
                                isDark ? 'text-white' : 'text-slate-900'
                            }`}>
                                {article.title}
                            </h3>
                            
                            <p className={`text-xs font-medium leading-relaxed line-clamp-3 transition-colors duration-500 ${
                                isDark ? 'text-slate-400' : 'text-slate-500'
                            }`}>
                                {article.description}
                            </p>
                        </div>

                        {/* Faint Divider & Author Metadata Footer */}
                        <div className="pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {article.author.avatar ? (
                                    <div className="relative w-6 h-6 rounded-full overflow-hidden border border-slate-200 dark:border-white/10 shrink-0">
                                        <img
                                            src={article.author.avatar}
                                            alt={article.author.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                                        isDark ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-500'
                                    }`}>
                                         {/* Custom user SVG */}
                                         <svg className="w-3.5 h-3.5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                         </svg>
                                    </div>
                                )}
                                
                                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600 dark:text-slate-400">
                                    <span>{article.author.name}</span>
                                    <span className="text-slate-300 dark:text-white/10">•</span>
                                    <span>{article.readTime || '3 min read'}</span>
                                </div>
                            </div>
                            
                            {/* Read More Inline SVG Outward Arrow */}
                            <div className="w-6 h-6 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:border-sky-500/30 group-hover:bg-sky-500/5 transition-all duration-300">
                                <svg className="w-3 h-3 text-slate-500 dark:text-slate-400 group-hover:text-sky-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </article>
            </Link>
        </motion.div>
    );
}