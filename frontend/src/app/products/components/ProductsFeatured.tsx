'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const featuredProducts = [
    {
        id: 'flexbz',
        icon: 'inventory_2',
        title: 'FlexBZ',
        status: 'Live',
        desc: 'A hyper-scalable inventory management SaaS designed for high-volume retail. Integrated real-time tracking, multi-channel sync, and predictive restocking alerts.',
        features: ['Advanced API Ecosystem', 'Real-time Inventory Analytics', 'Automated Supplier Workflow'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS_BLys4XZFay7Lx_Gu2yOF91fiq38q_xTaEzgRFt-OIDNrSU8vh3Mjq23pHH3VHHmxsJSMMC9knmsR57Ynt401dB-j9XasAIfGwazpBEZzMaNhe8OzzWUO7tnk7JT4s6Aki95WUq9fsnsWjQDDM0beMpbjiGZFCfMwp1KCc7MNTYnwmOYXd1hV8XSGKTxoO9JtiXL8qQZqnRNiKNDmjwZ-fFS_V0hcCgHvjZwCy8Elntjet4zFNOMKMHk2XGLyRVj4aZOMl1R6w20',
        color: 'blue'
    },
    {
        id: 'schoolhub',
        icon: 'school',
        title: 'SchoolHub',
        status: 'Beta',
        desc: 'Redefining the educational experience with a unified platform for students, teachers, and administrators. Simplifies complex scheduling and grade tracking.',
        features: ['Dynamic Resource Scheduling', 'Parent-Teacher Portals', 'AI-Powered Learning Insights'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChe5t4deVABDUuFOJedAcvG9U1EhGlsLYEz-nk1NbXfwaDlSCT1Rj0A6uPkOk7SksxW2PIuntKLDRhYT-g9ItllzpRzX-G3XQDuv1L9azMK3Thb7UsTi4JK-t4G3CESCSoiZEzB2dJkdePI7u167i5_VTa0QYX7QVCsUYYGiIt737hn2KdSrAiE0dpwji3LefzDHSCPG7YCEMUrwgTDOuPk80FkdPIsf1gfsa97RF27j8NGebpby-VOftv4ygWWKFpP3OwXAcpQdJa',
        color: 'indigo',
        reverse: true
    }
];

export default function ProductsFeatured() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

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

                {featuredProducts.map((product, index) => (
                    <div key={product.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-20 items-center ${product.reverse ? 'lg:flex-row-reverse' : ''}`}>
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
                                {product.features.map((feature, fIndex) => (
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

                            <button className={`px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] transition-all duration-500 shadow-2xl ${isDark ? 'bg-white text-black hover:bg-slate-100 shadow-white/5' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20'}`}>
                                {product.status === 'Beta' ? 'Join the Beta' : 'Launch Product'}
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
                            <div className={`relative rounded-[3rem] overflow-hidden border shadow-2xl group cursor-crosshair transition-transform duration-700 hover:scale-[1.01] ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
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
        </section>
    );
}
