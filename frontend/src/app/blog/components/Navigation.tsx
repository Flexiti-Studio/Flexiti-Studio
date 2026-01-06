// components/Navigation.tsx - UPDATED
'use client';

import { useState, useEffect, useMemo } from 'react';
import { Category } from './types';

interface NavigationProps {
    categories?: Category[];
    initialActive?: string;
    onCategoryChange?: (category: Category) => void;
    style?: 'pill' | 'tabs' | 'links';
    orientation?: 'horizontal' | 'vertical';
    className?: string;
}

// Default static categories with icons
const DEFAULT_CATEGORIES: Category[] = [
    { id: 'all', name: 'All', icon: 'checklist_rtl' },
    { id: 'design', name: 'Design', icon: 'palette' },
    { id: 'development', name: 'Development', icon: 'code' },
    { id: 'strategy', name: 'Strategy', icon: 'target' },
    { id: 'case-study', name: 'Case Study', icon: 'book_ribbon' },
    { id: 'security', name: 'Security', icon: 'shield' },
    { id: 'culture', name: 'Culture', icon: 'account_child_invert' },
];

// Icon mapping based on category ID
const ICON_MAP: Record<string, string> = {
    'all': 'checklist_rtl',
    'design': 'palette',
    'development': 'code',
    'strategy': 'target',
    'case-study': 'book_ribbon',
    'security': 'shield',
    'culture': 'account_child_invert',
    // Add more mappings as needed
    'ai': 'psychology',
    'business': 'business_center',
    'technology': 'devices',
    'tutorial': 'school',
    'news': 'newspaper',
};

export default function Navigation({
    categories = DEFAULT_CATEGORIES,
    initialActive = 'all',
    onCategoryChange,
    style = 'pill',
    orientation = 'horizontal',
    className = '',
}: NavigationProps) {
    const [activeId, setActiveId] = useState(initialActive);

    // Update active category if initialActive changes
    useEffect(() => {
        setActiveId(initialActive);
    }, [initialActive]);

    // Add icons to external categories if missing
    const categoriesWithIcons = useMemo(() => {
        return categories.map(category => {
            // If category already has an icon, keep it
            if (category.icon) return category;

            // Otherwise, find icon from ICON_MAP based on category ID
            const icon = ICON_MAP[category.id] || 'category';

            return {
                ...category,
                icon
            };
        });
    }, [categories]);

    const handleClick = (category: Category) => {
        setActiveId(category.id);
        onCategoryChange?.(category);
    };

    // Sort categories: "All" first, then alphabetically
    const sortedCategories = [...categoriesWithIcons].sort((a, b) => {
        if (a.id === 'all') return -1;
        if (b.id === 'all') return 1;
        return a.name.localeCompare(b.name);
    });

    // Style configurations
    const styleConfig = {
        pill: {
            base: 'px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap',
            active: 'bg-primary text-white shadow-md shadow-primary/20',
            inactive: 'bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-muted dark:text-gray-400 hover:border-primary hover:text-primary'
        },
        tabs: {
            base: 'px-4 py-3 border-b-2 text-sm font-medium transition-all whitespace-nowrap',
            active: 'border-primary text-primary dark:text-white',
            inactive: 'border-transparent text-text-muted dark:text-gray-400 hover:text-primary hover:border-gray-300'
        },
        links: {
            base: 'px-3 py-2 text-sm font-medium transition-all whitespace-nowrap',
            active: 'text-primary dark:text-white font-semibold',
            inactive: 'text-text-muted dark:text-gray-400 hover:text-primary'
        }
    }[style];

    return (
        <nav
            className={`
        ${orientation === 'vertical' ? 'flex-col space-y-2' : 'flex gap-2 overflow-x-auto pb-2 scrollbar-hide'}
        ${className}
      `}
            role="navigation"
            aria-label="Category navigation"
        >
            {sortedCategories.map((category) => {
                const isActive = activeId === category.id;

                return (
                    <button
                        key={category.id}
                        onClick={() => handleClick(category)}
                        className={`
              ${styleConfig.base}
              ${isActive ? styleConfig.active : styleConfig.inactive}
              ${orientation === 'vertical' ? 'w-full text-left' : ''}
              flex items-center gap-2 transition-all duration-200
            `}
                        aria-current={isActive ? 'page' : undefined}
                        title={`View ${category.name} articles`}
                    >
                        {category.icon && (
                            <span className="material-symbols-outlined text-base">
                                {category.icon}
                            </span>
                        )}
                        <span className={orientation === 'vertical' ? 'flex-1' : ''}>
                            {category.name}
                        </span>
                        {category.count !== undefined && (
                            <span className={`
                px-2 py-0.5 text-xs rounded-full
                ${isActive ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-800'}
              `}>
                                {category.count}
                            </span>
                        )}
                    </button>
                );
            })}
        </nav>
    );
}