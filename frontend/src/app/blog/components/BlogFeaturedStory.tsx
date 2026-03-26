interface Article {
  slug?: string;
  image?: string;
  title?: string;
  description?: string;
  category?: string;
  readTime?: string;
  author?: { name?: string; title?: string; avatar?: string };
}

export default function BlogFeaturedStory({ article }: { article: Article | null }) {
  if (!article) return null;
  return (
    <section className="mb-24 relative group">
      <div className="overflow-hidden rounded-lg bg-surface-container-low shadow-sm transition-all duration-500 hover:shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 h-[400px] lg:h-auto overflow-hidden relative">
            <img
              alt={article.title || 'Featured Article'}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={article.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center bg-surface-container-lowest">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold font-label tracking-wide uppercase">{article.category || 'Engineering'}</span>
              <span className="text-on-surface-variant text-sm font-label">{article.readTime || '12 min read'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-on-surface mb-6 leading-tight">
              {article.title || 'How we Built a Scalable SaaS in 90 Days'}
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 line-clamp-3">
              {article.description || 'A deep dive into the architectural decisions, tech stack selection, and agile methodologies that allowed our team to go from zero to production-ready at record speed.'}
            </p>
            <div className="flex items-center gap-4 mb-8">
              <img
                alt={article.author?.name || 'Author'}
                className="w-12 h-12 rounded-full object-cover"
                src={article.author?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'}
              />
              <div>
                <p className="font-bold text-on-surface">{article.author?.name || 'Ola Richardson'}</p>
                <p className="text-sm text-on-surface-variant">{article.author?.title || 'CTO & Founder'}</p>
              </div>
            </div>
            <a href={article.slug ? `/blog/${article.slug}` : '#'} className="inline-flex items-center gap-2 text-primary font-bold group/btn self-start">
              Read the Story
              <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
