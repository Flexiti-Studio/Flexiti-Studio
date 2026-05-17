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
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-white/5">
                <p className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Showing <span className={isDark ? 'text-white' : 'text-slate-900'}>{startIndex + 1}-{endIndex}</span> of <span className={isDark ? 'text-white' : 'text-slate-900'}>{filteredArticles.length}</span> Insights
                </p>

                <div className="relative min-w-[180px] w-full sm:w-auto">
                    {/* Custom SVG Sort Icon */}
                    <svg className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                    </svg>
                    
                    <select
                        className={`w-full h-11 appearance-none rounded-full pl-12 pr-10 text-[9px] font-bold tracking-widest uppercase outline-none border transition-all cursor-pointer ${
                            isDark 
                                ? 'bg-zinc-950 border-white/5 text-white hover:bg-zinc-900' 
                                : 'bg-slate-50 border-slate-200 text-slate-900 hover:bg-white'
                        }`}
                        onChange={(e) => console.log('Sort by:', e.target.value)}
                    >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="popular">Most Popular</option>
                    </select>
                    
                    {/* Custom SVG chevron dropdown icon */}
                    <svg className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>

            {/* Articles Grid */}
            {paginatedArticles.length > 0 ? (
                <div className="flex flex-col gap-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatePresence mode="popLayout">
                            {paginatedArticles.map((article, idx) => (
                                <ArticleCard key={article.id} article={article} index={idx} />
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Pagination */}
                    {showPagination && totalPages > 1 && (
                        <div className="flex items-center justify-center gap-4 pt-12">
                            <button
                                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className={`w-12 h-12 flex items-center justify-center rounded-full transition-all border disabled:opacity-35 ${
                                    isDark 
                                        ? 'bg-zinc-900 border-white/5 text-white hover:bg-zinc-800' 
                                        : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50'
                                }`}
                            >
                                <svg className="w-4 h-4 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            
                            <div className={`px-6 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest border transition-colors duration-500 ${
                                isDark ? 'bg-zinc-900 border-white/5 text-white' : 'bg-white border-slate-200 text-slate-900'
                            }`}>
                                {currentPage} <span className="text-slate-400 dark:text-white/20 mx-1.5">/</span> {totalPages}
                            </div>

                            <button
                                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className={`w-12 h-12 flex items-center justify-center rounded-full transition-all border disabled:opacity-35 ${
                                    isDark 
                                        ? 'bg-zinc-900 border-white/5 text-white hover:bg-zinc-800' 
                                        : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50'
                                }`}
                            >
                                <svg className="w-4 h-4 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-[2rem] p-32 text-center border border-dashed transition-colors duration-500 ${
                        isDark ? 'bg-zinc-950/40 border-white/5' : 'bg-slate-50 border-slate-200'
                    }`}
                >
                    <svg className="w-12 h-12 text-slate-400 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    <p className={`font-bold text-lg mb-2 transition-colors duration-500 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        No articles found
                    </p>
                    <p className="text-xs font-medium text-slate-500">
                        We haven&apos;t published any articles in this category yet.
                    </p>
                    <button
                        onClick={() => setActiveCategory('all')}
                        className={`mt-8 px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 border ${
                            isDark ? 'bg-white text-black border-white hover:bg-slate-100' : 'bg-slate-900 text-white border-slate-900 hover:bg-black'
                        }`}
                    >
                        View all articles
                    </button>
                </motion.div>
            )}
        </div>
    );
}