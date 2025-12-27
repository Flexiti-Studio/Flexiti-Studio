import React from 'react'

interface IconButtonProps {
    icon: React.ReactNode
    onClick?: () => void
    variant?: 'primary' | 'secondary' | 'glass' | 'outline' | 'dark' | 'ghost'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    className?: string
    ariaLabel: string
    disabled?: boolean
    rounded?: 'default' | 'lg' | 'xl' | 'full'
    type?: 'button' | 'submit' | 'reset'
}

const IconButton: React.FC<IconButtonProps> = ({
    icon,
    onClick,
    variant = 'glass',
    size = 'md',
    className = '',
    ariaLabel,
    disabled = false,
    rounded = 'default',
    type = 'button'
}) => {
    // Size classes
    const sizeClasses = {
        xs: 'p-1.5 size-6',
        sm: 'p-2 size-8',
        md: 'p-3 size-10',
        lg: 'p-4 size-12',
        xl: 'p-5 size-14'
    }

    // Variant classes
    const variantClasses = {
        primary: 'bg-primary text-white hover:opacity-90 active:opacity-80',
        secondary: 'bg-white/10 text-white hover:bg-white/20 active:bg-white/30',
        glass: 'bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 active:bg-white/15',
        outline: 'border border-white/20 text-white hover:bg-white/5 active:bg-white/10',
        dark: 'bg-black/20 text-white hover:bg-black/30 active:bg-black/40',
        ghost: 'text-white hover:bg-white/5 active:bg-white/10'
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
        ? 'opacity-50 cursor-not-allowed pointer-events-none'
        : 'cursor-pointer active:scale-95'

    const baseClasses = 'flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50'

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${roundedClasses[rounded]}
        ${disabledClasses}
        ${className}
      `}
        >
            {icon}
        </button>
    )
}

export default IconButton