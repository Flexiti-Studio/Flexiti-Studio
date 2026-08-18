/* eslint-disable @typescript-eslint/no-explicit-any */
// app/blog/[slug]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export const revalidate = 60;

import ArticleHeader from './components/ArticleHeader'
import ArticleSidebar from './components/ArticleSidebar'
import ArticleContent from './components/ArticleContent'
import AuthorBio from './components/AuthorBio'
import RelatedArticles from './components/RelatedArticlesComp'
import NewsletterCTASection from './components/NewsletterCTASection'
import { getAllArticleSlugs, getArticleBySlug } from './components/articles'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.'
    }
  }

  return {
    title: `${article.title} | Flexiti Studio Blog`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      images: [
        {
          url: article.featuredImage || '',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.featuredImage || ''],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs()
  return slugs.map(({ slug }: { slug: any }) => ({ slug }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const defaultImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80";
  const featuredImg = article.featuredImage || defaultImage;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Article', 'TechArticle'],
    headline: article.title,
    description: article.description,
    image: [featuredImg],
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: [{
      '@type': 'Person',
      name: article.author?.name || 'Flexiti Studio Team',
      url: 'https://flexitistudio.com/about'
    }],
    publisher: {
      '@type': 'Organization',
      name: 'Flexiti Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://flexitistudio.com/flexiti-logo.png'
      }
    }
  }

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Inject JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Article Header */}
      <ArticleHeader article={article} />

      {/* Hero Image */}
      <section className="w-full px-4 md:px-6 pb-12 flex justify-center">
        <div className="w-full max-w-6xl">

          <div className="relative w-full aspect-[21/9] md:aspect-[16/7] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
            <Image
              src={featuredImg}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <span
                className="px-4 py-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-sm font-bold shadow-sm"
                style={{ color: article.badgeColor || '#330df2' }}
              >
                {article.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content with Sidebar */}
      <section className="w-full px-4 md:px-6 pb-20 flex justify-center">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-3">
              <ArticleSidebar toc={article.toc || []} />
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-7">
              <ArticleContent article={article} />
            </div>

            {/* Right Spacer */}
            <div className="hidden lg:block lg:col-span-2"></div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      {article.author.bio && <AuthorBio author={article.author} />}

      {/* Related Articles */}
      {article.relatedArticles && article.relatedArticles.length > 0 && (
        <RelatedArticles articles={article.relatedArticles} />
      )}

      {/* Newsletter CTA */}
      <NewsletterCTASection />
    </main>
  )
}