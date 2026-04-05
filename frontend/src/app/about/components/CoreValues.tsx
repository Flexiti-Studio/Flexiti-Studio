import React from 'react'
import { coreValues } from './about-data'


const CoreValues: React.FC = () => {
    return (
        <div className="flex flex-col gap-3 rounded-xl glassmorphism p-6 md:col-span-2 transition-transform duration-300 hover:scale-[1.02]">
            <span
                className="material-symbols-outlined text-primary"
                style={{
                    fontSize: '32px',
                    fontVariationSettings: "'wght' 300"
                }}
            >
                diamond
            </span>
            <div className="flex flex-col gap-1">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    Core Values
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Our work is guided by an unwavering commitment to these principles. They define who we are and how we build.
                </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {coreValues.map((value) => (
                    <div key={value.id} className="flex flex-col items-center text-center gap-2">
                        <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 dark:bg-primary/20">
                            <span className="material-symbols-outlined text-primary">
                                {value.icon}
                            </span>
                        </div>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            {value.title}
                        </span>
                        {value.description && (
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                {value.description}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CoreValues