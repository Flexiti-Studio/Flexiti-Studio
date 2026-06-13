'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Product } from './types';
import ProductDetailModal from './ProductDetailModal';

const featuredProducts = [
    {
        id: 'flexbz',
        icon: 'inventory_2',
        title: 'FlexBZ',
        status: 'Live',
        desc: 'A hyper-scalable inventory management SaaS designed for high-volume retail. Integrated real-time tracking, multi-channel sync, and predictive restocking alerts.',
        features: ['Advanced API Ecosystem', 'Real-time Inventory Analytics', 'Automated Supplier Workflow'],
        image: '/branding/dashboard services.png',
        color: 'blue'
    },
    {
        id: 'schoolhub',
        icon: 'school',
        title: 'SchoolHub',
        status: 'Beta',
        desc: 'Redefining the educational experience with a unified platform for students, teachers, and administrators. Simplifies complex scheduling and grade tracking.',
        features: ['Dynamic Resource Scheduling', 'Parent-Teacher Portals', 'AI-Powered Learning Insights'],
        image: '/branding/built for africans.png',
        color: 'indigo',
        reverse: true
    }
];

interface ProductsFeaturedProps {
    products?: any[];
}

export default function ProductsFeatured({ products = [] }: ProductsFeaturedProps) {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    // Filter sanity featured products
    const sanityFeatured = products.filter((p: any) => p.isFeatured === true);

    // Map sanity featured products to the UI format
    const mappedFeatured = sanityFeatured.map((p: any) => ({
        id: p.id,
        name: p.title,
        title: p.title,
        desc: p.description,
        description: p.description,
        status: p.status,
        features: p.features || [],
        image: p.image || '/branding/dashboard services.png',
        icon: p.icon || 'inventory_2',
        color: p.color || 'blue',
        reverse: p.reverse || false,
        category: p.category,
        tags: [p.category]
    }));

    // If we have mapped featured products, use them. Otherwise, use static featuredProducts.
    const displayProducts = mappedFeatured.length > 0 ? mappedFeatured : featuredProducts;

    return (
        <section className={`py-48 px-8 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto space-y-48">
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border ${isDark ? 'bg-zinc-900 border-white/5 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}
                    >
                        Flagship Solutions
                    </motion.div>
                    <h2 className={`text-5xl md:text-7xl font-black font-headline tracking-[calc(-0.04em)] leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        ENGINEERING <br /> EXCELLENCE.
                    </h2>
                </div>

                {displayProducts.map((product: any, index) => (
                    <div key={product.id || product.title} className={`grid grid-cols-1 lg:grid-cols-12 gap-20 items-center ${product.reverse ? 'lg:flex-row-reverse' : ''}`}>
                        <div className={`lg:col-span-12 xl:col-span-5 space-y-12 ${product.reverse ? 'xl:order-2' : ''}`}>
                            <div className="space-y-6">
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4"
                                >
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${isDark ? 'bg-zinc-900 border-white/5' : 'bg-white border-slate-200 shadow-xl shadow-slate-100'}`}>
                                        <span className="material-symbols-outlined text-3xl text-blue-500">{product.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className={`text-4xl font-black font-headline tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{product.title}</h3>
                                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{product.status}</span>
                                    </div>
                                </motion.div>
                                <p className={`text-xl font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                                    {product.desc}
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {product.features.map((feature: string, fIndex: number) => (
                                    <motion.li 
                                        key={feature}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: fIndex * 0.1 }}
                                        className={`flex items-center gap-3 text-sm font-bold tracking-tight ${isDark ? 'text-white/60' : 'text-slate-600'}`}
                                    >
                                        <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-blue-500 text-[10px] font-black">check</span>
                                        </div>
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>

                            <button 
                                onClick={() => setSelectedProduct({
                                    id: product.id,
                                    name: product.title,
                                    description: product.desc || product.description,
                                    category: product.category || 'Business Tools',
                                    image: product.image,
                                    alt: product.title,
                                    features: product.features,
                                    status: product.status === 'Live' ? 'active' : product.status === 'Beta' ? 'beta' : 'coming-soon',
                                    tags: [product.category || 'Business Tools']
                                })}
                                className="px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] transition-all duration-500 shadow-2xl cursor-pointer bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20"
                            >
                                View Details
                            </button>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className={`lg:col-span-12 xl:col-span-7 relative ${product.reverse ? 'xl:order-1' : ''}`}
                        >
                            <div className={`absolute -inset-10 blur-[120px] rounded-full opacity-20 pointer-events-none transition-opacity duration-1000 ${isDark ? 'bg-blue-600' : 'bg-blue-400'}`} />
                            <div 
                                onClick={() => setSelectedProduct({
                                    id: product.id,
                                    name: product.title,
                                    description: product.desc || product.description,
                                    category: product.category || 'Business Tools',
                                    image: product.image,
                                    alt: product.title,
                                    features: product.features,
                                    status: product.status === 'Live' ? 'active' : product.status === 'Beta' ? 'beta' : 'coming-soon',
                                    tags: [product.category || 'Business Tools']
                                })}
                                className={`relative rounded-[3rem] overflow-hidden border shadow-2xl group cursor-pointer transition-transform duration-700 hover:scale-[1.01] ${isDark ? 'border-white/10' : 'border-slate-200'}`}
                            >
                                <img
                                    alt={product.title}
                                    className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-110"
                                    src={product.image}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    </div>
                ))}
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
