'use client';

import React, { useState } from 'react';
import ProductsCategoryTabs from './ProductsCategoryTabs';
import ProductsFeatured from './ProductsFeatured';
import ProductsGrid from './ProductsGrid';

interface ProductsContentProps {
  products: any[];
}

export default function ProductsContent({ products }: ProductsContentProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All Products');

  return (
    <>
      <ProductsCategoryTabs activeTab={activeCategory} setActiveTab={setActiveCategory} />
      <ProductsFeatured products={products} />
      <ProductsGrid products={products} activeCategory={activeCategory} />
    </>
  );
}
