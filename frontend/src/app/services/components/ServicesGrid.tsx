'use client'

import React, { useState } from 'react'
import ServicesSection from './ServicesSection'
import { Service } from './types'
import { serviceSections } from './services-data'

const ServicesGrid: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all')
    const [selectedService, setSelectedService] = useState<Service | null>(null)

    const filteredSections =
        selectedCategory === 'all'
            ? serviceSections
            : serviceSections.filter((section) => section.category === selectedCategory)

    const handleServiceClick = (serviceId: number) => {
        const service = serviceSections
            .flatMap((s) => s.services)
            .find((s) => s.id === serviceId)
        setSelectedService(service || null)
        console.log('Service clicked:', service)
    }

    return (
        <div className="flex flex-col gap-12 md:gap-16 px-4 sm:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
                <button
                    className={`px-5 py-2 rounded-full font-semibold cursor-pointer transition-all duration-200 ${selectedCategory === 'all'
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-black/20 text-black/90 hover:bg-white/30'
                        }`}
                    onClick={() => setSelectedCategory('all')}
                >
                    All Services
                </button>
                {[...new Set(serviceSections.map((s) => s.category))].map((category) => (
                    <button
                        key={category}
                        className={`px-5 py-2 rounded-full font-semibold cursor-pointer transition-all duration-200 capitalize ${selectedCategory === category
                            ? 'bg-primary text-white shadow-md'
                            : 'bg-black/20 text-black/90 hover:bg-white/30'
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>


            {/* Services Sections */}
            {filteredSections.map((section) => (
                <ServicesSection
                    key={section.id}
                    section={section}
                    onServiceClick={handleServiceClick}
                />
            ))}

            {/* Service Detail Modal */}
            {selectedService && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
                    <div className="bg-background-dark border border-white/10 rounded-3xl p-8 max-w-lg w-full shadow-2xl transition-transform transform scale-100 animate-scaleIn">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-3xl">
                                    {selectedService.icon}
                                </span>
                                <h3 className="text-white text-2xl font-bold">
                                    {selectedService.title}
                                </h3>
                            </div>
                            <button
                                onClick={() => setSelectedService(null)}
                                className="text-white/60 hover:text-white transition-colors"
                            >
                                <span className="material-symbols-outlined text-2xl">
                                    close
                                </span>
                            </button>
                        </div>
                        <p className="text-text-secondary mb-6">{selectedService.description}</p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all">
                                Learn More
                            </button>
                            <button className="border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
                                Get Quote
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ServicesGrid
