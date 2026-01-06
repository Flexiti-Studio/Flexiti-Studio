// components/ArticleGrid.tsx
'use client';

import { useState, useMemo, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import Navigation from './Navigation';
import { Article, Category } from './types';
import { PaginationC } from '@/components/reuseables/Pagination';

interface ArticleGridProps {
    articles: Article[];
    categories?: Category[];
    showFilter?: boolean;
    showPagination?: boolean;
    initialCategory?: string;
    itemsPerPage?: number; // New prop to control items per page
}

export default function ArticleGrid({
    articles,
    categories,
    showFilter = true,
    showPagination = true,
    initialCategory = 'all',
    itemsPerPage = 6, // Default: 6 articles per page
}: ArticleGridProps) {
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [currentPage, setCurrentPage] = useState(1);
    console.log(articles, "artics")

    // Reset to page 1 when category changes
    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory]);

    // Extract categories from articles if not provided
    const articleCategories = useMemo(() => {
        if (categories) return categories;

        // Generate categories from articles
        const uniqueCategories = Array.from(
            new Set(articles.map(article => article.category))
        );

        return [
            { id: 'all', name: 'All', count: articles.length },
            ...uniqueCategories.map(category => ({
                id: category.toLowerCase().replace(/\s+/g, '-'),
                name: category,
                count: articles.filter(a => a.category === category).length,
            })),
        ];
    }, [articles, categories]);

    // Filter articles based on selected category
    const filteredArticles = useMemo(() => {
        if (activeCategory === 'all') return articles;
        return articles.filter(article =>
            article.category.toLowerCase().replace(/\s+/g, '-') === activeCategory
        );
    }, [articles, activeCategory]);

    // Pagination calculations
    const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredArticles.length);
    const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

    const handleCategoryChange = (category: Category) => {
        setActiveCategory(category.id);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Optional: Scroll to top when page changes
        window.scrollTo({ top: 1300, behavior: 'smooth' });
    };

    return (
        <div className="space-y-8">
            {/* Category Filter */}
            {showFilter && articleCategories.length > 1 && (
                <div className="mb-8">
                    <Navigation
                        categories={articleCategories}
                        initialActive={activeCategory}
                        onCategoryChange={handleCategoryChange}
                        style="pill"
                    />
                </div>
            )}

            {/* Results Count */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-text-muted dark:text-gray-400">
                    Showing <span className="font-bold text-text-main dark:text-white">
                        {startIndex + 1}-{endIndex}
                    </span> of <span className="font-bold text-text-main dark:text-white">
                        {filteredArticles.length}
                    </span> articles
                    {activeCategory !== 'all' && (
                        <span className="ml-2">
                            in <span className="font-bold text-primary">
                                {articleCategories.find(c => c.id === activeCategory)?.name}
                            </span>
                        </span>
                    )}
                </p>

                {/* Optional: Sort dropdown */}
                <select
                    className="text-sm border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 bg-transparent"
                    onChange={(e) => console.log('Sort by:', e.target.value)}
                >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="popular">Most Popular</option>
                </select>
            </div>

            {/* Articles Grid */}
            {paginatedArticles.length > 0 ? (
                <div className='flex flex-col'>
                    {/* 6 Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
                        {paginatedArticles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>

                    {/* Pagination - Only show if needed */}
                    {showPagination && totalPages > 1 && (
                        <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                            <PaginationC
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center py-12">
                    <div className="text-6xl mb-4">📝</div>
                    <h3 className="text-xl font-bold mb-2">No articles found</h3>
                    <p className="text-text-muted dark:text-gray-400">
                        No articles in the &apos;{articleCategories.find(c => c.id === activeCategory)?.name}&apos; category yet.
                    </p>
                    <button
                        onClick={() => setActiveCategory('all')}
                        className="mt-4 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                        View all articles
                    </button>
                </div>
            )}
        </div>
    );
}