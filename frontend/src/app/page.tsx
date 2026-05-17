import LandingHero from "./components/home/LandingHero";
import LandingSocialProof from "./components/home/LandingSocialProof";
import LandingServices from "./components/home/LandingServices";
import LandingHowItWorks from "./components/home/LandingHowItWorks";
import LandingPortfolio from "./components/home/LandingPortfolio";
import LandingProducts from "./components/home/LandingProducts";
import LandingStats from "./components/home/LandingStats";
import LandingAbout from "./components/home/LandingAbout";
import LandingCTA from "./components/home/LandingCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
        <LandingHero />
        <LandingSocialProof />
        <LandingServices />
        <LandingHowItWorks />
        <LandingPortfolio />
        <LandingProducts />
        <LandingStats />
        <LandingAbout />
        <LandingCTA />
      </div>
    </main>
  );
}