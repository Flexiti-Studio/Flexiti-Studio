import LandingHero from "./components/home/LandingHero";
import LandingSocialProof from "./components/home/LandingSocialProof";
import LandingServices from "./components/home/LandingServices";
import LandingHowItWorks from "./components/home/LandingHowItWorks";
import LandingPortfolio from "./components/home/LandingPortfolio";
import LandingProducts from "./components/home/LandingProducts";
import LandingStats from "./components/home/LandingStats";
import LandingAbout from "./components/home/LandingAbout";
import LandingCTA from "./components/home/LandingCTA";
import client from "@/sanity/client";

export const revalidate = 60; // Revalidate landing page cache every 60 seconds

export default async function Home() {
  let landingProjects = [];
  try {
    landingProjects = await client.fetch(`
      *[_type == "portfolioItem" && showOnLanding == true] | order(order asc, _createdAt desc) {
        "id": _id,
        title,
        description,
        category,
        industry,
        "image": mainImage.asset->url,
        alt,
        tags,
        caseStudyUrl,
        year,
        client,
        status,
        type,
        role,
        timeline,
        team,
        challenge,
        solution,
        result,
        "images": images[].asset->url,
        showOnLanding,
        featured,
        order
      }
    `);
  } catch (error) {
    console.error("Failed to fetch landing projects from Sanity:", error);
  }

  return (
    <main className="min-h-screen">
      <div>
        <LandingHero />
        <LandingSocialProof />
        <LandingServices />
        <LandingHowItWorks />
        <LandingPortfolio projects={landingProjects} />
        <LandingProducts />
        <LandingStats />
        <LandingAbout />
        <LandingCTA />
      </div>
    </main>
  );
}