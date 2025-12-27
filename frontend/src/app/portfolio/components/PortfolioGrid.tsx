'use client'

import React, { useState } from 'react'
import PortfolioCard from './PortfolioCard'
import FilterChips from './FilterChips'

import { PortfolioItem, PortfolioCategory } from './types'
import { portfolioItems, getFilteredPortfolioItems } from './portfolio-data'
import CaseStudyModal from './CaseStudyModal'

interface PortfolioGridProps {
    initialCategory?: PortfolioCategory
    showFilter?: boolean
    items?: PortfolioItem[]
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({
    initialCategory = 'all',
    showFilter = true,
    items = portfolioItems
}) => {
    const [activeCategory, setActiveCategory] = useState<PortfolioCategory>(initialCategory)
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

    const filteredItems = initialCategory === 'all'
        ? items
        : getFilteredPortfolioItems(activeCategory)

    // Calculate item counts per category
    const getItemCounts = () => {
        const counts: Record<PortfolioCategory, number> = {
            'all': items.length,
            'software': items.filter(i => i.category === 'software').length,
            'mobile': items.filter(i => i.category === 'mobile').length,
            'ai-systems': items.filter(i => i.category === 'ai-systems').length,
            'hardware': items.filter(i => i.category === 'hardware').length,
            'digital-training': items.filter(i => i.category === 'digital-training').length,
            'design': items.filter(i => i.category === 'design').length,
            'saas': items.filter(i => i.category === 'saas').length
        }
        return counts
    }

    const itemCounts = getItemCounts()

    const handleViewCaseStudy = (item: PortfolioItem) => {
        setSelectedItem(item)
    }

    return (
        <div className="flex flex-col gap-8">
            {showFilter && (
                <FilterChips
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    itemCounts={itemCounts}
                />
            )}

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {filteredItems.map((item) => (
                    <PortfolioCard
                        key={item.id}
                        item={item}
                        onViewCaseStudy={handleViewCaseStudy}
                    />
                ))}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-5xl mb-4">📭</div>
                    <h3 className=" text-xl font-semibold mb-2">No projects found</h3>
                    <p className="text-text-secondary">
                        No projects match the selected filter. Try a different category.
                    </p>
                </div>
            )}

            {/* Case Study Modal */}
            <CaseStudyModal
                item={selectedItem}
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
            />
        </div>
    )
}

export default PortfolioGrid