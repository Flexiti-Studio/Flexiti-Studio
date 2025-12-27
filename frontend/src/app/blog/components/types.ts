// types/index.ts
export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  isFeatured?: boolean;
  badgeColor?: string;
}

export interface Category {
  id: string;
  name: string;
  isActive: boolean;
}
