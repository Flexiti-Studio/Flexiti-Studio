"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'

const StudioLogo = ({ size = 'md', className = '' }: any) => {
    const sizeClasses: any = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-15 h-15',
    }

    return (
        <motion.img
            src="/branding/flexiti-logo.png"
            alt="Flexiti Studio Logo"
            className={`${sizeClasses[size]} object-contain ${className}`}
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        />
    )
}

export default StudioLogo
