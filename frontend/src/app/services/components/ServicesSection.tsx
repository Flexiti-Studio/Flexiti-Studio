import React from 'react'
import ServiceGrid from './ServiceGrid'
import { ServiceSection } from './types'


interface ServicesSectionProps {
    section: ServiceSection
    onServiceClick?: (serviceId: number) => void
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
    section,
    onServiceClick
}) => {
    return (
        <section id={`services-${section.category}`}>
            <h2 className=" text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                {section.title}
            </h2>
            <ServiceGrid
                services={section.services}
                columns={section.services.length >= 4 ? 4 : 3}
                onServiceClick={(service) => onServiceClick?.(service.id)}
            />
        </section>
    )
}

export default ServicesSection