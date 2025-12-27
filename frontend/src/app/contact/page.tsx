/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import AnimatedBackground from './components/AnimatedBackground'
import ContactHero from './components/ContactHero'
import ContactForm from './components/ContactForm'
import ContactChannels from './components/ContactChannels'


export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleFormSubmit = async (data: any) => {
        setIsSubmitting(true)

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500))

            toast.success('Message sent successfully! We\'ll get back to you within 24 hours.', {
                duration: 5000,
                position: 'top-right',
            })

            // Reset form would be handled by react-hook-form reset
            console.log('Form data:', data)

        } catch (error) {
            toast.error('Something went wrong. Please try again.', {
                duration: 3000,
                position: 'top-right',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <Toaster />

            <div className="relative min-h-screen w-full overflow-hidden bg-background-dark">
                <AnimatedBackground />

                <div className="relative z-10 flex h-full grow flex-col">


                    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Left Column: Form */}
                            <div id="form" className="flex flex-col gap-8">
                                <ContactHero />
                                <ContactForm
                                    onSubmit={handleFormSubmit}
                                    isLoading={isSubmitting}
                                />
                            </div>

                            {/* Right Column: Direct Contact */}
                            <ContactChannels />
                        </div>
                    </main>

                </div>
            </div>
        </>
    )
}