// types/blog.ts
export interface Author {
  name: string;
  title: string;
  avatar: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  publishedDate: string;
  category: string;
  tags: string[];
  featuredImage: string;
  author: Author;
  toc: TableOfContentItem[];
  relatedArticles: ArticlePreview[];
}

export interface TableOfContentItem {
  id: string;
  title: string;
  level: number;
}

export interface ArticlePreview {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  image: string;
  badgeColor: string;
}

export interface ArticleMetadata {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  image: string;
  badgeColor: string;
  author: {
    name: string;
    avatar: string;
  };
}
