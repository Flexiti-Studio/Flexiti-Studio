import React from 'react'
import ServiceCard from './ServiceCard'
import { services } from './constants'


const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="py-16 sm:py-24">
            <h2 className="px-4 pb-8 pt-5 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                What We Build
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </section>
    )
}

export default ServicesSection