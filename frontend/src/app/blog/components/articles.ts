/* eslint-disable @typescript-eslint/no-explicit-any */
// data/articles.ts
import client from "@/sanity/client";
import { Article, Category } from "./types";
import { ar } from "zod/v4/locales";

export const articles: Article[] = [
  {
    id: "1",
    title: "Optimizing React Performance for Large Scale Apps",
    description:
      "A deep dive into memoization, lazy loading, and state management techniques to keep your application snappy as it grows.",
    category: "Development",
    readTime: "7 min read",
    date: "Nov 12, 2023",
    author: {
      name: "Sarah Jenkins",
      title: "Frontend Engineer",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80",
      bio: "Sarah focuses on web performance and scalable frontend architectures.",
    },
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "#330df2",
    excerpt: "",
    body: undefined,
    tags: [],
  },
  {
    id: "2",
    title: "Mastering TypeScript for Scalable Applications",
    description:
      "Learn how advanced TypeScript features like generics, utility types, and strict typing can improve code quality.",
    category: "Development",
    readTime: "6 min read",
    date: "Oct 28, 2023",
    author: {
      name: "Daniel Cooper",
      title: "Senior Engineer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      bio: "Daniel writes about type-safe architectures and developer tooling.",
    },
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "#2563eb",
    excerpt: "",
    body: undefined,
    tags: [],
  },
  {
    id: "3",
    title: "Building Accessible Web Apps That Everyone Can Use",
    description:
      "Accessibility is not optional. This guide covers ARIA roles, keyboard navigation, and color contrast best practices.",
    category: "Design",
    readTime: "5 min read",
    date: "Oct 10, 2023",
    author: {
      name: "Emily Rodriguez",
      title: "Accessibility Specialist",
      avatar:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=100&q=80",
      bio: "Emily advocates for inclusive design and accessibility best practices.",
    },
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "#16a34a",
    excerpt: "",
    body: undefined,
    tags: [],
  },
  {
    id: "4",
    title: "Next.js 13 App Router: What You Need to Know",
    description:
      "An overview of the App Router, server components, and how they change the way we build React apps.",
    category: "Frameworks",
    readTime: "8 min read",
    date: "Sep 22, 2023",
    author: {
      name: "Michael Lee",
      title: "Fullstack Developer",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80",
      bio: "Michael explores modern React frameworks and server-side rendering.",
    },
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "#000000",
    excerpt: "",
    body: undefined,
    tags: [],
  },
  {
    id: "5",
    title: "State Management in 2024: Redux, Zustand, or Jotai?",
    description:
      "A comparison of popular state management libraries and when to use each one in modern React apps.",
    category: "Development",
    readTime: "6 min read",
    date: "Aug 30, 2023",
    author: {
      name: "Olivia Brown",
      title: "Frontend Architect",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
      bio: "Olivia analyzes trade-offs between state libraries and architecture patterns.",
    },
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "#7c3aed",
    excerpt: "",
    body: undefined,
    tags: [],
  },
  {
    id: "6",
    title: "From Junior to Mid-Level Developer: Skills That Matter",
    description:
      "Practical advice on improving problem-solving, code reviews, and architectural thinking as a growing developer.",
    category: "Career",
    readTime: "4 min read",
    date: "Aug 12, 2023",
    author: {
      name: "James Wilson",
      title: "Software Engineer",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
      bio: "James writes career-focused advice for early-career developers.",
    },
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "#f59e0b",
    excerpt: "",
    body: undefined,
    tags: [],
  },
  {
    id: "7",
    title: "From Junior to Mid-Level Developer: Skills That Matter",
    description:
      "Practical advice on improving problem-solving, code reviews, and architectural thinking as a growing developer.",
    category: "Career",
    readTime: "4 min read",
    date: "Aug 12, 2023",
    author: {
      name: "James Wilson",
      title: "Software Engineer",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
      bio: "James writes career-focused advice for early-career developers.",
    },
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "#f59e0b",
    excerpt: "",
    body: undefined,
    tags: [],
  },
  {
    id: "8",
    title: "From Junior to Mid-Level Developer: Skills That Matter",
    description:
      "Practical advice on improving problem-solving, code reviews, and architectural thinking as a growing developer.",
    category: "Career",
    readTime: "4 min read",
    date: "Aug 12, 2023",
    author: {
      name: "James Wilson",
      title: "Software Engineer",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
      bio: "James writes career-focused advice for early-career developers.",
    },
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "#f59e0b",
    excerpt: "",
    body: undefined,
    tags: [],
  },
];

