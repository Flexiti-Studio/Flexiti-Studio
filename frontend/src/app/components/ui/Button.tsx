import React from 'react'
import Link from 'next/link'

interface ButtonProps {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'white' | 'glass' | 'outline' | 'gradient'
    size?: 'sm' | 'md' | 'lg' | 'xl'
    href?: string
    onClick?: () => void
    className?: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    fullWidth?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    className = '',
    type = 'button',
    disabled = false,
    fullWidth = false,
    leftIcon,
    rightIcon
}) => {
    // Size classes
    const sizeClasses = {
        sm: 'h-10 px-4 text-sm',
        md: 'h-12 px-5 text-base',
        lg: 'h-14 px-6 text-lg',
        xl: 'h-16 px-8 text-xl'
    }

    // Variant classes
    const variantClasses = {
        primary: 'bg-primary text-white shadow-lg shadow-primary/30 hover:scale-105 transition-transform',
        secondary: 'bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-colors',
        white: 'bg-white text-primary shadow-lg hover:bg-gray-50 hover:scale-105 transition-transform',
        glass: 'bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-colors',
        outline: 'border-2 border-primary text-primary hover:bg-primary/10 transition-colors',
        gradient: 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105'
    }

    // Disabled state
    const disabledClasses = disabled
        ? 'opacity-50 cursor-not-allowed hover:scale-100'
        : 'cursor-pointer'

    // Width classes
    const widthClass = fullWidth ? 'w-full' : 'min-w-[84px] max-w-[480px]'

    const baseClasses = 'flex items-center justify-center overflow-hidden rounded-lg font-bold leading-normal transition-all duration-200'

    const buttonContent = (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${disabledClasses} ${className}`}
        >
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            <span className="truncate">{children}</span>
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </button>
    )

    // If href is provided, wrap in Link
    if (href && !disabled) {
        return (
            <Link href={href} className={`inline-block ${fullWidth ? 'w-full' : ''}`}>
                {buttonContent}
            </Link>
        )
    }

    return buttonContent
}

export default Button