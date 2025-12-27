'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '@/components/reuseables/Button'
import IconButton from '@/app/portfolio/components/ui/IconButton'


const ContactNavbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Work', href: '/work' },
        { label: 'Contact', href: '/contact' },
    ]

    const isActive = (href: string) => {
        return pathname === href ? 'text-white font-bold' : 'text-white/80 hover:text-white'
    }

    return (
        <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#292249] px-6 sm:px-10 py-3">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-4 text-white hover:opacity-90 transition-opacity">
                    <div className="size-6 text-primary">
                        <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                        Flexiti Studio
                    </h2>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-9">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`text-sm font-medium leading-normal transition-colors ${isActive(item.href)}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA Button */}
                <div className="hidden md:flex">
                    <Button
                        variant="primary"
                        href="#form"
                        size="sm"
                        rounded="xl"
                        className="hover:opacity-90 transition-opacity"
                    >
                        Get a Quote
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <IconButton
                        icon={<span className="material-symbols-outlined">menu</span>}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        variant="glass"
                        ariaLabel="Toggle menu"
                    />
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 md:hidden glassmorphism-card rounded-xl p-4 shadow-lg z-50">
                        <nav className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`text-base font-medium py-2 transition-colors ${isActive(item.href)}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Button
                                    variant="primary"
                                    href="#form"
                                    fullWidth
                                    rounded="xl"
                                    className="hover:opacity-90 transition-opacity"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Get a Quote
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default ContactNavbar