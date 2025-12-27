// components/NewsletterStrip.tsx
'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterStrip() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribing email:', email);
        setEmail('');
    };

    return (
        <section className="w-full bg-primary my-12 py-16">
            <div className="layout-container flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                {/* Content */}
                <div className="flex flex-col gap-2 max-w-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                        Join our newsletter
                    </h2>
                    <p className="text-white/80 font-body">
                        Get the latest insights on design, tech, and strategy delivered weekly to your inbox. No spam, ever.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-12 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all font-body"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-3 rounded-xl bg-white text-primary font-bold hover:bg-white/90 transition-colors shadow-lg shadow-black/10 whitespace-nowrap"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}