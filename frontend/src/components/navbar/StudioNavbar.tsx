'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import StudioLogo from './StudioLogo'
import { StudioNavbarProps } from './StudioNavbarProps'
import Button from './Button'
import { Container } from '@mui/material'
import { ThemeToggle } from './ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const StudioNavbar: React.FC<StudioNavbarProps> = ({
    navItems = [
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Services', href: '/services' },
        { label: 'Blog', href: '/blog' },
        { label: 'Products', href: '/products' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ],
    logo,
    ctaText = 'Get Started',
    ctaHref = '/contact',
    className = '',
    blurIntensity = 'md'
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [isMenuOpen])

    // Close on route change
    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    const isActive = (href: string) =>
        pathname === href ? 'text-primary' : 'text-on-surface-variant hover:text-primary'

    const menuItems = navItems.filter(i => i.label !== 'Blog')
    const hasBlog = navItems.some(i => i.label === 'Blog')

    return (
        <>
            {/* ── Sticky Navbar Bar ── */}
            <header
                className={`
                    sticky top-0 z-[10000] w-full
                    border-b border-outline-variant/30
                    ${isMenuOpen ? (isDark ? 'bg-black border-transparent' : 'bg-white border-transparent') : 'bg-surface/80 backdrop-blur-xl backdrop-saturate-150 dark:bg-black/60 dark:border-white/10'}
                    transition-all h-20
                    ${className}
                `}
            >
                <Container maxWidth="xl" className={`flex items-center h-20 px-6 md:px-10 transition-colors ${isMenuOpen ? (isDark ? 'text-white' : 'text-black') : 'text-slate-900 dark:text-white'}`}>

                    {/* Logo & Text — always left */}
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-none">
                        {logo || (
                            <>
                                <StudioLogo size="lg" />
                                <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">
                                    Flexiti Studio
                                </h2>
                            </>
                        )}
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex flex-1 justify-end items-center gap-8">
                        <nav className="flex items-center gap-8">
                            {navItems.map((item) => {
                                if (item.label === 'Blog') {
                                    return (
                                        <div key="blog" className="relative group">
                                            <button className={`flex items-center gap-1 text-sm font-bold transition-colors ${pathname === '/blog' || pathname === '/memes' ? 'text-primary' : 'text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary'}`}>
                                                Blog
                                                <span className="material-symbols-outlined text-base group-hover:rotate-180 transition-transform duration-200">expand_more</span>
                                            </button>
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-2">
                                                <Link href="/blog" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-500/10 transition-colors">
                                                    <span className="material-symbols-outlined text-[18px]">article</span> Blog
                                                </Link>
                                                <Link href="/memes" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-500/10 transition-colors">
                                                    <span className="material-symbols-outlined text-[18px]">video_library</span> Free Memes
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                }
                                return (
                                    <Link key={item.label} href={item.href} className={`text-sm font-bold transition-colors ${pathname === item.href ? 'text-primary' : 'text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary'}`}>
                                        {item.label}
                                    </Link>
                                )
                            })}
                        </nav>
                        <ThemeToggle />
                        <Button variant="primary" href={ctaHref} className="h-10 px-6 text-sm font-semibold rounded-full">
                            {ctaText}
                        </Button>
                    </div>

                    {/* Mobile: theme + hamburger */}
                    <div className="md:hidden ml-auto flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(v => !v)}
                            className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            <span className={`material-symbols-outlined text-2xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                {isMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>

                </Container>
            </header>

            {/* ── Mobile Full-Screen Menu — rendered OUTSIDE header to avoid stacking-context issues ── */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ position: 'fixed', inset: 0, top: 80, zIndex: 9999 }}
                        className={`md:hidden flex flex-col overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}
                    >
                        {/* Background Image with Overlay */}
                        <div 
                            className={`absolute inset-0 bg-cover bg-center pointer-events-none ${isDark ? 'opacity-[0.25]' : 'opacity-[0.1]'}`}
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1920&q=80")' }}
                        />

                        {/* Ambient glow blobs */}
                        <div className="absolute inset-0 pointer-events-none">
                            <motion.div 
                                animate={{ scale: [1, 1.2, 1], opacity: isDark ? [0.3, 0.4, 0.3] : [0.1, 0.15, 0.1] }}
                                transition={{ duration: 10, repeat: Infinity }}
                                className={`absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[100px] ${isDark ? 'bg-blue-600/20' : 'bg-blue-400/10'}`} 
                            />
                            <motion.div 
                                animate={{ scale: [1.2, 1, 1.2], opacity: isDark ? [0.2, 0.3, 0.2] : [0.08, 0.12, 0.08] }}
                                transition={{ duration: 12, repeat: Infinity }}
                                className={`absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full blur-[80px] ${isDark ? 'bg-purple-600/20' : 'bg-purple-400/10'}`} 
                            />
                        </div>

                        {/* Grid Pattern */}
                        <div 
                            className={`absolute inset-0 pointer-events-none ${isDark ? 'opacity-[0.07]' : 'opacity-[0.03]'}`}
                            style={{
                                backgroundImage: `
                                    linear-gradient(90deg, transparent 95%, ${isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'} 100%),
                                    linear-gradient(0deg, transparent 95%, ${isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'} 100%)
                                `,
                                backgroundSize: '40px 40px'
                            }}
                        />

                        {/* Scrollable content */}
                        <div className="relative z-10 flex-1 overflow-y-auto px-5 py-8 flex flex-col gap-3">

                            <p className={`text-[10px] font-bold tracking-[0.4em] uppercase px-2 mb-1 ${isDark ? 'text-white/30' : 'text-black/30'}`}>Navigation</p>

                            {/* Regular nav items */}
                            {menuItems.map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.04 + 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`
                                            flex items-center justify-between w-full px-5 py-4
                                            rounded-2xl border text-lg font-bold
                                            transition-all active:scale-[0.98]
                                            ${pathname === item.href
                                                ? (isDark ? 'bg-blue-600/20 border-blue-500/40 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-600 shadow-sm')
                                                : (isDark ? 'bg-white/[0.04] border-white/[0.06] text-white hover:bg-white/[0.08]' : 'bg-gray-50 border-gray-100 text-gray-900 hover:bg-gray-100 shadow-sm')}
                                        `}
                                    >
                                        <span>{item.label}</span>
                                        <span className={`material-symbols-outlined text-xl ${isDark ? 'opacity-30' : 'opacity-40'}`}>arrow_forward</span>
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Blog sub-section */}
                            {hasBlog && (
                                <motion.div
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: menuItems.length * 0.04 + 0.08 }}
                                    className="mt-2 space-y-2"
                                >
                                    <p className={`text-[10px] font-bold tracking-[0.3em] uppercase px-2 ${isDark ? 'text-blue-400/70' : 'text-blue-600/70'}`}>Resources</p>
                                    <Link
                                        href="/blog"
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`flex items-center gap-4 w-full px-5 py-4 rounded-2xl border transition-all active:scale-[0.98] shadow-sm group ${isDark ? 'bg-white/[0.04] border-white/[0.06] text-white hover:bg-white/[0.08]' : 'bg-white border-gray-100 text-gray-900 hover:bg-gray-50'}`}
                                    >
                                        <div className={`p-2 rounded-xl shrink-0 group-hover:scale-110 transition-transform ${isDark ? 'bg-blue-500/15 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                                            <span className="material-symbols-outlined">article</span>
                                        </div>
                                        <div>
                                            <p className="text-base font-bold">Blog Articles</p>
                                            <p className={`text-xs ${isDark ? 'text-white/40' : 'text-gray-500 font-medium'}`}>Tips, tutorials & news</p>
                                        </div>
                                    </Link>
                                    <Link
                                        href="/memes"
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`flex items-center gap-4 w-full px-5 py-4 rounded-2xl border transition-all active:scale-[0.98] shadow-sm group ${isDark ? 'bg-white/[0.04] border-white/[0.06] text-white hover:bg-white/[0.08]' : 'bg-white border-gray-100 text-gray-900 hover:bg-gray-50'}`}
                                    >
                                        <div className={`p-2 rounded-xl shrink-0 group-hover:scale-110 transition-transform ${isDark ? 'bg-purple-500/15 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
                                            <span className="material-symbols-outlined">video_library</span>
                                        </div>
                                        <div>
                                            <p className="text-base font-bold">Free Memes</p>
                                            <p className={`text-xs ${isDark ? 'text-white/40' : 'text-gray-500 font-medium'}`}>Viral-ready content</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            )}
                        </div>

                        {/* Sticky footer CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className={`relative z-10 px-6 pb-20 pt-6 border-t space-y-8 ${isDark ? 'bg-gradient-to-t from-black via-black/95 to-transparent border-white/10' : 'bg-gradient-to-t from-white via-white/95 to-transparent border-gray-100'}`}
                        >
                            <Button
                                variant="white"
                                href={ctaHref}
                                onClick={() => setIsMenuOpen(false)}
                                className={`
                                    w-full max-w-none py-5! rounded-2xl text-lg font-black transition-all active:scale-[0.98]
                                    ${isDark 
                                        ? '!bg-white !text-black shadow-[0_20px_50px_rgba(0,0,0,0.3)]' 
                                        : '!bg-slate-900 !text-white shadow-2xl shadow-slate-200'}
                                `}
                            >
                                {ctaText}
                            </Button>
                            
                            <div className="flex flex-col items-center gap-6">
                                <div className="flex gap-8">
                                    {[
                                        { Icon: Facebook, href: '#facebook' },
                                        { Icon: Instagram, href: '#instagram' },
                                        { Icon: Twitter, href: '#twitter' },
                                        { Icon: Linkedin, href: '#linkedin' }
                                    ].map(({ Icon, href }, idx) => (
                                        <a 
                                            key={idx} 
                                            href={href} 
                                            className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all ${isDark ? 'bg-white/5 border-white/10 text-white/40 hover:text-white hover:bg-white/10' : 'bg-gray-50 border-gray-100 text-gray-400 hover:text-blue-600 hover:bg-blue-50 hover:shadow-sm'}`}
                                        >
                                            <Icon size={20} />
                                        </a>
                                    ))}
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <p className={`text-[10px] uppercase tracking-[0.4em] font-black ${isDark ? 'text-white/20' : 'text-gray-300'}`}>© 2026 Flexiti Studio</p>
                                    <div className={`h-1 w-12 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-100'}`} />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default StudioNavbar