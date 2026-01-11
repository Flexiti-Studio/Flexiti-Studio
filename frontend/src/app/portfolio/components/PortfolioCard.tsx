'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PortfolioItem } from './types'
import IconButton from './ui/IconButton'

interface PortfolioCardProps {
    item: PortfolioItem
    onViewCaseStudy?: (item: PortfolioItem) => void
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onViewCaseStudy }) => {
    return (
        <div
            className="group flex flex-col h-full p-3 rounded-2xl bg-zinc-200/40 border border-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-zinc-800/60 hover:border-primary/40 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] cursor-pointer"
            onClick={() => onViewCaseStudy?.(item)}
        >
            {/* 1. Image Container with "Inner Glow" */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                <img
                    src={item.image}
                    alt={item.alt}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Subtle Overlay for Badge Contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-60" />

                {/* Status Badge (Top Right) */}
                <div className="absolute top-3 right-3">
                    <span className={`
                        px-2.5 py-1 text-[10px] rounded-md font-bold tracking-wider uppercase border backdrop-blur-md
                        ${item.status === 'completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                            item.status === 'in-progress' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                                'bg-blue-500/10 text-blue-400 border-blue-500/20'}
                    `}>
                        {item.status.replace('-', ' ')}
                    </span>
                </div>

                {/* Visibility Button (Bottom Right) */}
                <div className="absolute bottom-3 right-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <IconButton
                        icon={<span className="material-symbols-outlined ">visibility</span>}
                        onClick={() => onViewCaseStudy?.(item)}
                        variant="glass"
                        className="bg-primary/80 hover:bg-primary border-none shadow-lg"
                        ariaLabel="View Details"
                    />
                </div>
            </div>

            {/* 2. Content Area */}
            <div className="flex flex-col flex-grow p-3 pt-4">
                {/* Title & Year */}
                <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className=" text-lg font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                        {item.title}
                    </h3>
                    <span className="font-mono text-sm shrink-0">
                        {item.year}
                    </span>
                </div>

                {/* Description (Always Show) */}
                <p className=" text-sm leading-relaxed line-clamp-2 mb-4">
                    {item.description}
                </p>

                {/* Tags (Always Show) */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] font-semibold  bg-black-200 px-2 py-0.5 rounded border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer Link (Always Show) */}
                <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-primary uppercase group-hover:gap-3 transition-all">
                        <span>View Project</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard