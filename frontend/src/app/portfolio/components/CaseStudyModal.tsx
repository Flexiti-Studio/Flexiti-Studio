'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PortfolioItem } from './types'

import IconButton from './ui/IconButton'
import Button from '@/app/services/components/ui/Button'

interface CaseStudyModalProps {
    item: PortfolioItem | null
    isOpen: boolean
    onClose: () => void
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ item, isOpen, onClose }) => {
    if (!isOpen || !item) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div
                className="bg-background-dark border border-secondary-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="sticky top-0 z-10 bg-background-dark/90 backdrop-blur-sm border-b border-secondary-dark p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-medium">
                                    {item.category.toUpperCase()}
                                </span>
                                <span className="text-text-secondary text-sm">{item.year}</span>
                            </div>
                            <h2 className="text-2xl font-bold ">{item.title}</h2>
                            {item.client && (
                                <p className="text-text-secondary mt-1">Client: {item.client}</p>
                            )}
                        </div>
                        <IconButton
                            icon={<span className="material-symbols-outlined">close</span>}
                            onClick={onClose}
                            variant="glass"
                            size="sm"
                            ariaLabel="Close modal"
                        />
                    </div>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                    {/* Hero Image */}
                    <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-6">
                        <img
                            src={item.image}
                            alt={item.alt}

                            className="object-cover"
                            sizes="100vw"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <h3 className="text-white text-lg font-semibold mb-3">Overview</h3>
                        <p className="text-text-secondary leading-relaxed">{item.description}</p>
                    </div>

                    {/* Tags */}
                    <div className="mb-8">
                        <h3 className="text-white text-lg font-semibold mb-3">Technologies & Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1.5 bg-secondary-dark text-text-secondary rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-secondary-dark/50 rounded-xl p-4">
                            <div className="text-primary text-sm font-semibold mb-1">STATUS</div>
                            <div className="text-white font-medium">{item.status}</div>
                        </div>
                        <div className="bg-secondary-dark/50 rounded-xl p-4">
                            <div className="text-primary text-sm font-semibold mb-1">CATEGORY</div>
                            <div className="text-white font-medium capitalize">{item.category}</div>
                        </div>
                        <div className="bg-secondary-dark/50 rounded-xl p-4">
                            <div className="text-primary text-sm font-semibold mb-1">YEAR</div>
                            <div className="text-white font-medium">{item.year}</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-secondary-dark">
                        <Button
                            variant="primary"
                            href={item.caseStudyUrl || '#'}
                            size="lg"
                            fullWidth
                            className="hover:scale-105 transition-transform"
                            leftIcon={<span className="material-symbols-outlined">description</span>}
                        >
                            Full Case Study
                        </Button>

                        <Button
                            variant="outline"
                            href="/contact"
                            size="lg"
                            fullWidth
                            className="hover:bg-white/5"
                            leftIcon={<span className="material-symbols-outlined">chat</span>}
                        >
                            Start Similar Project
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudyModal