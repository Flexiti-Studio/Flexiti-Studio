// app/blog/[slug]/components/NewsletterCTASection.tsx
'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterCTASection() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || isSubmitting) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('Subscribed:', email);
        setEmail('');
        setIsSubmitted(true);
        setIsSubmitting(false);

        // Reset after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section className="w-full bg-primary/5 dark:bg-white/5 py-16 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-[600px] mx-auto px-4 text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center p-3 bg-white dark:bg-surface-dark rounded-xl shadow-sm mb-6">
                    <Mail className="w-8 h-8 text-primary" />
                </div>

                {/* Title & Description */}
                <h2 className="text-3xl font-bold text-text-main dark:text-white mb-3">
                    Don&apos;t miss the next insight
                </h2>
                <p className="text-text-muted dark:text-gray-400 mb-8 font-body">
                    Join 15,000+ designers and developers getting our weekly digest.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-surface-dark border border-gray-300 dark:border-gray-700 text-text-main dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body shadow-sm"
                        required
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting || isSubmitted}
                        className="px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 disabled:opacity-50 transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
                    >
                        {isSubmitting ? 'Subscribing...' : isSubmitted ? 'Subscribed!' : 'Subscribe Free'}
                    </button>
                </form>

                <p className="text-xs text-gray-400 mt-4">
                    No spam. Unsubscribe anytime.
                </p>
            </div>
        </section>
    );
}