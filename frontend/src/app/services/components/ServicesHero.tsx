import React from 'react'
import Button from './ui/Button'

const ServicesHero: React.FC = () => {
    return (
        <div
            className="relative @container mt-10 sm:mt-16 md:mt-20 mb-8 rounded-2xl overflow-hidden"
            style={{
                backgroundImage: "url('/images/service background.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay to make text readable */}
            <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>

            <div className="relative flex flex-col gap-6 px-4 py-20">
                <div className="flex flex-col gap-4 text-center items-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[864px]:text-6xl max-w-3xl">
                        Innovate with Our Suite of Tech Services
                    </h1>
                    <h2 className="text-gray-200 text-base font-normal leading-normal @[480px]:text-lg max-w-2xl">
                        Flexiti Studio transforms your ideas into reality across software, hardware, and design with cutting-edge technology and creative expertise.
                    </h2>
                </div>
                <div className="flex justify-center">
                    <Button
                        variant="primary"
                        href="#services"
                        size="md"
                        rounded="xl"
                        className="bg-blue-600 hover:bg-blue-700 text-white transition-all flex items-center gap-2 shadow-lg hover:shadow-2xl hover:scale-105"
                        leftIcon={<span className="material-symbols-outlined text-sm">explore</span>}
                    >
                        Explore Services
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ServicesHero
