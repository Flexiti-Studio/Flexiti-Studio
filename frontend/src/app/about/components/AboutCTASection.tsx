import Button from '@/components/reuseables/Button'
import React from 'react'
import { ctaSection } from './about-data'


interface AboutCTASectionProps {
    title?: string
    description?: string
    buttonText?: string
    buttonHref?: string
}

const AboutCTASection: React.FC<AboutCTASectionProps> = ({
    title = ctaSection.title,
    description = ctaSection.description,
    buttonText = ctaSection.buttonText,
    buttonHref = ctaSection.buttonHref
}) => {
    return (
        <div className="py-16 md:py-24">
            <div className="flex flex-col items-center justify-center gap-6 text-center">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        {title}
                    </h1>
                    <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl">
                        {description}
                    </p>
                </div>
                <Button
                    variant="primary"
                    href={buttonHref}
                    size="lg"
                    className="transition-transform hover:scale-105"
                    leftIcon={<span className="material-symbols-outlined text-sm">chat</span>}
                >
                    {buttonText}
                </Button>
            </div>
        </div>
    )
}

export default AboutCTASection