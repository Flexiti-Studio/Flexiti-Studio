'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import IconButton from './ui/IconButton'
import Button from '@/app/services/components/ui/Button'
import { PortfolioItem } from './types'

interface CaseStudyModalProps {
    item: PortfolioItem | null
    isOpen: boolean
    onClose: () => void
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ item, isOpen, onClose }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && item && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    {/* 1. Enhanced Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* 2. Animated Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
                        className="relative bg-background-dark border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/5"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header - Sticky with better contrast */}
                        <div className="z-20 bg-background-dark/95 backdrop-blur-md border-b border-white/10 p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[10px] tracking-widest px-2 py-0.5 rounded bg-primary/10 text-primary font-bold border border-primary/20">
                                            {item.category.toUpperCase()}
                                        </span>
                                        <span className=" text-white text-sm font-mono">{item.year}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{item.title}</h2>
                                    {item.client && (
                                        <p className="text-white text-sm mt-1">Project for: <span className="text-white/80">{item.client}</span></p>
                                    )}
                                </div>
                                <IconButton
                                    icon={<span className="material-symbols-outlined">close</span>}
                                    onClick={onClose}
                                    variant="glass"
                                    className="hover:rotate-90 transition-transform duration-200"
                                    ariaLabel="Close modal"
                                />
                            </div>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="overflow-y-auto p-6 custom-scrollbar">
                            {/* Hero Image with Glow Effect */}
                            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 group shadow-2xl">
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]" />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Left Column: Description */}
                                <div className="lg:col-span-2 space-y-8">
                                    <section>
                                        <h3 className="text-white text-lg font-semibold mb-3 flex items-center gap-2">
                                            <span className="w-1 h-1 bg-primary rounded-full" /> Overview
                                        </h3>
                                        <p className="text-white leading-relaxed text-lg">{item.description}</p>
                                    </section>

                                    <section>
                                        <h3 className="text-white text-lg font-semibold mb-3 flex items-center gap-2">
                                            <span className="w-1 h-1 bg-primary rounded-full" /> Technologies
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag) => (
                                                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-white rounded-lg text-sm hover:border-primary/50 transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </section>
                                </div>

                                {/* Right Column: Details Card */}
                                <div className="space-y-4">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-6">
                                        <div>
                                            <div className="text-primary text-[10px] font-bold tracking-tighter mb-1 uppercase">Status</div>
                                            <div className="text-white font-medium flex items-center gap-2">
                                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                                {item.status}
                                            </div>
                                        </div>
                                        <div className="h-[1px] bg-white/10" />
                                        <div>
                                            <div className="text-primary text-[10px] font-bold tracking-tighter mb-1 uppercase">Role</div>
                                            <div className="text-white font-medium">Lead Developer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Footer */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-white/10">
                                <Button
                                    variant="primary"
                                    href={item.caseStudyUrl || '#'}
                                    size="lg"
                                    fullWidth
                                    className="shadow-lg shadow-primary/20"
                                    leftIcon={<span className="material-symbols-outlined text-base">open_in_new</span>}
                                >
                                    View Live Project
                                </Button>
                                <Button
                                    variant="outline"
                                    href="/contact"
                                    size="lg"
                                    fullWidth
                                    leftIcon={<span className="material-symbols-outlined text-base">mail</span>}
                                >
                                    Inquire Details
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default CaseStudyModal