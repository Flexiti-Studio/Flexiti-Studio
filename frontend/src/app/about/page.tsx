import { Metadata } from 'next'
import AboutHero from './components/AboutHero'
import MissionVisionGrid from './components/MissionVisionGrid'
import CoreValues from './components/CoreValues'
import AboutCTASection from './components/AboutCTASection'


export const metadata: Metadata = {
    title: 'About Flexiti Software',
    description: 'Flexiti Software is a creative software company helping businesses build reliable digital products. We specialize in web development, mobile apps, backend engineering, and intelligent systems.',
}

export default function AboutPage() {
    return (


        <main className="flex-1">
            <AboutHero />

            {/* Mission, Vision & Core Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                <MissionVisionGrid />
                <CoreValues />
            </div>

            <AboutCTASection />
        </main>


    )
}