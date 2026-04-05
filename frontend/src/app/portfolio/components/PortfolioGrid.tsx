'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import PortfolioCard from './PortfolioCard';
import { portfolioItems } from './portfolio-data';
import CaseStudyModal from './CaseStudyModal';
import { PortfolioItem } from './types';

export default function PortfolioGrid() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <section className={`px-8 py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 flex items-center gap-3"
                    >
                        <div className="w-12 h-[1px] bg-blue-500" />
                        <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>More Projects</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`text-4xl md:text-6xl font-black font-headline tracking-tighter mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
                    >
                        EXPANDING <br /> THE HORIZONS
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`max-w-xl text-lg font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}
                    >
                        A curated selection of diverse digital products we&apos;ve engineered across various high-growth industries.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <PortfolioCard 
                                item={item} 
                                onViewCaseStudy={(project) => setSelectedProject(project)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <CaseStudyModal 
                isOpen={!!selectedProject} 
                item={selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />

            {/* Background Texture */}
            <div className={`absolute inset-0 opacity-[0.02] pointer-events-none ${isDark ? 'bg-[radial-gradient(#fff_1px,transparent_1px)]' : 'bg-[radial-gradient(#000_1px,transparent_1px)]'} [background-size:40px_40px]`} />
        </section>
    );
}