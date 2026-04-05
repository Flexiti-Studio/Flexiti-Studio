'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import ArticleGrid from './ArticleGrid';
import BlogSidebar from './BlogSidebar';
import { Article, Category } from './types';

interface BlogFeedProps {
  initialArticles: Article[];
  categories: Category[];
  trendingStories: any[];
  topics: string[];
}

export default function BlogFeed({ 
  initialArticles, 
  categories, 
  trendingStories, 
  topics 
}: BlogFeedProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [filteredArticles, setFilteredArticles] = useState(initialArticles);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let result = initialArticles;

    if (selectedCategory !== 'All') {
      result = result.filter(a => a.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    if (selectedTopic) {
      result = result.filter(a => 
        a.tags?.some(tag => tag.name.toLowerCase() === selectedTopic.toLowerCase())
      );
    }

    setFilteredArticles(result);
  }, [selectedCategory, selectedTopic, initialArticles]);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedTopic(null);
  };

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
    setSelectedCategory('All');
    
    // Scroll to feed
    const feedElement = document.getElementById('blog-feed-nav');
    if (feedElement) {
      feedElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24" id="blog-feed">
      {/* Blog Feed */}
      <div className="lg:col-span-8">
        {/* Navigation / Filters */}
        <div id="blog-feed-nav" className={`flex items-center gap-3 overflow-x-auto pb-4 mb-16 scrollbar-hide sticky top-28 z-30 transition-all duration-500`}>
          <button
            onClick={() => handleCategoryChange('All')}
            className={`px-8 py-3 rounded-2xl text-[10px] font-black tracking-widest uppercase transition-all whitespace-nowrap ${
              selectedCategory === 'All'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : `border ${isDark ? 'bg-zinc-900 border-white/5 text-slate-400 hover:text-white hover:bg-zinc-800' : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`
            }`}
          >
            All Insights
          </button>
          <AnimatePresence>
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => handleCategoryChange(cat.name)}
                className={`px-8 py-3 rounded-2xl text-[10px] font-black tracking-widest uppercase transition-all whitespace-nowrap ${
                  selectedCategory === cat.name
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : `border ${isDark ? 'bg-zinc-900 border-white/5 text-slate-400 hover:text-white hover:bg-zinc-800' : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`
                }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {selectedTopic && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-12 flex items-center justify-between p-6 rounded-[2rem] border ${isDark ? 'bg-blue-500/5 border-blue-500/10' : 'bg-blue-50 border-blue-100'}`}
          >
            <p className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-white/80' : 'text-slate-900/80'}`}>
              Topic: <span className="text-blue-500 ml-2">#{selectedTopic}</span>
            </p>
            <button 
              onClick={() => setSelectedTopic(null)}
              className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] hover:underline"
            >
              Clear Filter
            </button>
          </motion.div>
        )}

        {/* Article Cards */}
        <ArticleGrid
          articles={filteredArticles}
          categories={categories}
          showFilter={false}
          showPagination={false}
        />

        {filteredArticles.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`py-32 text-center rounded-[3rem] border-2 border-dashed ${isDark ? 'bg-zinc-950 border-white/5' : 'bg-slate-50 border-slate-200'}`}
          >
             <span className="material-symbols-outlined text-6xl text-slate-400 mb-6 font-light">search_off</span>
            <p className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>No articles found.</p>
            <p className="text-sm text-slate-500 mt-2 font-medium">Try selecting a different category or clearing filters.</p>
          </motion.div>
        )}
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-4">
        <BlogSidebar 
          trendingStories={trendingStories} 
          topics={topics}
          onTopicClick={handleTopicClick}
        />
      </div>
    </div>
  );
}
