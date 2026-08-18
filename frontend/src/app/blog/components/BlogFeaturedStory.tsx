'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Article {
  slug?: string;
  image?: string;
  title?: string;
  description?: string;
  category?: string;
  readTime?: string;
  author?: { name?: string; title?: string; avatar?: string };
}

interface TrendingStory {
  num: string;
  title: string;
  tag: string;
  slug?: string;
}

interface BlogFeaturedStoryProps {
  article: Article | null;
  trendingStories: TrendingStory[];
}

export default function BlogFeaturedStory({ article, trendingStories }: BlogFeaturedStoryProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  if (!article) return null;

  return (
    <section className="mb-24 md:mb-32 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Big Featured Card (7 columns) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 group cursor-pointer space-y-6"
        >
          <Link href={article.slug ? `/blog/${article.slug}` : '#'} className="block">
            <div className="relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-zinc-900 border border-slate-100 dark:border-white/5">
              <Image
                alt={article.title || 'Featured Article'}
                className="object-cover transition-transform duration-[1000ms] group-hover:scale-102"
                src={article.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'}
                fill
                sizes="(max-w-1024px) 100vw, 60vw"
                priority
              />
              {/* Premium dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
              
              {/* Floating tag absolute top-8 left-8 */}
              <div className="absolute top-8 left-8">
                 <span className="px-4 py-2 rounded-xl bg-black/45 backdrop-blur-md text-[10px] font-black text-white tracking-[0.2em] uppercase border border-white/10">
                   Featured Story
                 </span>
              </div>

              {/* Text Overlays inside bottom overlay */}
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-4">
                <span className="inline-block px-3.5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-white/20 backdrop-blur-md border border-white/10">
                  {article.category || 'Engineering'}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight group-hover:text-slate-100 transition-colors">
                  {article.title}
                </h2>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Right Column: Other Featured Posts List (5 columns) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 space-y-6"
        >
          <h3 className={`text-lg font-black tracking-tight transition-colors duration-500 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Other featured posts
          </h3>
          
          <div className={`divide-y transition-colors duration-500 ${
            isDark ? 'divide-white/5' : 'divide-slate-100'
          }`}>
            {trendingStories.map((story) => (
              <Link 
                key={story.num} 
                className="group py-4 first:pt-0 last:pb-0 flex items-start gap-4 cursor-pointer block"
                href={story.slug ? `/blog/${story.slug}` : "#"}
              >
                {/* Visual Number badge on the left */}
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border text-xs font-bold font-headline transition-all duration-300 group-hover:scale-105 ${
                  isDark 
                    ? 'bg-white/[0.02] border-white/5 text-slate-400 group-hover:border-sky-500/30 group-hover:text-sky-500' 
                    : 'bg-slate-50 border-slate-200 text-slate-500 group-hover:border-slate-300 group-hover:text-slate-950'
                }`}>
                  {story.num}
                </div>

                <div className="space-y-1">
                  <h4 className={`text-xs font-bold leading-normal transition-colors duration-300 group-hover:text-sky-500 ${
                    isDark ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    {story.title}
                  </h4>
                  <span className={`block text-[9px] font-bold uppercase tracking-widest ${
                    isDark ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    {story.tag}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
