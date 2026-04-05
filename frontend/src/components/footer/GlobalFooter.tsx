'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import StudioLogo from '@/components/navbar/StudioLogo';

export default function GlobalFooter() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

    const footerLinks = {
        services: [
            { label: 'Web Apps', href: '/services' },
            { label: 'Mobile Apps', href: '/services' },
            { label: 'SaaS Platforms', href: '/services' },
            { label: 'AI Solutions', href: '/services' },
        ],
        resources: [
            { label: 'Portfolio', href: '/portfolio' },
            { label: 'Blog', href: '/blog' },
            { label: 'Memes', href: '/memes' },
            { label: 'About Us', href: '/about' },
        ],
        contact: [
            { label: 'Twitter / X', href: '#' },
            { label: 'LinkedIn', href: '#' },
            { label: 'Instagram', href: '#' },
            { label: 'Email Us', href: 'mailto:admin@flexitistudio.com' },
        ]
    };

    return (
        <footer className={`w-full pt-32 pb-16 relative overflow-hidden transition-colors duration-500 border-t ${isDark ? 'bg-black border-white/5' : 'bg-white border-slate-200'}`}>
            {/* Ambient Background Effects */}
            <div className={`absolute top-0 left-1/4 w-96 h-96 blur-[120px] opacity-[0.07] pointer-events-none rounded-full ${isDark ? 'bg-blue-600' : 'bg-blue-400'}`} />
            <div className={`absolute bottom-0 right-1/4 w-96 h-96 blur-[120px] opacity-[0.07] pointer-events-none rounded-full ${isDark ? 'bg-purple-600' : 'bg-purple-400'}`} />

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-8 group">
                            <div className="scale-110 group-hover:rotate-[360deg] transition-transform duration-700">
                                <StudioLogo />
                            </div>
                            <span className={`text-xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                Flexiti<span className="text-blue-500">Studio</span>
                            </span>
                        </Link>
                        <p className={`text-sm font-medium leading-relaxed mb-8 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                            Building high-performance digital products for the next generation of founders and architects.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] mb-8 ${isDark ? 'text-white/40' : 'text-slate-400'}`}>Services</h4>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className={`text-sm font-bold transition-all hover:text-blue-500 hover:translate-x-1 inline-block ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] mb-8 ${isDark ? 'text-white/40' : 'text-slate-400'}`}>Resources</h4>
                        <ul className="space-y-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className={`text-sm font-bold transition-all hover:text-blue-500 hover:translate-x-1 inline-block ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] mb-8 ${isDark ? 'text-white/40' : 'text-slate-400'}`}>Connect</h4>
                        <ul className="space-y-4">
                            {footerLinks.contact.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className={`text-sm font-bold transition-all hover:text-blue-500 hover:translate-x-1 inline-block ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={`pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8 ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white/20' : 'text-slate-300'}`}>
                        © {new Date().getFullYear()} Flexiti Studio. All Rights Reserved.
                    </p>
                    
                    <div className="flex items-center gap-8">
                        <Link href="/privacy" className={`text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition-colors ${isDark ? 'text-white/20' : 'text-slate-300'}`}>
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className={`text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition-colors ${isDark ? 'text-white/20' : 'text-slate-300'}`}>
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
