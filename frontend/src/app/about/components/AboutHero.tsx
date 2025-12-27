import React from 'react'
import { aboutHero } from './about-data'


interface AboutHeroProps {
    title?: string
    description?: string
}

const AboutHero: React.FC<AboutHeroProps> = ({
    title = aboutHero.title,
    description = aboutHero.description
}) => {
    return (
        <div className="flex flex-wrap justify-center gap-3 py-16 md:py-24 text-center">
            <div className="flex max-w-2xl flex-col items-center gap-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
                    {title}
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default AboutHero