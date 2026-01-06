/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/featuredArticles.ts

import client from "@/sanity/client";
import { Article } from "./types";

export async function getFeaturedArticles(): Promise<Article[]> {
  try {
    // Fetch featured articles and top picks, limit to 5
    const query = `*[_type == "article" && (featured == true || isTopPick == true)] | order(featuredOrder asc, publishedAt desc)[0...5] {
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
      badgeColor
    }`;

    const articles = await client.fetch(query);

    // Transform data
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
        featured: article.featured || false,
        isTopPick: article.isTopPick || false,
        featuredOrder: article.featuredOrder || 0,
        author: {
          name: article.author?.name || "Unknown Author",
          title: article.author?.title || "",
          avatar: article.author?.avatar || "/default-avatar.jpg",
        },
      })
    );
  } catch (error) {
    console.error("Error fetching featured articles:", error);
    return [];
  }
}

// Get newest articles (for homepage)
export async function getNewestArticles(limit: number = 5): Promise<Article[]> {
  try {
    const query = `*[_type == "article"] | order(publishedAt desc)[0...$limit] {
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
        author: {
          name: article.author?.name || "Unknown Author",
          title: article.author?.title || "",
          avatar: article.author?.avatar || "/default-avatar.jpg",
        },
      })
    );
  } catch (error) {
    console.error("Error fetching newest articles:", error);
    return [];
  }
}
