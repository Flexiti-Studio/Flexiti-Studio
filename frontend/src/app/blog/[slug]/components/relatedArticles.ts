/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/relatedArticles.ts

import client from "@/sanity/client";
import { Article } from "./types";

/**
 * Extract keywords from article headings (H2, H3) to find related articles
 */
export function extractKeywordsFromHeadings(body: any[]): string[] {
  const keywords: string[] = [];

  if (!body || !Array.isArray(body)) return keywords;

  // Extract text from H2 and H3 headings
  body.forEach((block) => {
    if (
      block._type === "block" &&
      (block.style === "h2" || block.style === "h3")
    ) {
      // Get all text from the block children
      const text = block.children
        ?.filter((child: any) => child._type === "span" && child.text)
        .map((child: any) => child.text)
        .join(" ")
        .toLowerCase();

      if (text) {
        // Split into words and filter out common stop words
        const words = text
          .split(/\s+/)
          .filter(
            (word: string) =>
              word.length > 3 &&
              ![
                "this",
                "that",
                "with",
                "from",
                "your",
                "have",
                "been",
                "they",
              ].includes(word)
          );

        keywords.push(...words);
      }
    }
  });

  // Return unique keywords, limited to 5 most relevant
  return [...new Set(keywords)].slice(0, 5);
}

/**
 * Find related articles based on headings/keywords
 */
export async function getRelatedArticlesFromHeadings(
  currentArticleId: string,
  body: any[],
  limit: number = 3
): Promise<Article[]> {
  try {
    // Extract keywords from headings
    const keywords = extractKeywordsFromHeadings(body);

    if (keywords.length === 0) {
      // Fallback: get articles from same category
      return getRelatedArticlesByCategory(currentArticleId, "", limit);
    }

    // Build GROQ query to find articles with matching keywords
    const keywordQueries = keywords
      .map(
        (keyword) =>
          `title match "*${keyword}*" || description match "*${keyword}*" || body[].children[].text match "*${keyword}*"`
      )
      .join(" || ");

    const query = `*[_type == "article" && _id != $currentArticleId && (${keywordQueries})] | order(publishedAt desc)[0...$limit] {
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

    const articles = await client.fetch(query, { currentArticleId, limit });

    // If not enough keyword matches, supplement with category matches
    if (articles.length < limit) {
      const categoryQuery = `*[_type == "article" && _id != $currentArticleId && category in $categories] | order(publishedAt desc)[0...${limit - articles.length}] {
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

      // Extract categories from current article body if available
      const categoriesFromBody = extractCategoriesFromBody(body);

      const categoryArticles = await client.fetch(categoryQuery, {
        currentArticleId,
        categories:
          categoriesFromBody.length > 0 ? categoriesFromBody : ["General"],
      });

      articles.push(
        ...categoryArticles.filter(
          (catArt: any) => !articles.some((art: any) => art._id === catArt._id)
        )
      );
    }

    return transformArticles(articles);
  } catch (error) {
    console.error("Error fetching related articles from headings:", error);
    return [];
  }
}

/**
 * Extract potential categories/topics from article body
 */
function extractCategoriesFromBody(body: any[]): string[] {
  const categories = new Set<string>();

  if (!body || !Array.isArray(body)) return [];

  // Common tech/design/business categories
  const commonCategories = [
    "design",
    "development",
    "ai",
    "business",
    "strategy",
    "security",
    "culture",
    "technology",
    "tutorial",
    "news",
  ];

  body.forEach((block) => {
    if (block._type === "block" && block.children) {
      const text = block.children
        .filter((child: any) => child._type === "span" && child.text)
        .map((child: any) => child.text.toLowerCase())
        .join(" ");

      commonCategories.forEach((category) => {
        if (text.includes(category)) {
          categories.add(category);
        }
      });
    }
  });

  return Array.from(categories);
}

/**
 * Fallback: Get related articles by category
 */
async function getRelatedArticlesByCategory(
  currentArticleId: string,
  category: string,
  limit: number = 3
): Promise<Article[]> {
  try {
    const query = `*[_type == "article" && _id != $currentArticleId && category == $category] | order(publishedAt desc)[0...$limit] {
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
      currentArticleId,
      category: category || "General",
      limit,
    });

    return transformArticles(articles);
  } catch (error) {
    console.error("Error fetching related articles by category:", error);
    return [];
  }
}

/**
 * Transform Sanity articles to Article interface
 */
function transformArticles(articles: any[]): Article[] {
  return articles.map(
    (article: any): Article => ({
      id: article._id,
      title: article.title,
      slug: article.slug,
      description: article.description || "",
      excerpt: article.description?.substring(0, 150) + "...",
      category: article.category,
      readTime: article.readTime || "5 min read",
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
        title: "",
        avatar: article.author?.avatar || "/default-avatar.jpg",
      },
      publishedDate: "",
    })
  );
}
