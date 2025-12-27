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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPkxhyRFgPqB2mqnwzor2vYPcr_FUiTlpknH2GyaxKjB36A-ycHCuTEFUF6iboEMUWv73nm5HkiOnKf6GqgTpAOzuC5Ueuh8cz5bJB5QEuBppxR7-0eRaixZQ6pTFGJAP3WD2oY5s1IOwT9oB8Q-PT4gouXvMwti3dtBOIvCFcAYyhXjaZcpV8yu0xI5RezIM6VKQvBhLMA7BPovEO9OdX9QiCol9t6eWrr6k3gJzh6TDgXSavaLN_1ZqbiuvYUGbEYNrB4M5LXyt2",
    alt: "A clean and modern dashboard UI for a financial analytics platform, displayed on a laptop screen.",
  },
  {
    id: 2,
    title: "Wellness Mobile App",
    category: "Mobile App",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4wYTAH2JOCsrraLewG9xe7UdmmyANbkrGq0xebumnMPCq567yvULnyav2D7RXQFddds6Dsk4ZZK0EojOTuXzpPn-8in-d-lqc-t34P6m56zJb6UDJkl-7ttQUn0aXM6Pnh_0j6NSsi5HJVb9IV5Fr0A5GseljgzdDjkI4gPDwh_yMLPhRSiV9GdfLb2RoreyPh96ccsh27qOOjPSwY4gLfY00tM0q6dSpc3s_kj49v1jHelDzDY1k3VKNmyv8vQPPudn8Rrzq4UmE",
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
