import React from 'react'
import { ValueCardT } from './types'


interface ValueCardProps {
    value: ValueCardT
    className?: string
}

const ValueCard: React.FC<ValueCardProps> = ({ value, className = '' }) => {
    return (
        <div className={`
      flex flex-1 flex-col gap-3 rounded-xl glassmorphism p-6 
      transition-transform duration-300 hover:scale-[1.02]
      ${className}
    `}>
            <span
                className="material-symbols-outlined text-primary"
                style={{
                    fontSize: '32px',
                    fontVariationSettings: `'wght' ${value.iconWeight || 300}`
                }}
            >
                {value.icon}
            </span>
            <div className="flex flex-col gap-1">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    {value.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {value.description}
                </p>
            </div>
        </div>
    )
}

export default ValueCard