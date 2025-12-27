// app/blog/[slug]/components/ArticleSidebar.tsx
'use client';

import { useEffect, useState } from 'react';
import { TableOfContentItem } from './types';

interface ArticleSidebarProps {
    toc: TableOfContentItem[];
}

export default function ArticleSidebar({ toc }: ArticleSidebarProps) {
    const [activeSection, setActiveSection] = useState('intro');

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

    return (
        <aside className="hidden lg:block lg:col-span-3 lg:col-start-1 relative">
            <div className="sticky top-28 space-y-8">
                {/* Table of Contents */}
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted dark:text-gray-500 mb-4">
                        Table of Contents
                    </h4>
                    <nav className="flex flex-col gap-3 text-sm font-medium border-l border-gray-200 dark:border-gray-800 pl-4">
                        {toc.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleTocClick(item.id);
                                }}
                                className={`transition-all py-1 ${activeSection === item.id
                                        ? 'text-primary border-l-2 border-primary -ml-[17px] pl-[15px]'
                                        : 'text-text-muted dark:text-gray-400 hover:text-primary'
                                    }`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Share Widget */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted dark:text-gray-500 mb-4">
                        Share
                    </h4>
                    <div className="flex gap-3">
                        <button
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-dark text-text-muted dark:text-gray-400 transition-colors"
                            title="Share on Twitter"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </button>
                        <button
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-dark text-text-muted dark:text-gray-400 transition-colors"
                            title="Share on LinkedIn"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}