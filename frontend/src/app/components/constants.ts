import { Service, PortfolioItem, FooterLink } from "./types";

export const services: Service[] = [
  {
    id: 1,
    title: "Web Apps",
    description:
      "Scalable and robust web applications tailored to your business needs.",
    icon: "code",
  },
  {
    id: 2,
    title: "Mobile Apps",
    description:
      "Engaging and intuitive mobile experiences for iOS and Android.",
    icon: "phone_iphone",
  },
  {
    id: 3,
    title: "SaaS Platforms",
    description:
      "Cloud-native Software-as-a-Service solutions for modern enterprises.",
    icon: "cloud_queue",
  },
  {
    id: 4,
    title: "AI Tools",
    description:
      "Intelligent, AI-powered tools to automate and innovate your processes.",
    icon: "neurology",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Fintech Analytics Dashboard",
    category: "SaaS Platform",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "A clean and modern dashboard UI for a financial analytics platform, displayed on a laptop screen.",
  },
  {
    id: 2,
    title: "Wellness Mobile App",
    category: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    alt: "A sleek user interface for a mobile health and wellness app, showing activity tracking and goals.",
  },
];

export const footerLinks: FooterLink[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Apps", href: "#services" },
      { label: "Mobile Apps", href: "#services" },
      { label: "SaaS Platforms", href: "#services" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Twitter", href: "https://twitter.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
];
