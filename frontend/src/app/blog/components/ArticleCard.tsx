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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
        >
            <Link href={`/blog/${article.slug}`} className="block h-full group">
                <article className={`flex flex-col rounded-[2.5rem] overflow-hidden border transition-all duration-500 h-full ${isDark ? 'bg-zinc-900 border-white/5 shadow-2xl shadow-black/20 hover:border-white/10' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/40 hover:bg-slate-50'}`}>
                    {/* Image Section */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                        {/* Category Badge */}
                        <div className="absolute top-6 left-6">
                            <span className={`px-4 py-1.5 rounded-xl backdrop-blur-md text-[9px] font-black tracking-widest uppercase border ${isDark ? 'bg-black/40 text-blue-400 border-white/10' : 'bg-white/90 text-blue-600 border-slate-100 shadow-sm'}`}>
                                {article.category}
                            </span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col flex-1 p-8 md:p-10">
                        {/* Metadata */}
                        <div className="flex items-center gap-4 mb-6 pt-1">
                            <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                {article.readTime || '5 min read'}
                            </span>
                            <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
                            <time className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                {article.date}
                            </time>
                        </div>

                        {/* Title */}
                        <h3 className={`text-xl md:text-2xl font-black font-headline mb-6 leading-tight transition-colors group-hover:text-blue-500 line-clamp-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {article.title}
                        </h3>

                        {/* Description */}
                        <p className={`text-sm font-medium leading-relaxed mb-8 line-clamp-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            {article.description}
                        </p>

                        {/* Footer */}
                        <div className="mt-auto pt-8 border-t border-dashed border-slate-200 dark:border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {article.author.avatar ? (
                                    <div className={`relative size-8 rounded-full overflow-hidden border ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                                        <img
                                            src={article.author.avatar}
                                            alt={article.author.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>
                                         <span className="material-symbols-outlined text-[18px]">person</span>
                                    </div>
                                )}
                                <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white/80' : 'text-slate-900'}`}>
                                    {article.author.name}
                                </span>
                            </div>
                            
                            <div className={`flex items-center gap-2 text-[9px] font-black uppercase tracking-widest transition-all group-hover:gap-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                               Read more
                               <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                            </div>
                        </div>
                    </div>
                </article>
            </Link>
        </motion.div>
    );
}