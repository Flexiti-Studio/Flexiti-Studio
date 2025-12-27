import React from 'react'
import ContactChannelCard from './ContactChannelCard'
import { contactChannels } from './contact-data'

interface ContactChannelsProps {
  title?: string
  description?: string
}

const ContactChannels: React.FC<ContactChannelsProps> = ({
  title = "Prefer a direct chat?",
  description = "Get in touch with us instantly through your preferred channel."
}) => {
  return (
    <div className="lg:pt-24 space-y-8">
      <div className="flex flex-col gap-3">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-text-secondary">{description}</p>
      </div>
      
      <div className="space-y-4">
        {contactChannels.map((channel) => (
          <ContactChannelCard
            key={channel.id}
            channel={channel}
          />
        ))}
      </div>
    </div>
  )
}

export default ContactChannels