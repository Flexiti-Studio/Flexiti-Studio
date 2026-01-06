// app/blog/[slug]/components/ArticleSidebar.tsx - Updated with nested TOC
'use client';

import { JSX, useEffect, useState } from 'react';
import { TableOfContentItem } from './types';
import { Share2, Twitter, Linkedin, Copy } from 'lucide-react';

interface ArticleSidebarProps {
    toc: TableOfContentItem[];
}

export default function ArticleSidebar({ toc }: ArticleSidebarProps) {
    const [activeSection, setActiveSection] = useState('intro');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = toc.map(item => item.id);
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [toc]);

    const handleTocClick = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth',
            });
        }
    };

    const handleShare = (platform: 'twitter' | 'linkedin' | 'copy') => {
        const url = window.location.href;
        const title = document.title;

        switch (platform) {
            case 'twitter':
                window.open(
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
                    '_blank'
                );
                break;
            case 'linkedin':
                window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
                    '_blank'
                );
                break;
            case 'copy':
                navigator.clipboard.writeText(url);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
                break;
        }
    };

    // Group TOC items by level for nesting
    const renderTocItems = () => {
        const items: JSX.Element[] = [];
        let lastH2Index = -1;

        toc.forEach((item, index) => {
            if (item.level === 1) {
                // Introduction (always first)
                items.push(
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleTocClick(item.id);
                        }}
                        className={`transition-all py-1 block ${activeSection === item.id
                            ? 'text-primary border-l-2 border-primary -ml-[17px] pl-[15px]'
                            : 'text-text-muted dark:text-gray-400 hover:text-primary'
                            }`}
                    >
                        {item.title}
                    </a>
                );
            } else if (item.level === 2) {
                // H2 heading
                lastH2Index = index;
                items.push(
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleTocClick(item.id);
                        }}
                        className={`transition-all py-1 block mt-3 font-semibold ${activeSection === item.id
                            ? 'text-primary border-l-2 border-primary -ml-[17px] pl-[15px]'
                            : 'text-text-main dark:text-white hover:text-primary'
                            }`}
                    >
                        {item.title}
                    </a>
                );
            } else if (item.level === 3) {
                // H3 heading (nested under last H2)
                items.push(
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleTocClick(item.id);
                        }}
                        className={`transition-all py-1 block ml-4 text-sm ${activeSection === item.id
                            ? 'text-primary border-l-2 border-primary -ml-[17px] pl-[15px]'
                            : 'text-text-muted dark:text-gray-400 hover:text-primary'
                            }`}
                    >
                        {item.title}
                    </a>
                );
            }
        });

        return items;
    };

    return (
        <aside className="hidden lg:block lg:col-span-3 lg:col-start-1 relative">
            <div className="sticky top-28 space-y-8">
                {/* Table of Contents */}
                <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">
                            Table of Contents
                        </h4>
                    </div>

                    <nav className="flex flex-col border-l border-gray-200 dark:border-gray-800 pl-4">
                        {renderTocItems()}
                    </nav>

                    {/* TOC Stats */}
                    {toc.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 text-xs text-text-muted dark:text-gray-500">
                            <p>{toc.length} sections • {toc.filter(t => t.level === 2).length} main topics</p>
                        </div>
                    )}
                </div>

                {/* Share Widget */}
                <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                            <Share2 className="w-4 h-4 text-primary" />
                        </div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">
                            Share This Article
                        </h4>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => handleShare('twitter')}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400 transition-colors"
                        >
                            <Twitter className="w-5 h-5" />
                            <span className="text-sm font-medium">Share on Twitter</span>
                        </button>

                        <button
                            onClick={() => handleShare('linkedin')}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-700 dark:text-blue-500 transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                            <span className="text-sm font-medium">Share on LinkedIn</span>
                        </button>

                        <button
                            onClick={() => handleShare('copy')}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
                        >
                            <Copy className="w-5 h-5" />
                            <span className="text-sm font-medium">
                                {copied ? 'Copied!' : 'Copy Link'}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Reading Progress */}
                <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-text-muted dark:text-gray-500 mb-4">
                        Reading Progress
                    </h4>
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-text-muted dark:text-gray-400">
                            <span>Completion</span>
                            <span>{Math.round((toc.findIndex(t => t.id === activeSection) + 1) / toc.length * 100)}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary rounded-full transition-all duration-300"
                                style={{
                                    width: `${(toc.findIndex(t => t.id === activeSection) + 1) / toc.length * 100}%`
                                }}
                            />
                        </div>
                        <p className="text-xs text-text-muted dark:text-gray-500 mt-2">
                            Currently reading: <span className="font-medium">{activeSection === 'intro' ? 'Introduction' : toc.find(t => t.id === activeSection)?.title}</span>
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
}