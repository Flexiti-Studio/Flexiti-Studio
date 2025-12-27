import React from 'react'
import Image from 'next/image'
import { Product } from './types'
import Button from '@/components/reuseables/Button'


interface ProductDetailProps {
    product: Product
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    return (
        <div className="flex flex-col gap-8">
            {/* Product Header */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
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

                <h1 className="text-white text-4xl md:text-5xl font-bold">
                    {product.name}
                </h1>

                <p className="text-text-secondary text-lg max-w-3xl">
                    {product.description}
                </p>
            </div>

            {/* Product Image */}
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Features */}
                <div className="lg:col-span-2">
                    <h2 className="text-white text-2xl font-bold mb-6">Key Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                                <span className="text-primary text-xl">✓</span>
                                <span className="text-text-secondary">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing & Details */}
                <div className="space-y-6">
                    {product.pricing && (
                        <div className="bg-white/5 rounded-xl p-6">
                            <h3 className="text-white text-xl font-bold mb-4">Pricing</h3>
                            {product.pricing.type === 'freemium' ? (
                                <div className="text-primary text-3xl font-bold mb-2">Free</div>
                            ) : product.pricing.price ? (
                                <>
                                    <div className="text-primary text-3xl font-bold mb-2">{product.pricing.price}</div>
                                    <div className="text-text-secondary mb-4">
                                        per {product.pricing.period}
                                    </div>
                                </>
                            ) : null}
                            <div className="text-text-secondary text-sm capitalize mb-6">
                                {product.pricing.type}
                            </div>
                            <Button
                                variant="primary"
                                href="/get-started"
                                fullWidth
                                className="hover:opacity-90"
                            >
                                Get Started
                            </Button>
                        </div>
                    )}

                    {/* Tags */}
                    <div className="bg-white/5 rounded-xl p-6">
                        <h3 className="text-white text-xl font-bold mb-4">Categories</h3>
                        <div className="flex flex-wrap gap-2">
                            {product.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-2 bg-white/5 text-text-secondary rounded-lg text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-primary/10 rounded-xl p-8 text-center border border-primary/20">
                <h2 className="text-white text-2xl font-bold mb-4">Ready to get started?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Join thousands of users who have transformed their workflows with {product.name}.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        variant="primary"
                        href="/demo"
                        size="lg"
                        leftIcon={<span className="material-symbols-outlined text-sm">play_circle</span>}
                    >
                        Request Demo
                    </Button>
                    <Button
                        variant="outline"
                        href="/docs"
                        size="lg"
                        leftIcon={<span className="material-symbols-outlined text-sm">description</span>}
                    >
                        View Documentation
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail