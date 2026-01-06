/* eslint-disable @typescript-eslint/no-explicit-any */
// types/index.ts
export interface Article {
  id: string;
  slug?: string;
  title: string;
  description: string;
  excerpt: string;
  body: any;
  tags: string[];
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    title: string;
    avatar: string;
    bio: string;
  };
  image: string;
  isFeatured?: boolean;
  badgeColor?: string;
}

// components/types.ts
export interface Category {
  id: string;
  name: string;
  icon?: string; // Material Icons name
  count?: number; // Optional: number of items in category
  isActive?: boolean; // For initial state
}
