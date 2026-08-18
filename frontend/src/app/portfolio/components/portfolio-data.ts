import { PortfolioCategory, PortfolioItem } from "./types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    description: "A cutting-edge solution for data-driven insights.",
    category: "ai-systems",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "Abstract gradient of blue and purple representing an analytics platform",
    tags: ["AI", "Analytics", "Data Visualization", "Machine Learning"],
    caseStudyUrl: "/case-studies/ai-analytics-platform",
    year: 2023,
    client: "TechCorp Analytics",
    status: "completed",
    type: "Web App",
  },
  {
    id: 2,
    title: "Next-Gen Mobile Banking App",
    description: "Secure and intuitive mobile finance management.",
    category: "mobile",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    alt: "Sleek user interface of a modern mobile banking application",
    tags: ["Mobile", "Fintech", "Security", "UX Design"],
    caseStudyUrl: "/case-studies/mobile-banking-app",
    year: 2024,
    client: "Global Bank Inc.",
    status: "completed",
    type: "Mobile App",
  },
  {
    id: 3,
    title: "Smart Home Hardware Hub",
    description: "Centralized control for your connected home.",
    category: "saas",
    industry: "hardware",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    alt: "Minimalist design of a smart home hardware device on a clean background",
    tags: ["IoT", "Hardware", "Smart Home", "Product Design"],
    caseStudyUrl: "/case-studies/smart-home-hub",
    year: 2023,
    client: "HomeTech Solutions",
    status: "completed",
    type: "Hardware",
  },
  {
    id: 4,
    title: "Interactive Digital Training Module",
    description: "Engaging learning experiences for the modern workforce.",
    category: "software",
    industry: "digital-training",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "A person interacting with a futuristic, holographic training module",
    tags: ["E-learning", "Interactive", "Training", "EdTech"],
    caseStudyUrl: "/case-studies/digital-training-module",
    year: 2024,
    client: "LearnTech Corporation",
    status: "in-progress",
    type: "E-Learning",
  },
  {
    id: 5,
    title: "Creative Software Suite",
    description: "Powerful tools that bring ideas to life.",
    category: "software",
    industry: "design",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    alt: "Clean and colorful interface of a creative software suite for designers",
    tags: ["Creative", "Design Tools", "Productivity", "SaaS"],
    caseStudyUrl: "/case-studies/creative-software-suite",
    year: 2023,
    client: "Creative Studios",
    status: "completed",
    type: "Software",
  },
  {
    id: 6,
    title: "Automated AI System for Logistics",
    description: "Optimizing supply chains with artificial intelligence.",
    category: "ai-systems",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    alt: "Visualization of an AI network processing data for a logistics company",
    tags: ["AI", "Logistics", "Automation", "Supply Chain"],
    caseStudyUrl: "/case-studies/ai-logistics-system",
    year: 2024,
    client: "LogiTech Global",
    status: "completed",
    type: "AI System",
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  "all",
  "software",
  "mobile",
  "ai-systems",
  "hardware",
  "digital-training",
  "design",
  "saas",
];

export const categoryLabels: Record<PortfolioCategory, string> = {
  all: "All",
  software: "Software",
  mobile: "Mobile",
  "ai-systems": "AI Systems",
  hardware: "Hardware",
  "digital-training": "Digital Training",
  design: "Design",
  saas: "SaaS",
};

export function getFilteredPortfolioItems(
  category: PortfolioCategory
): PortfolioItem[] {
  if (category === "all") return portfolioItems;
  return portfolioItems.filter((item) => item.category === category);
}

export const staticFeaturedItems: PortfolioItem[] = [
  {
    id: 'f1',
    title: "Qefas Hub",
    description: "Outdated legacy systems caused significant administrative friction and data silos for a multi-campus educational institution.",
    category: "saas",
    industry: "digital-training",
    type: "Web App",
    challenge: "Outdated legacy systems caused significant administrative friction and data silos for a multi-campus educational institution.",
    solution: "We engineered a centralized management portal with real-time analytics, automated attendance, and seamless student-teacher communication channels.",
    result: "40% reduction in administrative overhead and a 25% increase in student engagement within the first semester.",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "AWS"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    year: 2024,
    status: "completed",
    client: "Qefas Hub Edu",
    role: "Lead Engineers & UX Designers",
    timeline: "6 Months",
    team: "Team of 4"
  },
  {
    id: 'f2',
    title: "FlexBZ",
    description: "SMEs lacked a unified view of their inventory and cash flow, leading to overstocking and missed revenue opportunities.",
    category: "saas",
    industry: "design",
    type: "SaaS",
    challenge: "SMEs lacked a view of inventory and cash flow.",
    solution: "An AI-powered inventory forecasting system.",
    result: "Average holding costs decreased by 18%.",
    tags: ["React", "Node.js", "OpenAI API", "Vercel"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    year: 2024,
    status: "completed",
    client: "FlexBZ Retail",
    role: "Full Stack Development Team",
    timeline: "4 Months",
    team: "Team of 3"
  }
];
