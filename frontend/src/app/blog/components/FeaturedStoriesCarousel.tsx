/* eslint-disable @typescript-eslint/no-explicit-any */
// components/FeaturedStoriesCarousel.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowRight, Star, Clock } from 'lucide-react';
import Link from 'next/link';
import { Article } from './types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface FeaturedStoriesCarouselProps {
    articles: Article[];
    autoPlay?: boolean;
    delay?: number;
}

export default function FeaturedStoriesCarousel({
    articles,
    autoPlay = true,
    delay = 5000,
}: FeaturedStoriesCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<any>(null);

    // If no articles, don't render
    if (!articles || articles.length === 0) return null;

    // Category colors for badges
    const categoryColors: Record<string, { bg: string; text: string }> = {
        'Design': { bg: 'bg-red-500/10', text: 'text-red-500' },
        'Development': { bg: 'bg-blue-500/10', text: 'text-blue-500' },
        'AI': { bg: 'bg-purple-500/10', text: 'text-purple-500' },
        'Business': { bg: 'bg-green-500/10', text: 'text-green-500' },
        'Strategy': { bg: 'bg-yellow-500/10', text: 'text-yellow-500' },
        'Security': { bg: 'bg-indigo-500/10', text: 'text-indigo-500' },
        'Culture': { bg: 'bg-pink-500/10', text: 'text-pink-500' },
        'Case Study': { bg: 'bg-teal-500/10', text: 'text-teal-500' },
    };

    const getCategoryColor = (category: string) => {
        return categoryColors[category] || { bg: 'bg-primary/10', text: 'text-primary' };
    };

    return (
        <section className="layout-container pb-8 md:pb-12">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 gap-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-purple-600">
                        <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white">
                            Top Picks by Category
                        </h2>
                        <p className="text-sm text-text-muted dark:text-gray-400 mt-1">
                            Latest featured story from each category
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => swiperRef.current?.swiper?.slidePrev()}
                        className="p-2 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={() => swiperRef.current?.swiper?.slideNext()}
                        className="p-2 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Swiper Carousel */}
            <div className="relative">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={autoPlay ? { delay, disableOnInteraction: false } : false}
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination',
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="rounded-2xl overflow-hidden shadow-xl"
                >
                    {articles.map((article, index) => (
                        <SwiperSlide key={article.id}>
                            <article className="relative bg-surface-light dark:bg-surface-dark">
                                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] md:min-h-[600px]">
                                    {/* Image Side */}
                                    <div className="relative overflow-hidden">
                                        <div className="absolute inset-0">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-full object-cover transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:via-black/20 lg:to-transparent" />

                                        {/* Category Badge */}
                                        <div className="absolute top-6 left-6 z-10">
                                            <span className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider ${getCategoryColor(article.category).bg} ${getCategoryColor(article.category).text}`}>
                                                {article.category}
                                            </span>
                                        </div>

                                        {/* Top Pick Badge */}
                                        <div className="absolute top-6 right-6 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 backdrop-blur-md text-yellow-500">
                                            <Star className="w-4 h-4" />
                                            <span className="text-sm font-bold">TOP PICK</span>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                                Featured Story
                                            </span>
                                            <div className="flex items-center gap-1 text-sm text-text-muted dark:text-gray-400">
                                                <Clock className="w-4 h-4" />
                                                {article.readTime}
                                            </div>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-6 leading-tight">
                                            {article.title}
                                        </h3>

                                        <p className="text-lg text-text-muted dark:text-gray-400 mb-8 leading-relaxed line-clamp-3">
                                            {article.description}
                                        </p>

                                        {/* Author Info */}
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="relative size-14 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-md">
                                                <img
                                                    src={article.author.avatar}
                                                    alt={article.author.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-bold text-text-main dark:text-white text-lg">
                                                    {article.author.name}
                                                </p>
                                                <p className="text-sm text-text-muted dark:text-gray-500">
                                                    {article.author.title || 'Author'} • {article.date}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Read Button */}
                                        <Link
                                            href={`/blog/${article.slug}`}
                                            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all duration-300 group w-fit"
                                        >
                                            <span>Read Full Story</span>
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Pagination Dots (Grey Dots at Bottom) */}
                <div className="custom-pagination mt-6 flex justify-center gap-2" />
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-8 overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex gap-3 min-w-max">
                    {articles.map((article, index) => (
                        <button
                            key={article.id}
                            onClick={() => swiperRef.current?.swiper?.slideTo(index)}
                            className={`flex-shrink-0 w-[120px] rounded-lg overflow-hidden border-2 transition-all ${index === activeIndex ? 'border-primary shadow-lg' : 'border-transparent hover:border-gray-300 dark:hover:border-gray-700'}`}
                        >
                            <div className="relative aspect-video">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className={`absolute bottom-2 left-2 px-2 py-1 rounded text-xs font-bold ${getCategoryColor(article.category).bg} ${getCategoryColor(article.category).text}`}>
                                    {article.category}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* CSS for Swiper Pagination Dots */}
            <style jsx global>{`
        .custom-pagination {
          position: relative !important;
          bottom: 0 !important;
          margin-top: 24px;
        }
        
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #9CA3AF;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background-color: #3B82F6;
          opacity: 1;
          transform: scale(1.2);
        }
        
        .swiper-pagination-bullet:hover {
          opacity: 0.8;
        }
        
        @media (prefers-color-scheme: dark) {
          .swiper-pagination-bullet {
            background-color: #6B7280;
          }
          .swiper-pagination-bullet-active {
            background-color: #60A5FA;
          }
        }
        
        /* Custom scrollbar for thumbnails */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}