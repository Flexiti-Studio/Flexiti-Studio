'use client'

import React from 'react'
import Image from 'next/image'
import { Product } from './types'
import IconButton from '@/app/portfolio/components/ui/IconButton'
import Button from '@/app/services/components/ui/Button'


interface ProductDetailModalProps {
    product: Product | null
    isOpen: boolean
    onClose: () => void
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, isOpen, onClose }) => {
    if (!isOpen || !product) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-background-dark border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="sticky top-0 z-10 bg-background-dark/90 backdrop-blur-sm border-b border-white/10 p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className={`
                  px-3 py-1 rounded-full text-xs font-medium
                  ${product.status === 'active' ? 'bg-green-500/20 text-green-300' :
                                        product.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
                                            'bg-blue-500/20 text-blue-300'}
                `}>
                                    {product.status === 'active' ? '✓ Live' :
                                        product.status === 'beta' ? 'β Beta' : '🚀 Coming Soon'}
                                </span>
                                <span className="text-text-secondary text-sm capitalize">
                                    {product.category}
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-white">{product.name}</h2>
                        </div>
                        <IconButton
                            icon={<span className="material-symbols-outlined text-xl">close</span>}
                            onClick={onClose}
                            variant="glass"
                            size="md"
                            rounded="lg"
                            className="hover:bg-white/20"
                            ariaLabel="Close modal"
                        />
                    </div>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                    {/* Product Image */}
                    <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6">
                        <img
                            src={product.image}
                            alt={product.alt}
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <h3 className="text-white text-lg font-semibold mb-3">Overview</h3>
                        <p className="text-text-secondary leading-relaxed">{product.description}</p>
                    </div>

                    {/* Features */}
                    {product.features.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-white text-lg font-semibold mb-3">Key Features</h3>
                            <ul className="space-y-2">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-primary mt-1">•</span>
                                        <span className="text-text-secondary">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Pricing */}
                    {product.pricing && (
                        <div className="mb-6 p-4 bg-white/5 rounded-xl">
                            <h3 className="text-white text-lg font-semibold mb-2">Pricing</h3>
                            <div className="flex items-center gap-4">
                                {product.pricing.type === 'freemium' ? (
                                    <div className="text-primary text-2xl font-bold">Free</div>
                                ) : product.pricing.price ? (
                                    <>
                                        <div className="text-primary text-2xl font-bold">{product.pricing.price}</div>
                                        <div className="text-text-secondary">
                                            per {product.pricing.period}
                                        </div>
                                    </>
                                ) : null}
                                <div className="ml-auto text-text-secondary text-sm capitalize">
                                    {product.pricing.type}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tags */}
                    <div className="mb-8">
                        <h3 className="text-white text-lg font-semibold mb-3">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {product.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1.5 bg-white/5 text-text-secondary rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                        <Button
                            variant="primary"
                            href={`/products/${product.id}`}
                            size="lg"
                            fullWidth
                            className="hover:opacity-90"
                            leftIcon={<span className="material-symbols-outlined">visibility</span>}
                        >
                            View Details
                        </Button>

                        <Button
                            variant="outline"
                            href="/get-started"
                            size="lg"
                            fullWidth
                            className="hover:bg-white/5"
                            leftIcon={<span className="material-symbols-outlined">shopping_cart</span>}
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailModal