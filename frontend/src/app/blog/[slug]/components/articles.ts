/* eslint-disable @typescript-eslint/no-explicit-any */

import client from "@/sanity/client";
import { Article, TableOfContentItem } from "./types";

function transformSanityArticle(sanityArticle: any): Article {
  return {
    // _id: sanityArticle._id,
    id: sanityArticle._id,
    title: sanityArticle.title,
    description: sanityArticle.description,
    publishedAt: formatDate(sanityArticle.publishedAt),
    slug: sanityArticle.slug,
    excerpt: sanityArticle.description, // Map description to excerpt
    category: sanityArticle.category,
    readTime: sanityArticle.readTime || "5 min read",
    // Format date for display
    publishedDate: formatDate(sanityArticle.publishedAt),
    featuredImage: sanityArticle.featuredImage || "/default-article-image.jpg",
    toc: sanityArticle.toc || [],
    author: {
      name: sanityArticle.author?.name || "Unknown Author",
      title: sanityArticle.author?.title || "", // Role becomes title
      avatar: sanityArticle.author?.avatar || "/default-avatar.jpg",
      bio: sanityArticle.author?.bio,
    },
    body: sanityArticle.body || [],
    date: formatDate(sanityArticle.publishedAt),
    // Provide content to satisfy the Article interface (adjust if Article.content expects a string)
    content: sanityArticle.body || [],
    relatedArticles: (sanityArticle.relatedArticles || []).map(
      (related: any) => ({
        id: related._id,
        title: related.title,
        slug: related.slug,
        category: related.category,
        readTime: related.readTime || "5 min read",
        featuredImage: related.featuredImage || "/default-article-image.jpg",
        publishedDate: formatDate(related.publishedAt),
      })
    ),
    tags: (sanityArticle.tags || []).map((tag: any) => ({
      name: tag.name,
      color: tag.badgeColor || "#3B82F6",
    })),
  };
}

