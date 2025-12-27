import React from 'react'
import { Service } from './types'


interface ServiceCardProps {
    service: Service
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
        <div className="flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-800/20 p-6 shadow-sm transition-shadow hover:shadow-lg">
            <span className="material-symbols-outlined text-primary">
                {service.icon}
            </span>
            <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {service.description}
                </p>
            </div>
        </div>
    )
}

export default ServiceCard