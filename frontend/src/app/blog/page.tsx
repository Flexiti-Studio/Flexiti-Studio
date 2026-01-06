// app/page.tsx
import HeroSection from "./components/HeroSection";
import FeaturedStory from "./components/FeaturedStory";
import NewsletterStrip from "./components/NewsletterStrip";
import ArticleGrid from "./components/ArticleGrid";
import MobileArticleGrid from "./components/MobileArticleGrid";
import { getAllArticles, getCategories, getNewestArticles } from "./components/articles";
import FeaturedStoriesCarousel from "./components/FeaturedStoriesCarousel";
import { getFeaturedTopPicks } from "./components/featuredArticles";


export default async function Home() {
    // Fetch articles and categories from Sanity
    const [{ articles, total }, categories] = await Promise.all([
        getAllArticles(1, 12), // Get first 12 articles for homepage
        getCategories()
    ]);
    // Fetch data in parallel
    const [topPicks, newestArticles] = await Promise.all([
        getFeaturedTopPicks(),
        getNewestArticles(12),
        getCategories()
    ]);
    // Filter for featured article (you might want to add a 'featured' field in Sanity)
    const featuredArticle = articles.length > 0 ? articles[0] : null;
    const otherArticles = articles; // Remaining articles
    return (
        <>
            <HeroSection />

            {/* Featured Story - Show only if we have articles */}
            {/* {featuredArticle && <FeaturedStory article={featuredArticle} />} */}
            <FeaturedStoriesCarousel
                articles={topPicks}
                autoPlay={true}
                delay={6000}
            />

            <NewsletterStrip />

            {/* Latest Articles */}
            <section className="layout-container pb-20" id="articles">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                    <h2 className="text-2xl font-bold text-text-main dark:text-white">
                        Latest Articles
                    </h2>
                    <p className="text-sm text-text-muted dark:text-gray-400">
                        {total} articles published
                    </p>
                </div>

                {/* Desktop Articles */}
                <section className="container mx-auto px-4 pb-20 hidden lg:block">
                    <ArticleGrid
                        articles={otherArticles}
                        categories={categories}
                        showFilter={true}
                        showPagination={false} // Don't show pagination on homepage
                    />
                </section>

                {/* Mobile Articles */}
                <section className="container mx-auto px-4 pb-20 lg:hidden">
                    <MobileArticleGrid
                        articles={otherArticles}
                        categories={categories}
                    />
                </section>
            </section>
        </>
    );
}