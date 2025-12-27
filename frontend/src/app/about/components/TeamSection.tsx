import React from 'react'
import Image from 'next/image'

interface TeamMember {
    id: number
    name: string
    role: string
    image: string
    bio: string
    skills: string[]
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'Alex Johnson',
        role: 'Lead Developer',
        image: '/team/alex.jpg',
        bio: '10+ years in full-stack development with expertise in React, Node.js, and cloud architecture.',
        skills: ['React', 'TypeScript', 'AWS', 'Node.js']
    },
    {
        id: 2,
        name: 'Maria Chen',
        role: 'UX Designer',
        image: '/team/maria.jpg',
        bio: 'Creating intuitive user experiences with 8 years in product design and user research.',
        skills: ['Figma', 'UX Research', 'Prototyping', 'UI Design']
    },
    // Add more team members
]

const TeamSection: React.FC = () => {
    return (
        <section className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Meet Our Team
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Passionate experts dedicated to building exceptional digital experiences.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                    <div
                        key={member.id}
                        className="glassmorphism rounded-xl p-6 transition-transform duration-300 hover:scale-[1.02]"
                    >
                        {/* Team Member Image */}
                        <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                                sizes="96px"
                            />
                        </div>

                        {/* Team Member Info */}
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {member.name}
                            </h3>
                            <p className="text-primary font-medium mb-2">{member.role}</p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                {member.bio}
                            </p>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2 justify-center">
                                {member.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TeamSection