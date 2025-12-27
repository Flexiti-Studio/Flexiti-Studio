import { Metadata } from 'next'
import PortfolioHero from './components/PortfolioHero'
import PortfolioGrid from './components/PortfolioGrid'


export const metadata: Metadata = {
    title: 'Flexiti Studio - Portfolio',
    description: 'Explore our portfolio of innovative software, AI, and hardware solutions that transform ideas into reality.',
}

export default function OurWorkPage() {
    return (
        <main className="flex-grow">
            <PortfolioHero />
            <PortfolioGrid />
        </main>

    )
}