'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from './types'


interface ProductCardProps {
    product: Product
    onLearnMore?: (product: Product) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onLearnMore }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="flex flex-col gap-3 pb-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-primary/50 transition-colors cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onLearnMore?.(product)}
        >
            {/* Image */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <img
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Status Badge */}
                <div className="absolute top-2 right-2">
                    <span className={`
            px-2 py-1 text-xs rounded-full font-medium
            ${product.status === 'active' ? 'bg-green-500/20 text-green-300' :
                            product.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
                                'bg-blue-500/20 text-blue-300'}
          `}>
                        {product.status === 'active' ? '✓ Live' :
                            product.status === 'beta' ? 'β Beta' : '🚀 Coming Soon'}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 flex-grow">
                <div className="flex justify-between items-start">
                    <h3 className="text-white text-base font-medium leading-normal group-hover:text-primary transition-colors">
                        {product.name}
                    </h3>
                    {product.pricing?.price && (
                        <div className="text-primary font-semibold">
                            {product.pricing.price}
                            <span className="text-text-secondary text-xs ml-1">
                                /{product.pricing.period}
                            </span>
                        </div>
                    )}
                </div>

                <p className="text-text-secondary text-sm font-normal leading-normal flex-grow">
                    {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-2">
                    {product.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 bg-white/5 text-text-secondary text-xs rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Learn More Link */}
                <Link
                    href={`/products/${product.id}`}
                    className="text-primary text-sm font-normal leading-normal mt-2 group-hover:underline flex items-center gap-1"
                    onClick={(e) => {
                        e.stopPropagation()
                        if (onLearnMore) {
                            onLearnMore(product)
                            e.preventDefault()
                        }
                    }}
                >
                    Learn More
                    <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                        arrow_forward
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard