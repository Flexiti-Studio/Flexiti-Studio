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

import { Metadata } from "next";

export const revalidate = 60; // Revalidate landing page cache every 60 seconds

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    'name': 'Flexiti Studio',
    'url': 'https://flexitistudio.com',
    'logo': 'https://flexitistudio.com/flexiti-logo.png',
    'description': 'Flexiti Studio is a custom software engineering agency specializing in SaaS MVP development, enterprise AI automations, and web & mobile app architecture.',
    'sameAs': [
      'https://www.instagram.com/flexitistudio',
      'https://twitter.com/flexitistudio',
      'https://www.linkedin.com/company/flexitistudio'
    ],
    'offers': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Custom Software Engineering',
          'description': 'End-to-end full-stack web and mobile application development with Next.js and React Native.'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'AI Automation Services',
          'description': 'Custom LLM integrations, AI workflow automation, and agentic business process engineering.'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'SaaS MVP Development',
          'description': 'Rapid turn-key SaaS MVP design, scalable cloud architecture, and monetization setups.'
        }
      }
    ],
    'knowsAbout': [
      'Custom Software Development',
      'AI Automations',
      'SaaS Development',
      'Next.js',
      'React Native',
      'TypeScript'
    ]
  };

  return (
    <main className="min-h-screen">
      {/* Inject JSON-LD Federation Search/Knowledge graph Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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