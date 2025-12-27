// app/not-found.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Home, Search, ArrowLeft, Database, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleBack = () => {
        setIsAnimating(true);
        setTimeout(() => router.back(), 300);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background-light via-white to-purple-50 dark:from-background-dark dark:via-gray-900 dark:to-purple-900/10 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-primary/20 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Glow Effect on Mouse */}
            <div
                className="fixed w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 blur-3xl pointer-events-none transition-transform duration-100"
                style={{
                    transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
                }}
            />

            <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
                <div className="max-w-2xl mx-auto text-center space-y-8">
                    {/* Animated Error Code */}
                    <div className="relative">
                        <div className="text-[180px] md:text-[240px] font-black tracking-tighter leading-none">
                            <span className="text-primary/20">4</span>
                            <span className="text-primary/30">0</span>
                            <span className="text-primary/40">4</span>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="relative">
                                <div className={`absolute -inset-4 bg-primary/10 rounded-full blur-xl transition-all duration-700 ${isAnimating ? 'scale-150' : 'animate-pulse'}`} />
                                <div className="relative p-6 bg-gradient-to-br from-white to-gray-50 dark:from-surface-dark dark:to-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl">
                                    <Database className="w-16 h-16 text-primary mx-auto mb-4" />
                                    <div className="text-3xl font-bold text-text-main dark:text-white mb-2">
                                        Page Lost in Space
                                    </div>
                                    <p className="text-text-muted dark:text-gray-400 max-w-md">
                                        The digital coordinates you entered don't match any known location in our universe.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-text-main dark:text-white">
                            Lost in the <span className="text-primary">Digital Void</span>
                        </h1>
                        <p className="text-lg text-text-muted dark:text-gray-400 max-w-xl mx-auto">
                            Don't worry, even the best explorers get lost sometimes. Let's get you back on track.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                        <div className="p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800">
                            <div className="text-2xl font-bold text-primary">99.9%</div>
                            <div className="text-sm text-text-muted dark:text-gray-400">Uptime</div>
                        </div>
                        <div className="p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800">
                            <div className="text-2xl font-bold text-primary">10K+</div>
                            <div className="text-sm text-text-muted dark:text-gray-400">Pages</div>
                        </div>
                        <div className="p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800">
                            <div className="text-2xl font-bold text-primary">0.1%</div>
                            <div className="text-sm text-text-muted dark:text-gray-400">Errors</div>
                        </div>
                        <div className="p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800">
                            <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="text-sm text-text-muted dark:text-gray-400">Fast Recovery</div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <button
                            onClick={handleBack}
                            className={`group px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 ${isAnimating ? 'scale-95 opacity-80' : ''}`}
                        >
                            <ArrowLeft className={`w-5 h-5 transition-transform ${isAnimating ? 'translate-x-2' : 'group-hover:-translate-x-1'}`} />
                            Go Back
                        </button>

                        <Link
                            href="/"
                            className="px-8 py-4 bg-white dark:bg-surface-dark border-2 border-gray-200 dark:border-gray-700 text-text-main dark:text-white font-bold rounded-xl hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center gap-3 shadow-sm hover:shadow-md"
                        >
                            <Home className="w-5 h-5" />
                            Home Page
                        </Link>

                        <Link
                            href="/blog"
                            className="px-8 py-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-text-main dark:text-white font-bold rounded-xl hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            <Search className="w-5 h-5" />
                            Explore Blog
                        </Link>
                    </div>

                    {/* Search Suggestion */}
                    <div className="pt-8">
                        <p className="text-text-muted dark:text-gray-400 text-sm mb-4">
                            Or try searching for what you need:
                        </p>
                        <div className="relative max-w-md mx-auto">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles, topics, or guides..."
                                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        router.push(`/search?q=${(e.target as HTMLInputElement).value}`);
                                    }
                                }}
                            />
                        </div>
                    </div>

                    {/* Help Links */}
                    <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                        <p className="text-text-muted dark:text-gray-400 text-sm mb-4">
                            Need help? Check these resources:
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/help" className="text-primary hover:underline text-sm">
                                Help Center
                            </Link>
                            <Link href="/contact" className="text-primary hover:underline text-sm">
                                Contact Support
                            </Link>
                            <Link href="/sitemap" className="text-primary hover:underline text-sm">
                                Site Map
                            </Link>
                            <Link href="/status" className="text-primary hover:underline text-sm">
                                System Status
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer Note */}
            <footer className="relative z-10 py-8 text-center">
                <p className="text-xs text-gray-400 dark:text-gray-500">
                    Error 404 • Page not found • {new Date().getFullYear()} Tech Studio
                </p>
            </footer>
        </div>
    );
}