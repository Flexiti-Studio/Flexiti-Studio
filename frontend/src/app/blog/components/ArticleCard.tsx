// components/ArticleCard.tsx
import { ArrowRight, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from './types';

interface ArticleCardProps {
    article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
    return (
        <article className="group flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm card-hover">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={article.image}
                        alt={article.title}
                        // fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span
                        className="px-3 py-1 rounded-lg bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md text-xs font-bold shadow-sm"
                        style={{ color: article.badgeColor || '#330df2' }}
                    >
                        {article.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
                {/* Metadata */}
                <div className="flex items-center gap-2 text-xs text-text-muted dark:text-gray-500 mb-3 font-body">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted dark:text-gray-400 text-sm font-body leading-relaxed mb-6 line-clamp-3">
                    {article.description}
                </p>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="relative size-6 rounded-full overflow-hidden">
                            <img
                                src={article.author.avatar}
                                alt={article.author.name}
                                // fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-xs font-bold text-text-main dark:text-white">
                            {article.author.name}
                        </span>
                    </div>
                    <Link href={"/blog/the-future-of-ai-in-ux-design"}>
                        <ArrowRight className="w-5 cursor-pointer h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </article>
    );
}