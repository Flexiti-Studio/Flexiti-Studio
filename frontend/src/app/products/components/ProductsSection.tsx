'use client'

import React, { useState } from 'react'
import ProductCard from './ProductCard'
import ProductTabs from './ProductTabs'
import { Product, ProductCategory } from './types'
import { getProductsByCategory } from './products-data'
import ProductDetailModal from './ProductDetailModal'


const ProductsSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<ProductCategory>('all')
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

    const filteredProducts = getProductsByCategory(activeCategory)

    const handleLearnMore = (product: Product) => {
        setSelectedProduct(product)
    }

    return (
        <section id="products" className="flex flex-col gap-4">
            {/* Section Header */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center md:text-3xl">
                A Suite of Tools, Intelligently Crafted
            </h2>

            {/* Tabs */}
            <ProductTabs
                activeTab={activeCategory}
                onTabChange={setActiveCategory}
            />

            {/* Product Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-4">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onLearnMore={handleLearnMore}
                    />
                ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-5xl mb-4">🔍</div>
                    <h3 className="text-white text-xl font-semibold mb-2">No products found</h3>
                    <p className="text-text-secondary">
                        No products match the selected category. Try a different filter.
                    </p>
                </div>
            )}

            {/* Product Detail Modal */}
            <ProductDetailModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </section>
    )
}

export default ProductsSection