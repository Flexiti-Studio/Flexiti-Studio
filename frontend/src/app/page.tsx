import CTASection from "./components/CTASection";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (

    <main className="flex-grow">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <CTASection />
      </div>
    </main>


  )
}