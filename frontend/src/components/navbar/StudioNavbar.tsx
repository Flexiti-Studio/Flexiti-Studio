'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import StudioLogo from './StudioLogo'
import { StudioNavbarProps } from './StudioNavbarProps'
import Button from './Button'
import { Container } from '@mui/material'
import { ThemeToggle } from './ThemeToggle'
import colors from '@/styles/colors'

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
    ctaHref = '/get-started',
    className = '',
    blurIntensity = 'md'
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    const blurClasses = {
        sm: 'backdrop-blur-sm',
        md: 'backdrop-blur-md',
        lg: 'backdrop-blur-lg'
    }

    const isActive = (href: string) => {
        return pathname === href ? colors.primary : 'hover:text-blue-500'
    }

    return (
        <Container
            maxWidth={"xl"}
            component={"header"}
            className={`
  sticky top-6 z-50 mx-auto
  flex items-center justify-between whitespace-nowrap
  rounded-2xl
  border border-white/30
  bg-white/70
  backdrop-blur-xl backdrop-saturate-150
  shadow-lg shadow-black/10
  px-6 md:px-10 py-3
  supports-[backdrop-filter]:bg-white/60
  dark:bg-black/40
  dark:border-white/10
  dark:shadow-black/40
  transition-all
  ${className}
`}
        >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
                {logo || (
                    <>
                        <StudioLogo size="lg" />
                        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                            Flexiti Studio
                        </h2>
                    </>
                )}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-end gap-8">
                <nav className="flex items-center gap-9">
                    {navItems.map((item) => {
                        if (item.label === 'Blog') {
                            return (
                                <div key={item.label} className="relative group">
                                    <button className={`flex items-center gap-1 text-sm font-medium leading-normal transition-colors ${isActive(item.href)}`}>
                                        Blog
                                        <span className="material-symbols-outlined text-[16px] group-hover:rotate-180 transition-transform duration-200">expand_more</span>
                                    </button>
                                    {/* Dropdown panel */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                        <div className="p-2">
                                            <Link
                                                href="/blog"
                                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-500/10 transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-[18px]">article</span>
                                                Blog
                                            </Link>
                                            <Link
                                                href="/memes"
                                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-500/10 transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-[18px]">video_library</span>
                                                Free Memes
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`text-sm font-medium leading-normal transition-colors ${isActive(item.href)}`}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                <ThemeToggle />
                {/* CTA Button */}
                <Button
                    variant="primary"
                    href={ctaHref}
                    className="h-10 px-4 text-sm hover:opacity-90 transition-opacity"
                >
                    {ctaText}
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
                <Button
                    variant="primary"
                    href={ctaHref}
                    className="h-8 px-3 text-xs hover:opacity-90 transition-opacity"
                >
                    {ctaText}
                </Button>

                <button
                    className=" p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    <span className="material-symbols-outlined">
                        {isMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-solid border-white/10 rounded-xl p-4 shadow-lg">
                    <nav className="flex flex-col gap-2">
                        {navItems.map((item) => {
                            if (item.label === 'Blog') {
                                return (
                                    <div key={item.label} className="flex flex-col gap-1">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 pt-2">Blog</span>
                                        <Link href="/blog" className="flex items-center gap-2 text-sm font-medium py-2 px-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                                            <span className="material-symbols-outlined text-[18px]">article</span> Blog Articles
                                        </Link>
                                        <Link href="/memes" className="flex items-center gap-2 text-sm font-medium py-2 px-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                                            <span className="material-symbols-outlined text-[18px]">video_library</span> Free Memes
                                        </Link>
                                    </div>
                                )
                            }
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`text-sm font-medium leading-normal transition-colors py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 ${isActive(item.href)}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            )}
        </Container>
    )
}

export default StudioNavbar