// components/HeroSection.tsx
import { Search } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="w-full px-4 py-12 md:py-20 flex justify-center">
            <div className="w-full max-w-[960px] flex flex-col items-center gap-8">
                <div className="w-full relative overflow-hidden rounded-2xl bg-surface-dark text-white p-8 md:p-16 text-center shadow-2xl shadow-primary/10">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-blue-900/80 pointer-events-none" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20">
                            Our Blog
                        </span>

                        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                            Insights & Thoughts
                        </h1>

                        <p className="text-lg md:text-xl text-white/80 max-w-xl font-body">
                            Exploring the intersection of design, technology, and future trends shaping the digital landscape.
                        </p>

                        {/* Search Bar */}
                        <div className="mt-8 w-full max-w-md relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                            </div>

                            <input
                                className="w-full h-12 md:h-14 pl-12 pr-28 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/30 border-none font-body shadow-lg"
                                placeholder="Search articles, topics..."
                                type="text"
                            />

                            <div className="absolute inset-y-1 right-1">
                                <button className="h-full px-4 md:px-6 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-sm transition-colors">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}