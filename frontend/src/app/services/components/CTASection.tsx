import React from 'react'
import Button from './ui/Button'


interface CTASectionProps {
    title?: string
    description?: string
    buttonText?: string
    buttonHref?: string
}

const CTASection: React.FC<CTASectionProps> = ({
    title = "Ready to Build the Future?",
    description = "Let's turn your vision into a reality. Contact us to discuss your project and discover how Flexiti Studio can help you innovate and grow.",
    buttonText = "Let's Collaborate",
    buttonHref = "/contact"
}) => {
    return (
        <section className="py-10 sm:py-20">
            <div className="flex flex-col items-center gap-6 rounded-xl bg-primary/10 p-8 sm:p-12 text-center border border-primary/20">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {title}
                </h2>
                <p className="text-[#E0E0E0] max-w-xl">
                    {description}
                </p>
                <Button
                    variant="primary"
                    href={buttonHref}
                    size="lg"
                    className="rounded-xl hover:opacity-90 transition-opacity"
                    leftIcon={<span className="material-symbols-outlined text-sm">handshake</span>}
                >
                    {buttonText}
                </Button>
            </div>
        </section>
    )
}

export default CTASection