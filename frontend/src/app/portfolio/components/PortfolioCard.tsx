'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PortfolioItem } from './types'
import IconButton from './ui/IconButton'


interface PortfolioCardProps {
    item: PortfolioItem
    onViewCaseStudy?: (item: PortfolioItem) => void
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onViewCaseStudy }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="flex flex-col gap-4 p-4 rounded-xl bg-black/5 backdrop-blur-md border border-black/10 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onViewCaseStudy?.(item)}
        >
            {/* Image Container */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <img
                    src={item.image}
                    alt={item.alt}
                    // fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Tags */}
                <div className="absolute top-3 left-3 flex gap-2">
                    {item.tags.slice(0, 2).map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 bg-black/60 backdrop-blur-sm text-xs rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                    <span className={`
            px-2 py-1 text-xs rounded-full font-medium
            ${item.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                            item.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-300' :
                                'bg-blue-500/20 text-blue-300'}
          `}>
                        {item.status === 'completed' ? '✓ Completed' :
                            item.status === 'in-progress' ? '🔄 In Progress' : '📅 Upcoming'}
                    </span>
                </div>

                {/* View Button */}
                <div className="absolute bottom-3 right-3">
                    <IconButton
                        icon={<span className="material-symbols-outlined">visibility</span>}
                        onClick={() => onViewCaseStudy?.(item)}
                        variant="glass"
                        size="sm"
                        rounded="full"
                        ariaLabel={`View ${item.title} case study`}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 flex-grow">
                <div className="flex justify-between items-start">
                    <h3 className="text-black text-base font-medium leading-normal group-hover:text-primary transition-colors">
                        {item.title}
                    </h3>
                    <span className="text-text-secondary text-sm">{item.year}</span>
                </div>

                <p className="text-text-secondary text-sm font-normal leading-normal flex-grow">
                    {item.description}
                </p>

                {item.client && (
                    <p className="text-text-secondary text-xs font-light">
                        Client: {item.client}
                    </p>
                )}

                {/* Case Study Link */}
                <Link
                    href={item.caseStudyUrl || '#'}
                    className="view-case-study text-sm font-normal leading-normal mt-2"
                    onClick={(e) => {
                        e.stopPropagation()
                        if (onViewCaseStudy) {
                            onViewCaseStudy(item)
                            e.preventDefault()
                        }
                    }}
                >
                    View Case Study
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
            </div>
        </div>
    )
}

export default PortfolioCard