// lib/articles
// Fetch all articles with pagination support
export async function getAllArticles(
  page: number = 1,
  limit: number = 6,
  category?: string,
  tag?: string
): Promise<{
  articles: Article[];
  total: number;
  totalPages: number;
}> {
  const start = (page - 1) * limit;
  const end = start + limit;

  // Build the query based on category and tag filters
  let filters = `_type == "article"`;

  if (category && category !== "all") {
    filters += ` && category == "${category}"`;
  }

  if (tag) {
    // Check if the tag exists in the tags array
    filters += ` && "${tag}" in tags[]->title`;
  }

  const query = `*[${filters}] | order(publishedAt desc) [${start}...${end}] {
    _id,
    title,
    "slug": slug.current,
    description,
    excerpt,
    category,
    publishedAt,
    readTime,
    author->{
      name,
      "title": role,
      "avatar": avatar.asset->url
    },
    "image": image.asset->url,
    badgeColor,
    tags[]->{
      "name": title,
      badgeColor
    }
  }`;

  const countQuery = `count(*[${filters}])`;

  try {
    const [articles, total] = await Promise.all([
      client.fetch(query),
      client.fetch(countQuery),
    ]);

    // Transform Sanity data to match your Article interface
    const transformedArticles: Article[] = articles.map((article: any) => ({
      id: article._id,
      title: article.title,
      slug: article.slug,
      description: article.description || "",
      excerpt:
        article.excerpt || article.description?.substring(0, 150) + "...",
      category: article.category,
      readTime: article.readTime || "5 min read",
      date: new Date(article.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      image: article.image || "/default-article.jpg",
      badgeColor: article.badgeColor || "#330df2",
      author: {
        name: article.author?.name || "Unknown Author",
        title: article.author?.title || "",
        avatar: article.author?.avatar || "/default-avatar.jpg",
      },
      tags: (article.tags || []).map((tag: any) => ({
        name: tag.name,
        color: tag.badgeColor,
      })),
    }));

    return {
      articles: transformedArticles,
      total,
      totalPages: Math.ceil(total / limit),
    };
  } catch (error) {
    console.error("Error fetching articles:", error);
    return {
      articles: [],
      total: 0,
      totalPages: 0,
    };
  }
}

// Fetch a single article by slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const query = `*[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    excerpt,
    category,
    publishedAt,
    readTime,
    author->{
      name,
      "title": role,
      "avatar": avatar.asset->url,
      bio
    },
    "image": image.asset->url,
    badgeColor,
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->
      },
      markDefs[]{
        ...,
        _type == "link" => {
          ...,
          "href": @.href
        }
      }
    },
    tags[]->{
      name,
      badgeColor
    }
  }`;

  try {
    const article = await client.fetch(query, { slug });

    if (!article) return null;

    return {
      id: article._id,
      title: article.title,
      slug: article.slug,
      description: article.description || "",
      excerpt:
        article.excerpt || article.description?.substring(0, 150) + "...",
      category: article.category,
      readTime: article.readTime || "5 min read",
      date: new Date(article.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      image: article.image || "/default-article.jpg",
      badgeColor: article.badgeColor || "#330df2",
      author: {
        name: article.author?.name || "Unknown Author",
        title: article.author?.title || "",
        avatar: article.author?.avatar || "/default-avatar.jpg",
        bio: article.author?.bio,
      },
      body: article.body || [],
      tags: (article.tags || []).map((tag: any) => ({
        name: tag.name,
        color: tag.badgeColor,
      })),
    };
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

// Fetch all categories with article counts
export async function getCategories(): Promise<Category[]> {
  const query = `*[_type == "article"] {
    category
  }`;

  try {
    const articles = await client.fetch(query);

    // Count articles per category
    const categoryCounts = articles.reduce(
      (acc: Record<string, number>, article: any) => {
        acc[article.category] = (acc[article.category] || 0) + 1;
        return acc;
      },
      {}
    );

    // Get all unique categories
    const uniqueCategories = Array.from(
      new Set(articles.map((a: any) => a.category))
    ) as string[];

    // Transform to Category objects
    const categories: Category[] = [
      {
        id: "all",
        name: "All",
        count: articles.length,
        icon: "checklist_rtl",
      },
      ...uniqueCategories.map((category: string) => ({
        id: category.toLowerCase().replace(/\s+/g, "-"),
        name: category,
        count: categoryCounts[category] || 0,
        // Icon will be auto-matched in Navigation component
      })),
    ];

    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// Fetch all article slugs for static generation
export async function getAllArticleSlugs(): Promise<{ slug: string }[]> {
  const query = `*[_type == "article" && defined(slug.current)] {
    "slug": slug.current
  }`;

  try {
    const slugs = await client.fetch(query);
    return slugs;
  } catch (error) {
    console.error("Error fetching slugs:", error);
    return [];
  }
}

// Get related articles (same category)
export async function getRelatedArticles(
  currentArticleId: string,
  category: string,
  limit: number = 3
): Promise<Article[]> {
  const query = `*[_type == "article" && category == $category && _id != $currentArticleId] | order(publishedAt desc)[0...$limit] {
    _id,
    title,
    "slug": slug.current,
    description,
    category,
    publishedAt,
    readTime,
    author->{
      name,
      "avatar": avatar.asset->url
    },
    "image": image.asset->url,
    badgeColor
  }`;

  try {
    const articles = await client.fetch(query, {
      category,
      currentArticleId,
      limit,
    });

    return articles.map((article: any) => ({
      id: article._id,
      title: article.title,
      slug: article.slug,
      description: article.description || "",
      excerpt: article.description?.substring(0, 150) + "...",
      category: article.category,
      readTime: article.readTime || "5 min read",
      date: new Date(article.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      image: article.image || "/default-article.jpg",
      badgeColor: article.badgeColor || "#330df2",
      author: {
        name: article.author?.name || "Unknown Author",
        title: "",
        avatar: article.author?.avatar || "/default-avatar.jpg",
      },
      tags: [],
    }));
  } catch (error) {
    console.error("Error fetching related articles:", error);
    return [];
  }
}

// Get newest articles (most recent first)
export async function getNewestArticles(
  limit: number = 12
): Promise<Article[]> {
  try {
    const query = `*[_type == "article"] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      "slug": slug.current,
      description,
      category,
      publishedAt,
      readTime,
      featured,
      isTopPick,
      featuredOrder,
      author->{
        name,
        "title": role,
        "avatar": avatar.asset->url
      },
      "image": image.asset->url,
      badgeColor,
      tags[]->{
        name,
        badgeColor
      }
    }`;

    const articles = await client.fetch(query, { limit });

    return articles.map(
      (article: any): Article => ({
        id: article._id,
        title: article.title,
        slug: article.slug,
        description: article.description || "",
        excerpt: article.description?.substring(0, 150) + "...",
        category: article.category,
        readTime: article.readTime || "5 min read",
        date: new Date(article.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        image: article.image || "/default-article.jpg",
        badgeColor: article.badgeColor || "#330df2",
        // featured: article.featured || false,
        isTopPick: article.isTopPick || false,
        // featuredOrder: article.featuredOrder || 0,
        author: {
          name: article.author?.name || "Unknown Author",
          title: article.author?.title || "",
          avatar: article.author?.avatar || "/default-avatar.jpg",
          bio: "",
        },
        tags: (article.tags || []).map((tag: any) => ({
          name: tag.name,
          color: tag.badgeColor,
        })),
        body: article.body || "",
      })
    );
  } catch (error) {
    console.error("Error fetching newest articles:", error);
    return [];
  }
}

// Get featured top picks (one per category)
export async function getFeaturedTopPicks(): Promise<Article[]> {
  try {
    // Get all articles marked as top picks
    const query = `*[_type == "article" && isTopPick == true] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      description,
      category,
      publishedAt,
      readTime,
      author->{
        name,
        "title": role,
        "avatar": avatar.asset->url
      },
      "image": image.asset->url,
      badgeColor
    }`;

    const articles = await client.fetch(query);

    // Group by category and take only the most recent from each
    const articlesByCategory = new Map<string, any>();

    articles.forEach((article: any) => {
      if (!articlesByCategory.has(article.category)) {
        articlesByCategory.set(article.category, article);
      }
    });

    // Transform to Article objects
    const featuredArticles: Article[] = Array.from(
      articlesByCategory.values()
    ).map((article: any) => ({
      id: article._id,
      title: article.title,
      slug: article.slug,
      description: article.description || "",
      excerpt: article.description?.substring(0, 150) + "...",
      category: article.category,
      readTime: article.readTime || "5 min read",
      date: new Date(article.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      image: article.image || "/default-article.jpg",
      badgeColor: article.badgeColor || "#330df2",
      author: {
        name: article.author?.name || "Unknown Author",
        title: article.author?.title || "",
        avatar: article.author?.avatar || "/default-avatar.jpg",
        bio: article.author?.bio || "",
      },
      body: article.body || [],
      tags: (article.tags || []).map((tag: any) => ({
        name: tag.name,
        color: tag.badgeColor,
      })),
    }));

    // Sort by category name for consistent display
    return featuredArticles.sort((a, b) =>
      a.category.localeCompare(b.category)
    );
  } catch (error) {
    console.error("Error fetching featured top picks:", error);
    return [];
  }
}

// Get trending stories (most recent top picks or just newest)
export async function getTrendingStories(limit: number = 3): Promise<any[]> {
  try {
    const query = `*[_type == "article" && isTopPick == true] | order(publishedAt desc)[0...${limit}] {
      title,
      category,
      readTime,
      slug
    }`;
    const stories = await client.fetch(query);
    return stories.map((s: any, i: number) => ({
      num: String(i + 1).padStart(2, '0'),
      title: s.title,
      tag: `${s.category} · ${s.readTime || '5 min read'}`,
      slug: s.slug?.current || s.slug || ''
    }));
  } catch (error) {
    console.error("Error fetching trending stories:", error);
    return [];
  }
}

// Get explore topics (unique tags from Sanity)
export async function getExploreTopics(): Promise<string[]> {
  try {
    const query = `*[_type == "tag"] { title }`;
    const tags = await client.fetch(query);
    return tags.map((t: any) => t.title);
  } catch (error) {
    console.error("Error fetching topics:", error);
    return [];
  }
}
