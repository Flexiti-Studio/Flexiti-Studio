'use client'

import React from 'react'
import { budgetOptions } from './contact-data'

interface BudgetSliderProps {
    value: number
    onChange: (value: number) => void
    min?: number
    max?: number
}

const BudgetSlider: React.FC<BudgetSliderProps> = ({
    value,
    onChange,
    min = 0,
    max = 100
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(parseInt(e.target.value))
    }

    const getBudgetLabel = () => {
        if (value < 25) return '$5k - $20k'
        if (value < 50) return '$20k - $50k'
        if (value < 75) return '$50k - $100k'
        return '$100k+'
    }

    return (
        <div className="flex flex-col gap-3 pt-2">
            <div className="flex justify-between items-center">
                <p className="text-white text-base font-medium leading-normal">
                    Estimated Budget
                </p>
                <span className="text-primary font-semibold">
                    {getBudgetLabel()}
                </span>
            </div>

            <div className="flex h-[38px] w-full pt-1.5">
                <div className="flex h-1.5 w-full items-center">
                    <div className="relative w-full h-1.5 rounded-full bg-card-border">
                        {/* Filled Track */}
                        <div
                            className="absolute h-1.5 rounded-full bg-gradient-to-r from-primary to-blue-500"
                            style={{ width: `${value}%` }}
                        />

                        {/* Budget Labels */}
                        <div className="absolute w-full h-full flex items-center justify-between text-xs text-text-secondary px-1">
                            {budgetOptions.map((option) => (
                                <span key={option.label} className="relative">
                                    {option.label}
                                    <div
                                        className="absolute -top-2 left-1/2 -translate-x-1/2 w-px h-2 bg-text-secondary"
                                        style={{ opacity: value >= option.value ? 1 : 0.3 }}
                                    />
                                </span>
                            ))}
                        </div>

                        {/* Slider Input */}
                        <input
                            type="range"
                            min={min}
                            max={max}
                            value={value}
                            onChange={handleChange}
                            className="absolute w-full h-full opacity-0 cursor-pointer"
                        />

                        {/* Slider Thumb */}
                        <div
                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-lg"
                            style={{ left: `${value}%`, transform: 'translate(-50%, -50%)' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BudgetSlider