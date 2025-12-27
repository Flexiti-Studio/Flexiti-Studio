import React from 'react'
import Image from 'next/image'
import { PortfolioItem } from './types'


interface PortfolioCardProps {
    item: PortfolioItem
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
    return (
        <div className="group overflow-hidden rounded-xl">
            <div className="relative h-80 w-full overflow-hidden">
                <img
                    src={item.image}
                    alt={item.alt}
                    // fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
            <div className="p-6 bg-white dark:bg-gray-800/50 border-x border-b border-gray-200 dark:border-gray-800 rounded-b-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                    {item.category}
                </p>
            </div>
        </div>
    )
}

export default PortfolioCard