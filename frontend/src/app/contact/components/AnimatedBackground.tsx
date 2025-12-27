'use client'

import React, { useEffect, useState } from 'react'

const AnimatedBackground: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 100
            const y = (e.clientY / window.innerHeight) * 100
            setMousePosition({ x, y })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Animated Circles */}
            <div
                className="absolute top-0 left-0 h-96 w-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-spin-slow"
                style={{
                    transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
                }}
            />
            <div
                className="absolute bottom-0 right-0 h-96 w-96 bg-purple-500/20 rounded-full blur-3xl opacity-30 animate-spin-slow-reverse"
                style={{
                    transform: `translate(${-mousePosition.x * 0.1}px, ${-mousePosition.y * 0.1}px)`
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-transparent to-background-dark" />
        </div>
    )
}

export default AnimatedBackground