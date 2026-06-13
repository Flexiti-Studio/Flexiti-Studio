import { Product, ProductCategory, Feature } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "FlexBZ",
    description: "The all-in-one platform to manage and scale your business.",
    category: "business",
    image: "/branding/dashboard services.png",
    alt: "Modern user interface for a business management app",
    features: [
      "Analytics Dashboard",
      "Team Collaboration",
      "Project Management",
      "CRM",
    ],
    pricing: {
      type: "subscription",
      price: "$49",
      period: "month",
    },
    status: "active",
    tags: ["SaaS", "Business", "Management"],
  },
  {
    id: 2,
    name: "Qefas Hub",
    description:
      "Streamlining school operations for modern educational institutions.",
    category: "education",
    image: "/branding/built for africans.png",
    alt: "Interface of an educational productivity app",
    features: [
      "Student Management",
      "Grade Tracking",
      "Parent Portal",
      "Resource Library",
    ],
    pricing: {
      type: "subscription",
      price: "$29",
      period: "month",
    },
    status: "active",
    tags: ["Education", "EdTech", "School Management"],
  },
  {
    id: 3,
    name: "FlashLearn",
    description: "Personalized AI-powered learning, anytime, anywhere.",
    category: "education",
    image: "/branding/office services.png",
    alt: "AI-powered learning app showing personalized content",
    features: [
      "AI Tutor",
      "Personalized Paths",
      "Progress Tracking",
      "Mobile Learning",
    ],
    pricing: {
      type: "freemium",
    },
    status: "beta",
    tags: ["AI", "Learning", "Personalized"],
  },
];

export const features: Feature[] = [
  {
    id: 1,
    title: "Powered by AI",
    description: "Intelligent automation and predictive insights.",
    icon: "neurology",
  },
  {
    id: 2,
    title: "Bank-Grade Security",
    description: "Your data is always protected and secure.",
    icon: "security",
  },
  {
    id: 3,
    title: "Seamless Integration",
    description: "Connect with the tools you already use.",
    icon: "integration_instructions",
  },
  {
    id: 4,
    title: "Centralized Hub",
    description: "Manage everything from one single place.",
    icon: "hub",
  },
];

export const productCategories: ProductCategory[] = [
  "all",
  "business",
  "education",
  "developer-tools",
];

export function getProductsByCategory(category: ProductCategory): Product[] {
  if (category === "all") return products;
  return products.filter((product) => product.category === category);
}
