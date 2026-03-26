import { Metadata } from 'next';
import BlogHero from './components/BlogHero';
import BlogFeaturedStory from './components/BlogFeaturedStory';
import BlogSidebar from './components/BlogSidebar';
import BlogNewsletter from './components/BlogNewsletter';
import BlogCTABanner from './components/BlogCTABanner';
import BlogFooter from './components/BlogFooter';
import ArticleGrid from './components/ArticleGrid';
import { getAllArticles, getCategories } from './components/articles';

export const metadata: Metadata = {
  title: 'Journal | Flexiti Studio',
  description: 'Expert perspectives on building high-performance digital products, scaling engineering teams, and the future of SaaS.',
};

const FILTERS = ['All', 'Web Dev', 'SaaS', 'AI', 'Business'];

export default async function BlogPage() {
  const [{ articles, total }, categories] = await Promise.all([
    getAllArticles(1, 12),
    getCategories(),
  ]);

  const featuredArticle = articles.length > 0 ? articles[0] : null;

  return (
    <main className="min-h-screen bg-background text-on-surface">
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero */}
        <BlogHero />

        {/* Featured Article */}
        <BlogFeaturedStory article={featuredArticle} />

        {/* Main Content: Feed + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Blog Feed */}
          <div className="lg:col-span-8">
            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-12">
              {FILTERS.map((filter, i) => (
                <button
                  key={filter}
                  className={`px-6 py-2 rounded-full font-semibold font-label ${i === 0
                    ? 'bg-primary text-on-primary shadow-lg shadow-primary/20'
                    : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container transition-colors'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Article Cards */}
            <section className="hidden lg:block">
              <ArticleGrid
                articles={articles}
                categories={categories}
                showFilter={false}
                showPagination={false}
              />
            </section>
            <section className="lg:hidden">
              <ArticleGrid
                articles={articles}
                categories={categories}
                showFilter={false}
                showPagination={false}
              />
            </section>

            {/* Newsletter */}
            <BlogNewsletter />
          </div>

          {/* Sidebar */}
          <BlogSidebar />
        </div>

        {/* Final CTA Banner */}
        <BlogCTABanner />
      </div>

      {/* Footer */}
      <BlogFooter />
    </main>
  );
}