function formatDate(dateString: string): string {
  if (!dateString) return "Unknown date";

  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// For blog listing page - transform for card display
export async function getAllArticles() {
  const query = `*[_type == "article"] | order(publishedAt desc){
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
    "featuredImage": image.asset->url
  }`;

  const articles = await client.fetch(query);

  return articles.map((article: any) => ({
    id: article._id,
    title: article.title,
    slug: article.slug,
    excerpt: article.description,
    category: article.category,
    readTime: article.readTime || "5 min read",
    publishedDate: formatDate(article.publishedAt),
    featuredImage: article.featuredImage || "/default-article-image.jpg",
    author: {
      name: article.author?.name || "Unknown Author",
      title: article.author?.title || "",
      avatar: article.author?.avatar || "/default-avatar.jpg",
    },
  }));
}

/**
 * Get all article slugs for static generation
 */
export async function getAllArticleSlugs(): Promise<{ slug: string }[]> {
  try {
    const query = `*[_type == "article" && defined(slug.current)] {
      "slug": slug.current
    }`;

    const slugs = await client.fetch(query);
    return slugs;
  } catch (error) {
    console.error("Error fetching slugs:", error);
    return [];
  }
}

/**
 * Get related articles (same category, excluding current)
 */
async function getRelatedArticles(
  currentArticleId: string,
  category: string,
  limit: number = 3
): Promise<any[]> {
  try {
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
      "featuredImage": image.asset->url,
      badgeColor
    }`;

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
      category: article.category,
      readTime: article.readTime || "5 min read",
      publishedAt: article.publishedAt,
      publishedDate: new Date(article.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      featuredImage: article.featuredImage || "/default-article.jpg",
      badgeColor: article.badgeColor || "#330df2",
      author: {
        name: article.author?.name || "Unknown Author",
        avatar: article.author?.avatar || "/default-avatar.jpg",
      },
    }));
  } catch (error) {
    console.error("Error fetching related articles:", error);
    return [];
  }
}

/**
 * Generate Table of Contents from article body (H2 and H3 headings)
 */
function generateTocFromBody(body: any[]): TableOfContentItem[] {
  const toc: TableOfContentItem[] = [];

  if (!body || !Array.isArray(body)) return toc;

  // Always add "Introduction" as first item
  toc.push({
    id: "intro",
    title: "Introduction",
    level: 1,
  });

  let headingCount = 0;

  body.forEach((block, index) => {
    if (
      block._type === "block" &&
      (block.style === "h2" || block.style === "h3")
    ) {
      // Extract text from the heading block
      const text = block.children
        ?.filter((child: any) => child._type === "span" && child.text)
        .map((child: any) => child.text)
        .join(" ");

      if (text) {
        headingCount++;

        // Create ID from text (lowercase, replace spaces with hyphens)
        let id = text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
          .replace(/\s+/g, "-") // Replace spaces with hyphens
          .replace(/-+/g, "-"); // Remove consecutive hyphens

        // If ID is too short or empty, use generic ID
        if (id.length < 3) {
          id = `section-${headingCount}`;
        }

        // Ensure unique ID
        let uniqueId = id;
        let counter = 1;
        while (toc.some((item) => item.id === uniqueId)) {
          uniqueId = `${id}-${counter}`;
          counter++;
        }

        toc.push({
          id: uniqueId,
          title: text,
          level: block.style === "h2" ? 2 : 3,
        });
      }
    }
  });

  return toc;
}

// lib/articles.ts - Update your article fetching functions
import {
  calculateReadTime,
  calculateReadTimeDetailed,
} from "@/utils/readTimeCalculator";

// Update getArticleBySlug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const query = `*[_type == "article" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      description,
      excerpt,
      category,
      publishedAt,
      author->{
        name,
        "title": role,
        "avatar": avatar.asset->url,
        bio
      },
      "featuredImage": image.asset->url,
      badgeColor,
      body[]{
        ...,
        _type == "image" => {
          ...,
          asset->{
            _id,
            url,
            metadata {
              dimensions
            }
          },
          alt,
          caption
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
        title,
        badgeColor,
      }
    }`;

    const article = await client.fetch(query, { slug });

    if (!article) return null;

    // Calculate read time from body content
    const readTime = calculateReadTime(article.body || []);

    // Or use detailed version for more stats
    const readTimeDetails = calculateReadTimeDetailed(article.body || []);

    // Generate TOC
    const toc = generateTocFromBody(article.body || []);

    // Fetch related articles
    const relatedArticles = await getRelatedArticles(
      article._id,
      article.category,
      3
    );

    return {
      id: article._id,
      title: article.title,
      slug: article.slug,
      description: article.description || "",
      excerpt:
        article.excerpt || article.description?.substring(0, 150) + "...",
      category: article.category,
      readTime: readTime, // Use calculated read time
      readTimeDetails: readTimeDetails, // Optional: include detailed stats
      publishedAt: article.publishedAt,
      publishedDate: formatDate(article.publishedAt),
      date: new Date(article.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      featuredImage: article.featuredImage || "/default-article.jpg",
      badgeColor: article.badgeColor || "#330df2",
      author: {
        name: article.author?.name || "Unknown Author",
        title: article.author?.title || "",
        avatar: article.author?.avatar || "/default-avatar.jpg",
        bio: article.author?.bio,
      },
      body: article.body || [],
      toc: toc,
      relatedArticles: relatedArticles,
      tags: (article.tags || []).map((tag: any) => ({
        name: tag.title,
        color: tag.badgeColor,
      })),
    };
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

// Update getAllArticles and getNewestArticles similarly
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
      author->{
        name,
        "title": role,
        "avatar": avatar.asset->url
      },
      "featuredImage": image.asset->url,
      badgeColor,
      body[],
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
        readTime: calculateReadTime(article.body || []), // Calculate here
        publishedAt: article.publishedAt,
        date: new Date(article.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        featuredImage: article.featuredImage || "/default-article.jpg",
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
        publishedDate: "",
      })
    );
  } catch (error) {
    console.error("Error fetching newest articles:", error);
    return [];
  }
}
