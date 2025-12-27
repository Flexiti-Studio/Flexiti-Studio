import React from 'react'
import Link from 'next/link'
import { ContactChannel } from './types'

interface ContactChannelCardProps {
    channel: ContactChannel
}

const ContactChannelCard: React.FC<ContactChannelCardProps> = ({ channel }) => {
    return (
        <Link
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full p-4 rounded-lg border border-solid border-card-border bg-card-bg hover:border-primary transition-all duration-300 hover:scale-[1.02] group"
        >
            <div className={`text-3xl ${channel.iconColor}`}>
                <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '32px' }}
                >
                    {channel.icon}
                </span>
            </div>

            <div className="flex flex-col flex-1">
                <span className=" font-medium group-hover:text-primary transition-colors">
                    {channel.title}
                </span>
                <span className="text-text-secondary text-sm">
                    {channel.description}
                </span>
            </div>

            <span className="material-symbols-outlined text-text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all">
                arrow_forward
            </span>
        </Link>
    )
}

export default ContactChannelCard