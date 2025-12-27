// app/page.tsx

import ArticleCard from "./components/ArticleCard";
import { articles } from "./components/articles";
import CategoryFilter from "./components/CategoryFilter";
import FeaturedStory from "./components/FeaturedStory";
import HeroSection from "./components/HeroSection";
import NewsletterStrip from "./components/NewsletterStrip";


export default function Home() {
    return (
        <>
            <HeroSection />
            <FeaturedStory />
            <NewsletterStrip />

            {/* Latest Articles */}
            <section className="layout-container pb-20">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                    <h2 className="text-2xl font-bold text-text-main dark:text-white">
                        Latest Articles
                    </h2>
                    <CategoryFilter />
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>

                {/* Load More Button */}
                <div className="mt-12 flex justify-center">
                    <button className="px-8 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
                        Load More Articles
                    </button>
                </div>
            </section>
        </>
    );
}