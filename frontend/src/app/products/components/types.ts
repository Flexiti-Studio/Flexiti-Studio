export interface Product {
  id: string | number;
  name: string;
  description: string;
  category: string;
  image: string;
  alt: string;
  features: string[];
  pricing?: {
    type: "subscription" | "one-time" | "freemium";
    price?: string;
    period?: "month" | "year";
  };
  status: string;
  tags: string[];
}

export type ProductCategory = string;

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}
