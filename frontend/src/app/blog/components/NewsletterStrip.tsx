// components/NewsletterStrip.tsx
'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterStrip() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);
        try {
            // Handle newsletter subscription
            console.log('Subscribing email:', email);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Reset form
            setEmail('');
            alert('Thank you for subscribing!');
        } catch (error) {
            console.error('Subscription error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full px-4 md:px-6 py-12 md:py-16">
            <div className="layout-container">
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-r from-primary to-primary/90 shadow-xl">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full"></div>
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white rounded-full"></div>
                    </div>

                    <div className="relative px-6 md:px-10 py-10 md:py-14">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
                            {/* Content */}
                            <div className="flex flex-col gap-3 md:gap-4 max-w-2xl">
                                <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-2">
                                    <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-sm font-bold text-white/90 uppercase tracking-wider">
                                        Newsletter
                                    </span>
                                </div>

                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                                    Stay Updated with the Latest
                                </h2>

                                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl">
                                    Get weekly insights on design, development, AI, and business strategy.
                                    Join {1000}+ readers who get our newsletter.
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-3 mt-2">
                                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium">
                                        No spam, ever
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium">
                                        Unsubscribe anytime
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium">
                                        Exclusive content
                                    </span>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="w-full md:w-auto flex-shrink-0">
                                <form
                                    onSubmit={handleSubmit}
                                    className="w-full max-w-md md:max-w-sm flex flex-col gap-4"
                                >
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your email address"
                                            className="w-full pl-12 pr-4 py-3 md:py-3.5 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:text-gray-500 text-gray-800 shadow-sm"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !email}
                                        className="px-6 py-3.5 rounded-xl bg-white text-primary font-bold hover:bg-white/95 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                                                <span>Subscribing...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Subscribe Now</span>
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                    />
                                                </svg>
                                            </>
                                        )}
                                    </button>

                                    <p className="text-xs text-white/60 text-center">
                                        By subscribing, you agree to our Privacy Policy and consent to receive updates.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}