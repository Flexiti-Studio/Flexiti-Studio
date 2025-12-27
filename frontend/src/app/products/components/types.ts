export interface Product {
  id: number;
  name: string;
  description: string;
  category: ProductCategory;
  image: string;
  alt: string;
  features: string[];
  pricing?: {
    type: "subscription" | "one-time" | "freemium";
    price?: string;
    period?: "month" | "year";
  };
  status: "active" | "beta" | "coming-soon";
  tags: string[];
}

export type ProductCategory =
  | "business"
  | "education"
  | "developer-tools"
  | "all";

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}
