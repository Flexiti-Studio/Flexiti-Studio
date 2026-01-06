// components/MobileArticleGrid.tsx
'use client';

import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import ArticleGrid from './ArticleGrid';
import { Article, Category } from './types';

interface MobileArticleGridProps {
    articles: Article[];
    categories?: Category[];
}

export default function MobileArticleGrid({
    articles,
    categories,
}: MobileArticleGridProps) {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <div className="lg:hidden">
            {/* Filter Toggle Button */}
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold">Articles</h2>
                <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-full text-sm"
                >
                    {isFilterOpen ? (
                        <>
                            <X className="w-4 h-4" />
                            Close Filters
                        </>
                    ) : (
                        <>
                            <Filter className="w-4 h-4" />
                            Filter Categories
                        </>
                    )}
                </button>
            </div>

            {/* Filter Panel */}
            {isFilterOpen && (
                <div className="mb-6 p-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-surface-light dark:bg-surface-dark">
                    <ArticleGrid
                        articles={articles}
                        categories={categories}
                        showFilter={true}
                    />
                </div>
            )}

            {/* Articles (without filter UI when filter is open) */}
            {!isFilterOpen && (
                <div className="grid grid-cols-1 gap-6">
                    {articles.map((article) => (
                        <div key={article.id} className="border rounded-xl p-4">
                            {/* Simplified article preview for mobile */}
                            <h3 className="font-bold mb-2">{article.title}</h3>
                            <p className="text-sm text-text-muted line-clamp-2 mb-3">
                                {article.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                                    {article.category}
                                </span>
                                <span className="text-xs text-text-muted">
                                    {article.readTime}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}