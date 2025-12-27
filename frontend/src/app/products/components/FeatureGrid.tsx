import React from 'react'
import { Feature } from './types'


interface FeatureGridProps {
    title?: string
    description?: string
    features?: Feature[]
    columns?: 2 | 3 | 4
}

const FeatureGrid: React.FC<FeatureGridProps> = ({
    title = "Unified by Intelligent Technology.",
    description = "Our product suite is powered by a core of advanced AI, robust security protocols, and seamless integration capabilities, ensuring a cohesive and powerful user experience across all platforms.",
    features,
    columns = 2
}) => {
    const defaultFeatures: Feature[] = [
        {
            id: 1,
            title: 'Powered by AI',
            description: 'Intelligent automation and predictive insights.',
            icon: 'neurology'
        },
        {
            id: 2,
            title: 'Bank-Grade Security',
            description: 'Your data is always protected and secure.',
            icon: 'security'
        },
        {
            id: 3,
            title: 'Seamless Integration',
            description: 'Connect with the tools you already use.',
            icon: 'integration_instructions'
        },
        {
            id: 4,
            title: 'Centralized Hub',
            description: 'Manage everything from one single place.',
            icon: 'hub'
        }
    ]

    const gridCols = {
        2: 'grid-cols-2',
        3: 'grid-cols-2 md:grid-cols-3',
        4: 'grid-cols-2 md:grid-cols-4'
    }

    return (
        <section className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white/5 rounded-xl border border-white/10">
            {/* Text Content */}
            <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
                <h3 className="text-white text-2xl md:text-3xl font-bold">{title}</h3>
                <p className="text-text-secondary">{description}</p>
            </div>

            {/* Features Grid */}
            <div className={`flex-1 grid ${gridCols[columns]} gap-6 w-full`}>
                {(features || defaultFeatures).map((feature) => (
                    <div key={feature.id} className="flex flex-col items-center md:items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-3xl">
                            {feature.icon}
                        </span>
                        <h4 className="text-white font-medium text-center md:text-left">
                            {feature.title}
                        </h4>
                        <p className="text-text-secondary text-sm text-center md:text-left">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeatureGrid