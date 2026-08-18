import React from 'react'
import Button from './ui/Button'


const CTASection: React.FC = () => {
    return (
        <section id="contact" className="py-16 sm:py-24">
            <div className="mx-auto rounded-xl bg-gradient-to-r from-primary to-blue-600 p-8 text-center md:p-12">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Ready to build your next big idea?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                    Let&apos;s turn your vision into a reality. We&apos;re here to help you every step of the way.
                </p>
                <div className="mt-8 flex justify-center">
                    <Button variant="white" href="/contact">
                        Start a Project
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default CTASection