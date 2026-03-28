interface BlogSidebarProps {
  trendingStories: Array<{ num: string, title: string, tag: string }>;
  topics: string[];
  onTopicClick?: (topic: string) => void;
}

export default function BlogSidebar({ trendingStories, topics, onTopicClick }: BlogSidebarProps) {
  return (
    <aside className="lg:col-span-4 space-y-12">
      {/* Trending Posts */}
      <div>
        <h4 className="text-xl font-bold font-headline mb-8 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">trending_up</span>
          Trending Stories
        </h4>
        <div className="space-y-8">
          {trendingStories.map((story) => (
            <a key={story.num} className="group block" href="#">
              <div className="flex gap-4">
                <span className="text-4xl font-black text-outline-variant/30 font-headline group-hover:text-primary/20 transition-colors">{story.num}</span>
                <div>
                  <h5 className="font-bold text-on-surface group-hover:text-primary transition-colors mb-2">{story.title}</h5>
                  <span className="text-xs text-on-surface-variant font-label font-bold uppercase tracking-wider">{story.tag}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Hire Flexiti CTA Widget */}
      <div className="bg-on-surface p-8 rounded-lg text-surface-container-lowest relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-primary-fixed-dim font-bold font-label text-xs uppercase tracking-widest mb-4">Work with us</p>
          <h4 className="text-2xl font-bold font-headline mb-4">Bring your ideas to life.</h4>
          <p className="text-surface-variant mb-8 leading-relaxed">We build world-class products for ambitious startups and global enterprises. Let&apos;s talk about your next project.</p>
          <a className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-primary-container transition-all" href="/contact">
            Hire Flexiti Studio
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      {/* Tags Cloud */}
      <div>
        <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-6">Explore Topics</h4>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => onTopicClick?.(topic)}
              className="px-4 py-2 rounded-lg bg-surface-container-high text-xs font-semibold text-on-surface-variant hover:text-primary transition-colors"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
