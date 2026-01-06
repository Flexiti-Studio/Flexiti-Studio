/* eslint-disable @typescript-eslint/no-explicit-any */
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
  description: string;
  title: string;
  publishedAt: string;
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
  body: BlockContent[];
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

export interface Tag {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
}

export interface BlockContent {
  _type: "block";
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  children: Array<{
    text: string;
    _type: "span";
    marks?: string[];
  }>;
  markDefs?: Array<{
    _key: string;
    _type: string;
    href?: string;
  }>;
}

export interface ImageAsset {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  caption?: string;
  alt?: string;
}

export interface KeyInsight {
  _type: "keyInsight";
  title: string;
  text: string;
}

export interface SanityAuthor {
  name: string;
  title?: string; // This is "role" in Sanity
  avatar: string;
  bio?: string;
}

export interface SanityArticle {
  _id: string;
  title: string;
  slug: string;
  description: string;
  publishedAt: string; // This is "publishedAt" in Sanity
  excerpt: string; // This is "description" in Sanity
  category: string;
  readTime: string;
  publishedDate: string; // Formatted date from Sanity's publishedAt
  featuredImage: string;
  toc: Array<{ id: string; title: string }>;
  author: SanityAuthor;
  body: any[];
  relatedArticles: Array<{
    id: string;
    title: string;
    slug: string;
    category: string;
    readTime: string;
    featuredImage: string;
    publishedDate: string;
  }>;
  tags: Array<{
    name: string;
    color?: string;
  }>;
}
