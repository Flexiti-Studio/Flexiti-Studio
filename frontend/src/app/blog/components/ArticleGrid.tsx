'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import ArticleCard from './ArticleCard';
import { Article, Category } from './types';

interface ArticleGridProps {
    articles: Article[];
    categories?: Category[];
    showFilter?: boolean;
    showPagination?: boolean;
    initialCategory?: string;
    itemsPerPage?: number;
}

export default function ArticleGrid({
    articles,
    categories,
    showFilter = true,
    showPagination = true,
    initialCategory = 'all',
    itemsPerPage = 6,
}: ArticleGridProps) {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    // Reset to page 1 when category changes
    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory]);

    const filteredArticles = useMemo(() => {
        if (activeCategory === 'all') return articles;
        return articles.filter(article =>
            article.category.toLowerCase().replace(/\s+/g, '-') === activeCategory
        );
    }, [articles, activeCategory]);

    const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredArticles.length);
    const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        const navElement = document.getElementById('blog-feed-nav');
        if (navElement) {
            navElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="space-y-12">
            {/* Results Count & Sort */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-dashed border-slate-200 dark:border-white/5">
                <p className={`text-[11px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Showing <span className={isDark ? 'text-white' : 'text-slate-900'}>{startIndex + 1}-{endIndex}</span> of <span className={isDark ? 'text-white' : 'text-slate-900'}>{filteredArticles.length}</span> Insights
                </p>

                <div className="relative min-w-[180px] w-full sm:w-auto">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">sort</span>
                    <select
                        className={`w-full h-12 appearance-none rounded-xl pl-12 pr-10 text-[10px] font-black tracking-widest uppercase outline-none border transition-all cursor-pointer ${isDark ? 'bg-white/5 border-white/5 text-white hover:bg-white/10' : 'bg-slate-50 border-slate-100 text-slate-900 hover:bg-white'}`}
                        onChange={(e) => console.log('Sort by:', e.target.value)}
                    >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="popular">Most Popular</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
                </div>
            </div>

            {/* Articles Grid */}
            {paginatedArticles.length > 0 ? (
                <div className="flex flex-col gap-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <AnimatePresence mode="popLayout">
                            {paginatedArticles.map((article, idx) => (
                                <ArticleCard key={article.id} article={article} index={idx} />
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Pagination */}
                    {showPagination && totalPages > 1 && (
                        <div className="flex items-center justify-center gap-6 pt-12">
                            <button
                                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className={`w-14 h-14 flex items-center justify-center rounded-2xl transition-all border disabled:opacity-30 ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50'}`}
                            >
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            
                            <div className={`px-8 py-4 rounded-2xl font-black text-xs border ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
                                {currentPage} <span className="text-slate-400 mx-2">/</span> {totalPages}
                            </div>

                            <button
                                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className={`w-14 h-14 flex items-center justify-center rounded-2xl transition-all border disabled:opacity-30 ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50'}`}
                            >
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-[3rem] p-32 text-center border-4 border-dashed transition-colors ${isDark ? 'bg-zinc-900/40 border-white/5' : 'bg-slate-50 border-slate-200'}`}
                >
                    <span className="material-symbols-outlined text-7xl text-slate-400 mb-6 block font-light">edit_note</span>
                    <p className={`font-black text-2xl mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>No articles found</p>
                    <p className="text-sm font-medium text-slate-500">We haven&apos;t published any articles in this category yet.</p>
                    <button
                        onClick={() => setActiveCategory('all')}
                        className={`mt-10 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 ${isDark ? 'bg-white text-black hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-black'}`}
                    >
                        View all articles
                    </button>
                </motion.div>
            )}
        </div>
    );
}