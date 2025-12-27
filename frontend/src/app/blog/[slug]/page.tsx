// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import ArticleHeader from './components/ArticleHeader';
import { getArticleBySlug } from './components/articles';
import ArticleSidebar from './components/ArticleSidebar';
import ArticleContent from './components/ArticleContent';
import AuthorBio from './components/AuthorBio';
import RelatedArticles from './components/RelatedArticles';
import NewsletterCTASection from './components/NewsletterCTASection';


interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="w-full">
      <ArticleHeader article={article} />

      {/* Hero Image */}
      <section className="w-full px-4 md:px-10 pb-12 flex justify-center">
        <div className="w-full max-w-[1024px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
          <div className="relative w-full aspect-[21/9]">
            <img
              alt={article.title}
              src={article.featuredImage}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content with Sidebar */}
      <section className="w-full px-4 pb-20 flex justify-center relative">
        <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-10">
          <ArticleSidebar toc={article.toc} />

          <ArticleContent article={article} />

          <div className="hidden lg:block lg:col-span-2"></div>
        </div>
      </section>

      <AuthorBio author={article.author} />

      <RelatedArticles articles={article.relatedArticles} />

      <NewsletterCTASection />
    </main>
  );
}