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
                <div className="absolute top-full left-0 right-0 mt-2 md:hidden bg-white/5 backdrop-blur-md border border-solid border-white/10 rounded-xl p-4 shadow-lg">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`text-sm font-medium leading-normal transition-colors py-2 ${isActive(item.href)}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </Container>
    )
}

export default StudioNavbar