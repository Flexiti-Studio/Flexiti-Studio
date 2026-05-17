import { Metadata } from 'next';
export const revalidate = 60;
import BlogHero from './components/BlogHero';
import BlogFeaturedStory from './components/BlogFeaturedStory';
import BlogFeed from './components/BlogFeed';
import BlogCTABanner from './components/BlogCTABanner';
import { getAllArticles, getCategories, getTrendingStories, getExploreTopics } from './components/articles';

export const metadata: Metadata = {
  title: 'Journal | Flexiti Studio',
  description: 'Expert perspectives on building high-performance digital products, scaling engineering teams, and the future of SaaS.',
};

export default async function BlogPage() {
  const [
    { articles }, 
    categories, 
    trendingStories, 
    topics
  ] = await Promise.all([
    getAllArticles(1, 50), // Fetch a larger batch for client-side filtering
    getCategories(),
    getTrendingStories(5),
    getExploreTopics()
  ]);

  const featuredArticle = articles.length > 0 ? articles[0] : null;

  return (
    <main className="min-h-screen bg-background text-on-surface">
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero */}
        <BlogHero />

        {/* Featured Article */}
        <BlogFeaturedStory article={featuredArticle} trendingStories={trendingStories} />

        {/* Main Content: Dynamic Feed + Sidebar */}
        <BlogFeed 
          initialArticles={articles}
          categories={categories}
          trendingStories={trendingStories}
          topics={topics}
        />

        {/* Final CTA Banner */}
        <BlogCTABanner />
      </div>
    </main>
  );
}