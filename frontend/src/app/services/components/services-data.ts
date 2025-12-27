import { Service, ServiceCategory, ServiceSection } from "./types";

export const serviceSections: ServiceSection[] = [
  {
    id: 1,
    title: "Flexiti Software",
    category: "software",
    services: [
      {
        id: 1,
        title: "Web Apps",
        description:
          "Dynamic and responsive web applications for modern businesses.",
        icon: "code",
        category: "software",
      },
      {
        id: 2,
        title: "Mobile Apps",
        description: "Engaging native and cross-platform mobile experiences.",
        icon: "phone_iphone",
        category: "software",
      },
      {
        id: 3,
        title: "SaaS Platforms",
        description: "Scalable and secure Software-as-a-Service solutions.",
        icon: "cloud_queue",
        category: "software",
      },
      {
        id: 4,
        title: "Backend Systems",
        description: "Robust and efficient server-side architecture and APIs.",
        icon: "database",
        category: "software",
      },
      {
        id: 5,
        title: "AI Tools",
        description:
          "Custom artificial intelligence tools to enhance your operations.",
        icon: "neurology",
        category: "software",
      },
    ],
  },
  {
    id: 2,
    title: "Flexiti Hardware & Setup",
    category: "hardware",
    services: [
      {
        id: 6,
        title: "IT Infrastructure Setup",
        description:
          "Comprehensive setup for robust and scalable IT environments.",
        icon: "dns",
        category: "hardware",
      },
      {
        id: 7,
        title: "Camera Systems",
        description:
          "Advanced surveillance solutions for security and monitoring.",
        icon: "videocam",
        category: "hardware",
      },
      {
        id: 8,
        title: "Smart Office Installations",
        description: "Automated and intelligent systems for modern workspaces.",
        icon: "meeting_room",
        category: "hardware",
      },
      {
        id: 9,
        title: "Network Solutions",
        description:
          "Reliable and high-speed networking for seamless connectivity.",
        icon: "router",
        category: "hardware",
      },
    ],
  },
  {
    id: 3,
    title: "Flexiti Training",
    category: "training",
    services: [
      {
        id: 10,
        title: "Weekend Tech Classes",
        description: "Intensive courses to upskill in the latest technologies.",
        icon: "school",
        category: "training",
      },
      {
        id: 11,
        title: "Professional Skill Programs",
        description: "In-depth training for career advancement in tech.",
        icon: "work",
        category: "training",
      },
      {
        id: 12,
        title: "Certification Training",
        description: "Prepare for industry-recognized tech certifications.",
        icon: "workspace_premium",
        category: "training",
      },
    ],
  },
  {
    id: 4,
    title: "Flexiti AI Lab",
    category: "ai",
    services: [
      {
        id: 13,
        title: "Custom AI Chatbots",
        description: "Intelligent chatbots to enhance customer engagement.",
        icon: "smart_toy",
        category: "ai",
      },
      {
        id: 14,
        title: "Business Process Automation",
        description: "AI-driven automation to streamline your operations.",
        icon: "bolt",
        category: "ai",
      },
      {
        id: 15,
        title: "AI-Powered Analytics",
        description: "Gain deep insights from your data with advanced AI.",
        icon: "analytics",
        category: "ai",
      },
    ],
  },
  {
    id: 5,
    title: "Flexiti Design",
    category: "design",
    services: [
      {
        id: 16,
        title: "UI/UX Design",
        description: "Intuitive and beautiful user interfaces and experiences.",
        icon: "design_services",
        category: "design",
      },
      {
        id: 17,
        title: "Brand Identity",
        description: "Creating memorable brands that resonate with audiences.",
        icon: "palette",
        category: "design",
      },
      {
        id: 18,
        title: "Architecture & Interior",
        description:
          "Stunning visualizations for architectural and interior designs.",
        icon: "architecture",
        category: "design",
      },
    ],
  },
];

export const allServices = serviceSections.flatMap(
  (section) => section.services
);

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return allServices.filter((service) => service.category === category);
}
