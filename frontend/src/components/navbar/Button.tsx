import React from 'react'
import Link from 'next/link'

interface ButtonProps {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'white' | 'glass' | 'outline'
    href?: string
    onClick?: () => void
    className?: string
    type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    href,
    onClick,
    className = '',
    type = 'button'
}) => {
    const baseStyles = 'flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg text-base font-bold leading-normal tracking-[0.015em] transition-all'

    const variants = {
        primary: 'bg-primary text-on-primary hover:opacity-90',
        secondary: 'bg-secondary-container text-on-secondary-container hover:bg-white/20',
        white: 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-low',
        glass: 'bg-white/5 backdrop-blur-md border border-white/10 text-on-surface hover:bg-white/10',
        outline: 'border border-primary text-primary hover:bg-primary/10'
    }

    const buttonContent = (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            <span className="truncate">{children}</span>
        </button>
    )

    if (href) {
        return (
            <Link href={href} className={`inline-block ${className.includes('w-full') ? 'w-full' : ''}`}>
                {buttonContent}
            </Link>
        )
    }

    return buttonContent
}

export default Button