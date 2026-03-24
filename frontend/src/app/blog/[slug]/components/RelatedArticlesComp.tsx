// app/blog/[slug]/components/RelatedArticlesComp.tsx
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from './types';

interface RelatedArticlesProps {
    articles: Article[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
    if (!articles || articles.length === 0) return null;

    return (
        <section className="w-full px-4 md:px-6 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white">
                        Related Articles
                    </h2>
                    <p className="text-text-muted dark:text-gray-400 mt-2">
                        You might also like these articles
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <article
                            key={article.id}
                            className="group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all"
                        >
                            <Link href={`/blog/${article.slug}`}>
                                {/* Image */}
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={article.featuredImage}
                                        alt={article.title}
                                        fill
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                                            {article.category}
                                        </span>
                                        <span className="text-xs text-text-muted dark:text-gray-400">
                                            {article.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-text-main dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>

                                    <p className="text-sm text-text-muted dark:text-gray-400 mb-4 line-clamp-2">
                                        {article.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="relative size-6 rounded-full overflow-hidden">
                                                <Image
                                                    src={article.author.avatar}
                                                    alt={article.author.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <span className="text-xs font-bold text-text-main dark:text-white">
                                                {article.author.name}
                                            </span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
