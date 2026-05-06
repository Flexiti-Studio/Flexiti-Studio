"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const StudioLogo = ({ size = 'md', className = '' }: any) => {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Handle hydration to avoid mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    const sizeClasses: any = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-15 h-15',
    }

    const isDark = mounted && resolvedTheme === 'dark'
    const logoSrc = isDark ? "/branding/flexiti-logo-dark.png" : "/branding/flexiti-logo.png"

    return (
        <AnimatePresence mode="wait">
            <motion.img
                key={logoSrc}
                src={logoSrc}
                alt="Flexiti Studio Logo"
                className={`${sizeClasses[size]} object-contain ${className}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ 
                    duration: 0.5, 
                    type: "spring",
                    stiffness: 260,
                    damping: 20 
                }}
            />
        </AnimatePresence>
    )
}

export default StudioLogo

