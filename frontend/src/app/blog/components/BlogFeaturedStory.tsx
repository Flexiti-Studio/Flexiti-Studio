'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  if (!article) return null;

  return (
    <section className="mb-24 md:mb-32 relative group">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`overflow-hidden rounded-[3rem] border transition-all duration-700 ${isDark ? 'bg-zinc-900 border-white/5 shadow-2xl shadow-black/40' : 'bg-white border-slate-200 shadow-2xl shadow-slate-200/50'}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[500px]">
          {/* Image Section */}
          <div className="lg:col-span-7 relative overflow-hidden group/img">
            <img
              alt={article.title || 'Featured Article'}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
              src={article.image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
            
            <div className="absolute top-8 left-8">
               <span className="px-5 py-2 rounded-xl bg-black/40 backdrop-blur-md text-[10px] font-black text-white tracking-[0.2em] uppercase border border-white/10">
                 Featured Story
               </span>
            </div>
          </div>

          {/* Content Section */}
          <div className={`lg:col-span-5 p-10 md:p-16 flex flex-col justify-center relative ${isDark ? 'bg-zinc-900/50 backdrop-blur-3xl' : 'bg-white'}`}>
            <div className="flex items-center gap-6 mb-8">
              <span className={`px-4 py-2 rounded-full text-[9px] font-black tracking-widest uppercase border ${isDark ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                {article.category || 'Engineering'}
              </span>
              <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                {article.readTime || '12 min read'}
              </span>
            </div>

            <h2 className={`text-3xl md:text-5xl font-black font-headline mb-8 leading-[1.1] ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {article.title || 'How we Built a Scalable SaaS in 90 Days'}
            </h2>

            <p className={`text-lg mb-10 line-clamp-3 font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {article.description || 'A deep dive into the architectural decisions, tech stack selection, and agile methodologies that allowed our team to go from zero to production-ready at record speed.'}
            </p>

            <div className="flex items-center gap-4 mb-10 pt-8 border-t border-dashed border-slate-200 dark:border-white/5">
              <img
                alt={article.author?.name || 'Author'}
                className="w-14 h-14 rounded-full object-cover border-2 border-white/10 shadow-lg"
                src={article.author?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'}
              />
              <div>
                <p className={`font-black text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>{article.author?.name || 'Ola Richardson'}</p>
                <p className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{article.author?.title || 'CTO & Founder'}</p>
              </div>
            </div>

            <Link 
              href={article.slug ? `/blog/${article.slug}` : '#'} 
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-[10px] font-black tracking-widest uppercase transition-all active:scale-95 self-start ${isDark ? 'bg-white text-black hover:bg-slate-100 shadow-xl shadow-white/5' : 'bg-slate-900 text-white hover:bg-black shadow-xl shadow-slate-900/20'}`}
            >
              Read the Story
              <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
