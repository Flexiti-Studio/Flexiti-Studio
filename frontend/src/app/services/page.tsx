import { Metadata } from 'next'
import ServicesHero from './components/ServicesHero'
import ServicesGrid from './components/ServicesGrid'
import CTASection from '../components/CTASection'


export const metadata: Metadata = {
    title: 'Flexiti Studio - Services',
    description: 'Innovate with Our Suite of Tech Services. Flexiti Studio transforms your ideas into reality across software, hardware, and design.',
}

export default function ServicesPage() {
    return (
        <main className="flex-grow">
            <ServicesHero />
            <ServicesGrid />
            <CTASection />
        </main>
    )
}