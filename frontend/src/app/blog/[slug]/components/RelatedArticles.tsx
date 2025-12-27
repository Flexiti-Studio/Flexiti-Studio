// app/blog/[slug]/components/RelatedArticles.tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ArticlePreview } from './types';

interface RelatedArticlesProps {
    articles: ArticlePreview[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
    return (
        <section className="w-full py-20 px-4 md:px-10 bg-background-light dark:bg-background-dark">
            <div className="max-w-[1280px] mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white">
                        Related Articles
                    </h2>
                    <Link
                        href="/blog"
                        className="text-primary font-bold hover:underline hidden sm:flex items-center gap-2"
                    >
                        View all articles
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Link
                            key={article.id}
                            href={`/blog/${article.slug}`}
                            className="flex flex-col group"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-4">
                                <div className="absolute inset-0">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col">
                                <span
                                    className="text-xs font-bold uppercase tracking-wide mb-2"
                                    style={{ color: article.badgeColor }}
                                >
                                    {article.category}
                                </span>
                                <h3 className="text-lg font-bold text-text-main dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-text-muted dark:text-gray-400 line-clamp-2">
                                    {article.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}