import React from 'react'
import ServiceCard from './ServiceCard'
import { Service } from './types'


interface ServiceGridProps {
    services: Service[]
    columns?: number
    onServiceClick?: (service: Service) => void
}

const ServiceGrid: React.FC<ServiceGridProps> = ({
    services,
    columns = 2,
    onServiceClick
}) => {
    const gridCols = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5'
    }

    return (
        <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-4 p-4`}>
            {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    service={service}
                    onClick={() => onServiceClick?.(service)}
                />
            ))}
        </div>
    )
}

export default ServiceGrid