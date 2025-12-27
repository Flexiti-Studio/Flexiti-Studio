import React from 'react'

interface ContactHeroProps {
    title?: string
    description?: string
}

const ContactHero: React.FC<ContactHeroProps> = ({
    title = "Let's Build the Future Together",
    description = "Tell us about your idea, and our team will get back to you within 24 hours."
}) => {
    return (
        <div className="flex flex-col gap-3">
            <h1 className=" text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
                {title}
            </h1>
            <p className="text-text-secondary text-base font-normal leading-normal max-w-md">
                {description}
            </p>
        </div>
    )
}

export default ContactHero