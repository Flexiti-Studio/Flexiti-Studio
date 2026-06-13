'use client'

import React from 'react'
import { categoryLabels } from './portfolio-data'
import { PortfolioCategory } from './types'

interface FilterChipsProps {
    activeCategory: PortfolioCategory
    onCategoryChange: (category: PortfolioCategory) => void
    itemCounts?: Record<PortfolioCategory, number>
}

const FilterChips: React.FC<FilterChipsProps> = ({
    activeCategory,
    onCategoryChange,
    itemCounts
}) => {
    const categories: PortfolioCategory[] = [
        'all',
        'software',
        'mobile',
        'ai-systems',
        'hardware',
        'digital-training'
    ]

    return (
        <div className="flex gap-3 p-3 flex-wrap justify-center mb-10">
            {categories.map((category) => {
                const isActive = activeCategory === category

                return (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`
              flex h-8 shrink-0 items-center justify-center gap-x-2
              cursor-pointer
              rounded-full px-4 transition-all duration-300
              ${isActive
                                ? 'bg-blue-400  text-white shadow-lg'
                                : 'bg-secondary-dark  hover:bg-primary/50'
                            }
              hover:scale-105
            `}
                    >
                        <span className="text-sm font-medium leading-normal">
                            {categoryLabels[category]}
                        </span>
                        {itemCounts && itemCounts[category] > 0 && (
                            <span className={`
                text-xs px-1.5 py-0.5 rounded-full ml-1
                ${isActive ? 'bg-white/20' : 'bg-black/20'}
              `}>
                                {itemCounts[category]}
                            </span>
                        )}
                    </button>
                )
            })}
        </div>
    )
}

export default FilterChips