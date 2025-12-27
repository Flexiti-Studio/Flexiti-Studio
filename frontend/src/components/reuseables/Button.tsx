import React from 'react'
import Link from 'next/link'

interface ButtonProps {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'dark' | 'gradient'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    href?: string
    onClick?: () => void
    className?: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    fullWidth?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    rounded?: 'default' | 'lg' | 'xl' | 'full'
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
    rightIcon,
    rounded = 'default'
}) => {
    // Size classes
    const sizeClasses = {
        xs: 'h-8 px-3 text-xs',
        sm: 'h-10 px-4 text-sm',
        md: 'h-12 px-5 text-base',
        lg: 'h-14 px-6 text-lg',
        xl: 'h-16 px-8 text-xl'
    }

    // Variant classes
    const variantClasses = {
        primary: 'bg-blue-600 text-white hover:opacity-90 transition-opacity',
        secondary: 'bg-white/10 text-white hover:bg-white/20 transition-colors',
        outline: 'border border-white/20 text-white hover:bg-white/5 transition-colors',
        glass: 'bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-colors',
        dark: 'bg-black/20 text-white hover:bg-black/30 transition-colors',
        gradient: 'bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-xl transition-all'
    }

    // Rounded classes
    const roundedClasses = {
        default: 'rounded-lg',
        lg: 'rounded-xl',
        xl: 'rounded-2xl',
        full: 'rounded-full'
    }

    // Disabled state
    const disabledClasses = disabled
        ? 'opacity-50 cursor-not-allowed hover:opacity-50'
        : 'cursor-pointer'

    // Width classes
    const widthClass = fullWidth ? 'w-full' : 'min-w-[84px] max-w-[480px]'

    const baseClasses = 'flex items-center justify-center overflow-hidden font-bold leading-normal tracking-[0.015em] transition-all duration-200'

    const buttonContent = (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${roundedClasses[rounded]}
        ${widthClass}
        ${disabledClasses}
        ${className}
      `}
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