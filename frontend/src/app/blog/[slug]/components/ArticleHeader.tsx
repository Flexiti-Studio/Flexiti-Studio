'use client';

import { Bookmark, Share2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Article } from './types';

interface ArticleHeaderProps {
    article: Article;
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: article.title,
                text: article.description,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
        }
    };

    return (
        <header className="w-full px-6 pt-16 pb-12 md:pt-28 md:pb-20 relative flex justify-center overflow-hidden">
            {/* Ambient Glow */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 blur-[120px] opacity-20 pointer-events-none ${isDark ? 'bg-blue-500/20' : 'bg-blue-600/10'}`} />

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-[900px] flex flex-col items-center text-center relative z-10"
            >
                {/* Metadata */}
                <div className="flex items-center gap-4 mb-8">
                    <span className={`px-4 py-1.5 rounded-xl text-[9px] font-black tracking-widest uppercase border ${isDark ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                        {article.category}
                    </span>
                    <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
                    <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        {article.readTime || '8 min read'}
                        {article.readTimeDetails && <span className="ml-1 opacity-60">• {article.readTimeDetails.formatted}</span>}
                    </span>
                    <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
                    <time className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        {article.date}
                    </time>
                </div>

                {/* Title */}
                <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tighter mb-10 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {article.title}
                </h1>

                {/* Excerpt */}
                <p className={`text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mb-12 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {article.description}
                </p>

                {/* Author & Actions */}
                <div className={`flex flex-col sm:flex-row items-center gap-8 p-6 rounded-[2.5rem] border ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="flex items-center gap-4">
                        <div className={`relative size-14 rounded-full overflow-hidden border-2 shadow-xl ${isDark ? 'border-white/10' : 'border-white'}`}>
                            <Image
                                src={article.author.avatar}
                                alt={article.author.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <span className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                {article.author.name}
                            </span>
                            <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                {article.author.title}
                            </span>
                        </div>
                    </div>

                    <div className={`hidden sm:block h-10 w-px ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}></div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleShare}
                            className={`p-3 rounded-xl transition-all border ${isDark ? 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10' : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                            title="Share article"
                        >
                            <Share2 className="w-5 h-5" />
                        </button>
                        <button
                            className={`p-3 rounded-xl transition-all border ${isDark ? 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10' : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                            title="Bookmark article"
                        >
                            <Bookmark className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </header>
    );
}