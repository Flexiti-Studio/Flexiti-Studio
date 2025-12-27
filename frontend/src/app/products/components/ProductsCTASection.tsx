import Button from '@/app/services/components/ui/Button'
import React from 'react'


interface ProductsCTASectionProps {
    title?: string
    description?: string
    primaryButtonText?: string
    primaryButtonHref?: string
    secondaryButtonText?: string
    secondaryButtonHref?: string
}

const ProductsCTASection: React.FC<ProductsCTASectionProps> = ({
    title = "Ready to Elevate Your Digital Experience?",
    description = "Discover how Flexiti Studio can transform your operations. Get in touch for a personalized demo or start a free trial today.",
    primaryButtonText = "Request a Demo",
    primaryButtonHref = "/demo",
    secondaryButtonText = "Start Free Trial",
    secondaryButtonHref = "/free-trial"
}) => {
    return (
        <section className="bg-primary/20 rounded-xl p-8 md:p-12 text-center flex flex-col items-center gap-6 border border-primary/30">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                {title}
            </h2>
            <p className="text-white/80 max-w-2xl">
                {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Button
                    variant="primary"
                    href={primaryButtonHref}
                    size="lg"
                    className="hover:opacity-90 transition-opacity"
                    leftIcon={<span className="material-symbols-outlined text-sm">slideshow</span>}
                >
                    {primaryButtonText}
                </Button>
                <Button
                    variant="glass"
                    href={secondaryButtonHref}
                    size="lg"
                    className="hover:bg-white/20 transition-colors"
                    leftIcon={<span className="material-symbols-outlined text-sm">play_circle</span>}
                >
                    {secondaryButtonText}
                </Button>
            </div>
        </section>
    )
}

export default ProductsCTASection