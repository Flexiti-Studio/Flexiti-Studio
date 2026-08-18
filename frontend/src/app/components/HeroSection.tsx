'use client';

import React, { useEffect, useRef, useState } from 'react';
import Button from './ui/Button';

const HeroSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const isInside =
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom;

            if (isInside) {
                setMouseOffset({
                    x: (e.clientX - rect.left - rect.width / 2) * 0.02,
                    y: (e.clientY - rect.top - rect.height / 2) * 0.02
                });
            } else {
                setMouseOffset({ x: 0, y: 0 });
            }
        };

        container.addEventListener('mousemove', handleMouseMove);

        return () => container.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div ref={containerRef} className="@container relative overflow-hidden rounded-xl">
            {/* Background with continuous movement + mouse interaction */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1920&q=80")',
                    transform: `translate(${mouseOffset.x}px, ${mouseOffset.y + scrollY * 0.05}px)`,
                    transition: 'transform 0.1s ease-out'
                }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-blue-900/40" />

            {/* Animated grid */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
            linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.1) 100%),
            linear-gradient(0deg, transparent 95%, rgba(255,255,255,0.1) 100%)
          `,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Floating particles */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-[480px] flex-col items-center justify-center gap-8 p-8 text-center">
                <div className="flex max-w-3xl flex-col gap-4">
                    <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                        Building Modern Software for the Future.
                    </h1>
                    <p className="text-base text-gray-200 sm:text-lg">
                        Flexiti Software builds scalable web apps, mobile apps, SaaS platforms, and AI-powered tools designed for growth and innovation.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="primary" href="/contact">
                        Start a Project
                    </Button>
                    <Button variant="secondary" href="#portfolio">
                        View Portfolio
                    </Button>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
