// components/FeaturedStory.tsx
import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

export default function FeaturedStory() {
    return (
        <section className="layout-container pb-8">
            <div className="flex items-center gap-2 mb-6 text-primary">
                <Star className="w-6 h-6" />
                <h2 className="text-2xl font-bold tracking-tight text-text-main dark:text-white">
                    Featured Story
                </h2>
            </div>

            <article className="group relative flex flex-col md:flex-row overflow-hidden rounded-2xl bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-gray-100 dark:border-gray-800">
                {/* Image */}
                <div className="w-full md:w-3/5 aspect-video md:aspect-auto overflow-hidden">
                    <div className="relative w-full h-full">
                        <Image
                            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
                            alt="AI neural networks visualization"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 60vw"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-6 md:p-10 md:w-2/5 gap-4">
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                            Editor&apos;s Pick
                        </span>
                        <span className="text-sm text-text-muted dark:text-gray-400 font-body">
                            5 min read
                        </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white leading-tight group-hover:text-primary transition-colors">
                        The Future of AI in UX Design
                    </h3>

                    <p className="text-text-muted dark:text-gray-400 font-body leading-relaxed">
                        Artificial Intelligence is reshaping how we approach user experience, moving from static screens to predictive interfaces that anticipate user needs before they even arise.
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 mt-4">
                        <div className="relative size-10 rounded-full overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
                                alt="Alex Morgan"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-text-main dark:text-white">
                                Alex Morgan
                            </span>
                            <span className="text-xs text-text-muted dark:text-gray-500">
                                Oct 24, 2023
                            </span>
                        </div>
                    </div>

                    <div className="mt-4">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-primary font-bold hover:underline decoration-2 underline-offset-4"
                        >
                            Read Full Story
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </article>
        </section>
    );
}