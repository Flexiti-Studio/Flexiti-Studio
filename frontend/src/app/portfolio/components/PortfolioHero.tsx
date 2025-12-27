import React from 'react'

interface PortfolioHeroProps {
    title?: string
    description?: string
}

const PortfolioHero: React.FC<PortfolioHeroProps> = ({
    title = "Explore Our Innovations",
    description = "A showcase of our work in software, AI, and creative hardware solutions."
}) => {
    return (
        <div className="flex flex-wrap justify-between gap-3 p-4 mb-6 mt-5">
            <div className="flex w-full flex-col gap-3 text-center">
                <h1 className=" text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                    {title}
                </h1>
                <p className="text-text-secondary text-base font-normal leading-normal max-w-2xl mx-auto">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default PortfolioHero