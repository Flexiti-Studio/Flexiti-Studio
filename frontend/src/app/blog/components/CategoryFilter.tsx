// components/CategoryFilter.tsx
'use client';

import { useState } from 'react';
import { Category } from './types';

const categories: Category[] = [
    { id: 'all', name: 'All', isActive: true },
    { id: 'design', name: 'Design', isActive: false },
    { id: 'development', name: 'Development', isActive: false },
    { id: 'strategy', name: 'Strategy', isActive: false },
    { id: 'case-study', name: 'Case Study', isActive: false },
    { id: 'security', name: 'Security', isActive: false },
    { id: 'culture', name: 'Culture', isActive: false },
];

export default function CategoryFilter() {
    const [activeCategories, setActiveCategories] = useState(categories);

    const handleCategoryClick = (id: string) => {
        setActiveCategories(prev =>
            prev.map(cat => ({
                ...cat,
                isActive: cat.id === id,
            }))
        );
    };

    return (
        <div className="flex gap-2 overflow-x-auto pb-2 pl-1 scrollbar-hide">
            {activeCategories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${category.isActive
                            ? 'bg-primary text-white shadow-md shadow-primary/20'
                            : 'bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-muted dark:text-gray-400 hover:border-primary hover:text-primary'
                        }`}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
}