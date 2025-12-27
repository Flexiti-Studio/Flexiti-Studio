import React from 'react'
import { Service } from './types'

interface ServiceCardProps {
    service: Service
    onClick?: () => void
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
    return (
        <div
            className="
                flex flex-1 flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-black/10
                cursor-pointer group
                transition-all duration-300 ease-in-out
                hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg hover:scale-105
            "
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
        >
            {/* Icon */}
            <span className="material-symbols-outlined  text-3xl  transition-colors">
                {service.icon}
            </span>

            {/* Content */}
            <div className="flex flex-col gap-2">
                <h3 className=" text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                    {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-snug">
                    {service.description}
                </p>
            </div>
        </div>
    )
}

export default ServiceCard
