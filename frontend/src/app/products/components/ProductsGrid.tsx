'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Product } from './types';
import ProductDetailModal from './ProductDetailModal';

const staticProducts = [
    {
        image: '/branding/dashboard services.png',
        tag: 'AI & Automation', status: 'Live',
        title: 'AI Chatbot System',
        desc: 'Enterprise-grade LLM integration for automated customer success.',
    },
    {
        image: '/branding/office services.png',
        tag: 'FinTech', status: 'Private Beta',
        title: 'Trade Copier Tool',
        desc: 'Latency-optimized execution for professional trading desk synchronization.',
    },
    {
        image: '/branding/built for africans.png',
        tag: 'Internal Tools', status: 'Live',
        title: 'Escrow System',
        desc: 'Secure transactional layer for high-trust digital marketplace environments.',
    },
    {
        image: '/branding/dashboard services.png',
        tag: 'Utilities', status: 'Open Source',
        title: 'YT Downloader',
        desc: 'High-speed media extraction tool for content creators and editors.',
    },
];

interface ProductsGridProps {
    products?: any[];
    activeCategory: string;
}

export default function ProductsGrid({ products = [], activeCategory }: ProductsGridProps) {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    // Filter sanity non-featured products
    const sanityGrid = products.filter((p: any) => p.isFeatured !== true);

    // Map sanity grid products to the UI format
    const mappedGrid = sanityGrid.map((p: any) => ({
        id: p.id,
        name: p.title,
        title: p.title,
        desc: p.description,
        description: p.description,
        status: p.status,
        features: p.features || [],
        image: p.image || '/branding/dashboard services.png',
        tag: p.category,
        category: p.category,
        tags: [p.category]
    }));

    // If we have mapped products, use them. Otherwise, use static products.
    const displayProducts = mappedGrid.length > 0 ? mappedGrid : staticProducts;

    // Filter displayProducts based on activeCategory
    const filteredProducts = displayProducts.filter((product: any) => {
        if (activeCategory === 'All Products') return true;

        const prodCat = (product.tag || product.category || '').toLowerCase().trim();
        const activeCat = activeCategory.toLowerCase().trim();

        // High-level category normalization/matching:
        if (activeCat === 'saas-platforms' || activeCat === 'saas platforms') {
            return prodCat.includes('saas') || prodCat.includes('platform') || prodCat.includes('business');
        }
        if (activeCat === 'business tools') {
            return prodCat.includes('business') || prodCat.includes('tool') || prodCat.includes('fintech') || prodCat.includes('management');
        }
        if (activeCat === 'ai & automation') {
            return prodCat.includes('ai') || prodCat.includes('automation') || prodCat.includes('chatbot');
        }
        if (activeCat === 'internal tools') {
            return prodCat.includes('internal') || prodCat.includes('escrow') || prodCat.includes('tool');
        }
        if (activeCat === 'experimental' || activeCat === 'utilities') {
            return prodCat.includes('utility') || prodCat.includes('downloader') || prodCat.includes('experimental') || prodCat.includes('learning') || prodCat.includes('education');
        }

        return prodCat === activeCat || prodCat.includes(activeCat) || activeCat.includes(prodCat);
    });

    return (
        <section id="catalog" className={`py-32 px-8 transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                    <div className="space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-12 h-[1px] bg-blue-500" />
                            <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>The Ecosystem</span>
                        </motion.div>
                        <h2 className={`text-4xl md:text-6xl font-black font-headline tracking-tighter leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            CURATED <br /> SOLUTIONS.
                        </h2>
                    </div>
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product: any, index: number) => (
                            <motion.div 
                                key={product.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedProduct({
                                    id: product.id || `grid-${index}`,
                                    name: product.title,
                                    description: product.desc || product.description,
                                    category: product.tag || product.category || 'Curated Solution',
                                    image: product.image,
                                    alt: product.title,
                                    features: product.features || [],
                                    status: product.status === 'Live' ? 'active' : product.status === 'Beta' ? 'beta' : 'coming-soon',
                                    tags: product.tags || [product.tag || 'Curated Solution']
                                })}
                                className={`group h-full flex flex-col rounded-[2.5rem] border transition-all duration-500 hover:scale-[1.02] cursor-pointer ${isDark ? 'bg-zinc-900 border-white/5 hover:border-blue-500/30 shadow-2xl shadow-white/5' : 'bg-slate-50 border-slate-200 hover:border-blue-500/30 shadow-xl shadow-slate-100'}`}
                            >
                                <div className="aspect-[1.2] overflow-hidden rounded-t-[2.5rem]">
                                    <img
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        src={product.image}
                                    />
                                </div>
                                <div className="p-8 flex flex-col flex-grow space-y-6">
                                    <div className="flex justify-between items-center">
                                        <span className={`text-[10px] font-black uppercase tracking-[0.1em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{product.tag}</span>
                                        <span className={`text-[9px] font-black uppercase tracking-tighter opacity-40 ${isDark ? 'text-white' : 'text-black'}`}>{product.status}</span>
                                    </div>
                                    
                                    <div className="space-y-3 flex-grow">
                                        <h4 className={`text-xl font-black font-headline tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{product.title}</h4>
                                        <p className={`text-xs font-medium leading-relaxed opacity-60 ${isDark ? 'text-white' : 'text-slate-900'}`}>{product.desc}</p>
                                    </div>

                                    <button className={`w-full py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 border cursor-pointer ${isDark ? 'bg-black border-white/10 text-white hover:bg-white hover:text-black' : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white'}`}>
                                        View Details
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-center py-24 px-8 border border-dashed rounded-[2.5rem] transition-colors duration-500 ${isDark ? 'bg-zinc-900/30 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                    >
                        <span className="material-symbols-outlined text-6xl text-blue-500 mb-6 animate-pulse">hourglass_empty</span>
                        <h3 className="text-3xl font-black font-headline tracking-tighter mb-3">
                            Coming Soon
                        </h3>
                        <p className={`text-sm font-medium max-w-md mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            Innovative engineering solutions under <span className="text-blue-500 font-bold">{activeCategory}</span> are currently in design and integration phases.
                        </p>
                    </motion.div>
                )}
            </div>

            {/* Product Detail Modal */}
            <ProductDetailModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </section>
    );
}
