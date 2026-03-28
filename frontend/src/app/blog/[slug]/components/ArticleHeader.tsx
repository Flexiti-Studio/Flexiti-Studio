// app/blog/[slug]/components/ArticleHeader.tsx
'use client';

import { Bookmark, Share2 } from 'lucide-react';
import Image from 'next/image';
import { Article } from './types';
import ReadTimeDisplay from '../../components/ReadTimeDisplay';


interface ArticleHeaderProps {
    article: Article;
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: article.title,
                text: article.description,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            // Show toast notification
        }
    };

    return (
        <header className="w-full px-4 md:px-10 pt-12 pb-8 md:pt-20 md:pb-12 bg-background-light dark:bg-background-dark flex justify-center">
            <div className="w-full max-w-[800px] flex flex-col items-center text-center gap-6">
                {/* Metadata */}
                <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                        {article.category}
                    </span>
                    <span className="text-sm text-text-muted dark:text-gray-400 font-body">
                        <ReadTimeDisplay
                            readTime={article.readTime}
                            details={article.readTimeDetails}
                            showDetails={true}
                        />
                    </span>
                    <span className="text-sm text-text-muted dark:text-gray-400 font-body">•</span>
                    <span className="text-sm text-text-muted dark:text-gray-400 font-body">
                        {article.date}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-text-main dark:text-white">
                    {article.title}
                </h1>

                {/* Excerpt */}
                <p className="text-lg md:text-xl text-text-muted dark:text-gray-300 max-w-2xl font-body leading-relaxed">
                    {article.description}
                </p>

                {/* Author & Actions */}
                <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-3">

                        <div className="relative size-12 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-md">
                            <Image
                                src={article.author.avatar}
                                alt={article.author.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <span className="text-sm font-bold text-text-main dark:text-white">
                                {article.author.name}
                            </span>
                            <span className="text-xs text-text-muted dark:text-gray-500">
                                {article.author.title}
                            </span>
                        </div>
                    </div>

                    <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleShare}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-surface-dark text-text-muted dark:text-gray-400 transition-colors"
                            title="Share article"
                        >
                            <Share2 className="w-5 h-5" />
                        </button>
                        <button
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-surface-dark text-text-muted dark:text-gray-400 transition-colors"
                            title="Bookmark article"
                        >
                            <Bookmark className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}