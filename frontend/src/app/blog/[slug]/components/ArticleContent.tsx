'use client';

import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Article, TableOfContentItem } from './types';
import { urlFor } from '@/sanity/client';

interface ArticleContentProps {
    article: Article;
}

// Helper function to generate ID from text
const generateId = (text: string): string => {
    return text.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
};

const portableTextComponents = (toc: TableOfContentItem[], isDark: boolean) => ({
    block: {
        normal: ({ children }: any) => (
            <p className={`mb-10 text-lg md:text-xl leading-[1.8] font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{children}</p>
        ),
        h1: ({ children }: any) => (
            <h1 className={`text-4xl md:text-5xl font-black mb-10 mt-20 tracking-tighter leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{children}</h1>
        ),
        h2: ({ children }: any) => {
            const id = generateId(children?.toString() || 'section');
            const tocItem = toc.find(item => item.id === id);
            const finalId = tocItem ? tocItem.id : id;

            return (
                <h2
                    id={finalId}
                    className={`text-3xl md:text-4xl font-black mb-8 mt-16 scroll-mt-28 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
                >
                    {children}
                </h2>
            );
        },
        h3: ({ children }: any) => {
            const id = generateId(children?.toString() || 'subsection');
            const tocItem = toc.find(item => item.id === id);
            const finalId = tocItem ? tocItem.id : id;

            return (
                <h3
                    id={finalId}
                    className={`text-2xl md:text-3xl font-black mb-6 mt-12 scroll-mt-28 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
                >
                    {children}
                </h3>
            );
        },
        blockquote: ({ children }: any) => (
            <blockquote className={`border-l-4 border-blue-500 pl-8 italic my-12 text-2xl md:text-3xl font-medium leading-relaxed ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {children}
            </blockquote>
        ),
    },
    marks: {
        strong: ({ children }: any) => (
            <strong className={`font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{children}</strong>
        ),
        link: ({ value, children }: any) => (
            <a
                href={value?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors underline decoration-2 underline-offset-4"
            >
                {children}
            </a>
        ),
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="list-disc pl-8 mb-10 space-y-4 text-lg md:text-xl font-medium">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="list-decimal pl-8 mb-10 space-y-4 text-lg md:text-xl font-medium">{children}</ol>
        ),
    },
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref && !value?.asset?._id) return null;

            return (
                <figure className="my-16 group">
                    <div className="relative overflow-hidden rounded-[3rem] shadow-2xl">
                         <Image
                            src={urlFor(value.asset).width(1200).height(800).url()}
                            alt={value.alt || 'Article image'}
                            width={1200}
                            height={800}
                            className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                    </div>
                    {value.caption && (
                        <figcaption className={`text-center text-sm mt-6 font-medium ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            );
        },
        keyInsight: ({ value }: any) => (
            <div className={`my-12 p-10 rounded-[3rem] border-2 border-dashed ${isDark ? 'bg-blue-500/5 border-blue-500/20' : 'bg-blue-50 border-blue-200'}`}>
                <h4 className="text-xl font-black mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-500">lightbulb_circle</span>
                    {value.title || 'Key Insight'}
                </h4>
                <p className={`m-0 text-lg md:text-xl font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {value.text}
                </p>
            </div>
        )
    }
});

export default function ArticleContent({ article }: ArticleContentProps) {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    return (
        <article className={`col-span-1 lg:col-span-8 lg:col-start-3 prose prose-lg max-w-none font-body transition-colors duration-500`}>
            {/* Introduction Section with ID for TOC */}
            <div id="intro" className="scroll-mt-24 mb-16">
                <p className={`text-2xl md:text-3xl font-black leading-[1.4] tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {article.description}
                </p>
            </div>

            {/* Render Portable Text content with TOC-aware components */}
            {article.body && (
                <PortableText
                    value={article.body}
                    components={portableTextComponents(article.toc || [], isDark)}
                />
            )}

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-t border-dashed border-slate-200 dark:border-white/5 mt-20 pt-12"
                >
                    <p className={`text-[10px] font-black uppercase tracking-widest mb-8 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Tagged in</p>
                    <div className="flex flex-wrap gap-3">
                        {article.tags.map((tag) => (
                            <span
                                key={tag.name}
                                className={`px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all cursor-pointer ${isDark ? 'bg-zinc-900 border-white/5 text-slate-400 hover:text-white hover:bg-zinc-800' : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-500/30'}`}
                            >
                                #{tag.name}
                            </span>
                        ))}
                    </div>
                </motion.div>
            )}
        </article>
    );
}