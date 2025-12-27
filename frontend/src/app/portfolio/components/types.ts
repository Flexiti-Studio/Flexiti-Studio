export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: PortfolioCategory;
  image: string;
  alt: string;
  tags: string[];
  caseStudyUrl?: string;
  year: number;
  client?: string;
  status: "completed" | "in-progress" | "upcoming";
}

export type PortfolioCategory =
  | "all"
  | "software"
  | "mobile"
  | "ai-systems"
  | "hardware"
  | "digital-training"
  | "design"
  | "saas";

export interface CaseStudy {
  id: number;
  portfolioItemId: number;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  teamSize: number;
  images: string[];
}
