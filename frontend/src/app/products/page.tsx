import { Metadata } from 'next'
import ProductsHero from './components/ProductsHero'
import ProductsSection from './components/ProductsSection'
import FeatureGrid from './components/FeatureGrid'
import ProductsCTASection from './components/ProductsCTASection'


export const metadata: Metadata = {
    title: 'Flexiti Studio - Products',
    description: 'The Future of Digital Interaction. Empowering users and businesses through intelligently crafted software, AI systems, and innovative hardware solutions.',
}

export default function ProductsPage() {
    return (


        <main className="flex flex-col gap-12 md:gap-16 lg:gap-20 mt-10">
            <ProductsHero />
            <ProductsSection />
            <FeatureGrid />
        </main>


    )
}