import { PortfolioCategory, PortfolioItem } from "./types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    description: "A cutting-edge solution for data-driven insights.",
    category: "ai-systems",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTlLfz8XqNO2-JywSFik35BpHKsvaFZ-ANofBuQvrtEckU1H5tGWYtXT2YGbUZ8iS2xwPtbHvz5_xeLHZRX9iXNR5Rq1IWTPJ3vz3VXCWc_7dlBUN1abwqfNlAerus27kjEvgoKYw11J11p0Us3c-mP7ToDGd3JXlLK5lIq4YASaALiER17JZW0dtAkyHxrH4NhpW52zhRJopr3-mfOnEI47Fy8itSLy_JiRXz1V6H7AFnE-emdJ6uQpUl-0XRYLviL0v6lCWnduHe",
    alt: "Abstract gradient of blue and purple representing an analytics platform",
    tags: ["AI", "Analytics", "Data Visualization", "Machine Learning"],
    caseStudyUrl: "/case-studies/ai-analytics-platform",
    year: 2023,
    client: "TechCorp Analytics",
    status: "completed",
  },
  {
    id: 2,
    title: "Next-Gen Mobile Banking App",
    description: "Secure and intuitive mobile finance management.",
    category: "mobile",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGMXg0ztWchBrJmQ1f12nDz0UGl2wGOO-bPpZZCP22Hnw7cuH3qAD1vPyxlR0EUqUEQ9hQ6oS37SPoEsuGMhrNf2KzVs-6oDGsPzG229wU7RJxNdbZYxcuG5O0AijTDAxCyHYNUwxN8LLs3S4bxWwCT3ssDzdPvb966F7NUYhEKiR39hafWYaJ5BECBvQD3BTcM9Qk6nI_T4IUbmqkD5p1ibYOAT2qQJ1EU9JVj-_flSQudjX16TxunHgyPWFEl6j1uSUnagvKDUV9",
    alt: "Sleek user interface of a modern mobile banking application",
    tags: ["Mobile", "Fintech", "Security", "UX Design"],
    caseStudyUrl: "/case-studies/mobile-banking-app",
    year: 2024,
    client: "Global Bank Inc.",
    status: "completed",
  },
  {
    id: 3,
    title: "Smart Home Hardware Hub",
    description: "Centralized control for your connected home.",
    category: "hardware",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbXC2NlqaLtur5toclMFNoCPwPxs5yU352_vQhNrKo6W7QzLAasMOAtwBc5sgarRQyVKShnF-Z-PYCibvbUxdIPFqQbWzJY1tX3fY66v9XrQ-ZBdkjj-s3S3SmXVguhj-iXEldrRbE-Ifss6XpWCZvpSv0s5JoaDNmkxVmFapYxhC5JCuwvSZ8LQWFL_V0ZCLFMMrK_7AUdckVxdq2oqVZUiG7lShvj9XSLTAEwCc264sctu-UcADdtA26-YgRmBYaGDMGk5YhLK7C",
    alt: "Minimalist design of a smart home hardware device on a clean background",
    tags: ["IoT", "Hardware", "Smart Home", "Product Design"],
    caseStudyUrl: "/case-studies/smart-home-hub",
    year: 2023,
    client: "HomeTech Solutions",
    status: "completed",
  },
  {
    id: 4,
    title: "Interactive Digital Training Module",
    description: "Engaging learning experiences for the modern workforce.",
    category: "digital-training",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBK37A-ccKIrMI_2_tikyc1Gb1qXS7i8HXkTTqmikxmp-LiM8enVuoWHAoTbewuxSwlNLA95yVFQKV7a48QLpUhC2iK5f1OpVg-3IZiNcfYOxlf8K2x-pReRwhXzv-WIRDkO_Wkf4bIpUlUW1mPXgHmnFDqLYt7AUIUn8zeR2h5DyReY1fIMgsPD__iMBpXdU7hS0el2SjHFh58HWgexSM0TXsL8zpzFYrrtnU8q4GH1A0Gax8aeBQF7A41FLOZDUOHsJM0vELPnWOC",
    alt: "A person interacting with a futuristic, holographic training module",
    tags: ["E-learning", "Interactive", "Training", "EdTech"],
    caseStudyUrl: "/case-studies/digital-training-module",
    year: 2024,
    client: "LearnTech Corporation",
    status: "in-progress",
  },
  {
    id: 5,
    title: "Creative Software Suite",
    description: "Powerful tools that bring ideas to life.",
    category: "software",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVBrCAMCUEy6DuXc6GLOT5UIPmIwZqjf9hAbNiiONbjSUkWmYC9BY0bxm3yg0iq9TH2exAApWjHHOFq2kS-IRn_E-mrMpspHrMPhFraNtkDzsAI9QpODlgkEX7ZQP7-j3AiR4jQjXQL96OXktLtvyNW7dApU8YPuOsvu09k1VpGsnb8whTBHC_IKT5jeXCLDytcpjlVrC5LVa5la5A5OHV1VndCOKcMqrIk8UazA7uDy-HO2mbvFqo_ql_10jtNAkmbFW_17_wxpgK",
    alt: "Clean and colorful interface of a creative software suite for designers",
    tags: ["Creative", "Design Tools", "Productivity", "SaaS"],
    caseStudyUrl: "/case-studies/creative-software-suite",
    year: 2023,
    client: "Creative Studios",
    status: "completed",
  },
  {
    id: 6,
    title: "Automated AI System for Logistics",
    description: "Optimizing supply chains with artificial intelligence.",
    category: "ai-systems",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD9dbZbjx_ffapplwVr5cBaXJaFN0hMZgdAdgwgTGB9zQ1zp8x_x00Aup2-4hEGcG_Tu1I7D8T1whq_YJw6x2Eb5HKl8tL4vaQdepe_SuINe19gPV9rBH78ELmG_nZMiUKfvHoaTfxnPI-vHuZCEPs7e-UGm1nWjcSG_oy6bwDFzSaMtsedvBE8fcfSnFJeBlbNKGpCtHISWEoJtmfcg4Q6UJAxzuA533JhLMkyzc3li2LxH_OSYhczvV1oBYMDGKbiZYcBiRaJpowa",
    alt: "Visualization of an AI network processing data for a logistics company",
    tags: ["AI", "Logistics", "Automation", "Supply Chain"],
    caseStudyUrl: "/case-studies/ai-logistics-system",
    year: 2024,
    client: "LogiTech Global",
    status: "completed",
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
