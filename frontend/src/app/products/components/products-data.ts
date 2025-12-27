import { Product, ProductCategory, Feature } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "FlexBZ",
    description: "The all-in-one platform to manage and scale your business.",
    category: "business",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2Lt_EKp8laW7d8VVCRIdTknoP8CNRmdXggK5jCPBIj8uzjpHnobEriB36e2UrlOEFSjyWBZph2k3DTahqAzaYHXfuIU93PtqaECchfc_Gz-8WWXGtGElEvcoC8OFc6keEaaHVvT0eUh5OWlZFAKDYEH31q5DiKEh5pVNb0JLtarwb9KwQ6KgEaYIo4L2aJPvO_zWYV6KC8eRAfgECeXsW19gb3c4xq8dziqFTdvzmSZRNVo3wDKHAttPiSc8PtvH4jv5edboXo4Fz",
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnJlMfnAtZU1AlVjza93TPIS_mdwVZ6iMH21WO5kb_t4w0-65rdvuw6YHLqMMN0pXfCcTXgLFMocMzZ9TIXk9F6xhkhA5dSebRRB-3c0bDX8I6JtSjm-qMd7Rp8yWtniaHsObBkix-4_-24qLweLrtydMho7905HBYMZovQa4xTcO7srKb_6oy-UHeD16HGPdoXaq1XufziOHtv-rnDAa1g12yhAhyvOcENNP7XTk8MtAZGO5GZOVMc0aJcBqv7n0bJK6TBtVrA78V",
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnzZ0A7feu9oP346YWetARSH40wSb6mxTmRUjedNpDJDsdSwap4P4GFiU1_mpOQ1Hz1p4rtD0W7IYCH46PuJbH3AyZYeNCl2ocsFt4ywo0ojVtunT6LdcQi7SakiR-QWNQvCGSBvewf6ZYMqatbgGb25R9WE0gEK36QNs3KhcIAXZaOc-YHK5VQZadQ8kPPC7pwjvcxMUPgkRC3Hby8j5TwaPyFdHFzFBHDAoqPxGKkrx28-78KJkv6yU_ETtqRe6zfct3B1NSCKbB",
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
