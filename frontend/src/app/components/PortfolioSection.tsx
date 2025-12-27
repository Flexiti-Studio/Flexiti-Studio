import React from 'react'
import PortfolioCard from './PortfolioCard'
import { portfolioItems } from './constants'


const PortfolioSection: React.FC = () => {
    return (
        <section id="portfolio" className="py-16 sm:py-24">
            <h2 className="px-4 pb-8 pt-5 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Our Work
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {portfolioItems.map((item) => (
                    <PortfolioCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    )
}

export default PortfolioSection