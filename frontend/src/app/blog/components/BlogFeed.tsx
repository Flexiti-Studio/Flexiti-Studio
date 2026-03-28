'use client';

import { useState, useEffect } from 'react';
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
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [filteredArticles, setFilteredArticles] = useState(initialArticles);

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

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedTopic(null); // Clear topic when changing category
  };

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
    setSelectedCategory('All'); // Clear category when selecting a topic
    
    // Scroll to feed
    const feedElement = document.getElementById('blog-feed');
    if (feedElement) {
      feedElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16" id="blog-feed">
      {/* Blog Feed */}
      <div className="lg:col-span-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.name)}
              className={`px-6 py-2 rounded-full font-semibold font-label transition-all ${
                selectedCategory === cat.name
                  ? 'bg-primary text-on-primary shadow-lg shadow-primary/20'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {selectedTopic && (
          <div className="mb-8 flex items-center justify-between bg-primary/5 p-4 rounded-lg">
            <p className="font-semibold">
              Showing articles for topic: <span className="text-primary">#{selectedTopic}</span>
            </p>
            <button 
              onClick={() => setSelectedTopic(null)}
              className="text-sm text-primary hover:underline font-bold"
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* Article Cards */}
        <ArticleGrid
          articles={filteredArticles}
          categories={categories}
          showFilter={false}
          showPagination={false}
        />

        {filteredArticles.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-on-surface-variant italic">No articles found in this category/topic.</p>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <BlogSidebar 
        trendingStories={trendingStories} 
        topics={topics}
        onTopicClick={handleTopicClick}
      />
    </div>
  );
}
