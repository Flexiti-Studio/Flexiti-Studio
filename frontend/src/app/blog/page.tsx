import { Metadata } from 'next';
export const revalidate = 60;
import BlogHero from './components/BlogHero';
import BlogFeaturedStory from './components/BlogFeaturedStory';
import BlogFeed from './components/BlogFeed';
import BlogCTABanner from './components/BlogCTABanner';
import { getAllArticles, getCategories, getTrendingStories, getExploreTopics } from './components/articles';

export const metadata: Metadata = {
  title: 'Engineering Journal & Tech Insights | Software, AI & SaaS',
  description: 'Read expert technical perspectives on custom software engineering, AI workflow automation, SaaS MVP architecture, and digital product design.',
  keywords: [
    'Software engineering blog',
    'AI automation insights',
    'SaaS MVP engineering articles',
    'Flexiti Studio journal',
    'Tech architecture blog'
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'website',
    url: 'https://flexitistudio.com/blog',
    title: 'Engineering Journal & Tech Insights | Flexiti Studio',
    description: 'Expert technical perspectives on custom software engineering, AI automation, and SaaS products.',
    images: [{ url: '/flexiti-logo.png', alt: 'Flexiti Studio Journal' }],
  },
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    'name': 'Flexiti Studio Engineering Journal',
    'description': 'Technical articles and perspectives on custom software development, AI automations, and SaaS product engineering.',
    'url': 'https://flexitistudio.com/blog',
    'blogPost': articles.slice(0, 10).map((art: any) => ({
      '@type': 'BlogPosting',
      'headline': art.title,
      'description': art.description || art.excerpt,
      'url': `https://flexitistudio.com/blog/${art.slug?.current || art.slug || ''}`,
      'datePublished': art.publishedAt || art._createdAt,
      'author': {
        '@type': 'Organization',
        'name': 'Flexiti Studio',
      },
    })),
  };

  return (
    <main className="min-h-screen bg-background text-on-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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