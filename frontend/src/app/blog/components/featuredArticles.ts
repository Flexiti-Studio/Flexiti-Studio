/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/featuredArticles.ts

import client from "@/sanity/client";
import { Article } from "./types";

export async function getTopPickPerCategory(): Promise<Article[]> {
  try {
    // First, get all distinct categories
    const categoriesQuery = `array::unique(*[_type == "article"].category)`;
    const categories = await client.fetch(categoriesQuery);

    // For each category, get the most recent top pick
    const promises = categories.map(async (category: string) => {
      const query = `*[_type == "article" && category == $category] | order(publishedAt desc)[0] {
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

      return client.fetch(query, { category });
    });

    const articles = await Promise.all(promises);

    // Filter out null results and transform
    const transformedArticles = articles
      .filter((article: null) => article !== null)
      .map(
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
            bio: "",
          },
          body: undefined,
          tags: [],
        })
      );

    // Sort by category for consistent display
    return transformedArticles.sort(
      (a: { category: string }, b: { category: any }) =>
        a.category.localeCompare(b.category)
    );
  } catch (error) {
    console.error("Error fetching top picks per category:", error);
    return [];
  }
}

// Alternative: Get only articles marked as top picks, one per category
export async function getFeaturedTopPicks(): Promise<Article[]> {
  try {
    // Get one latest article per category that's marked as top pick
    const query = `*[_type == "article" && isTopPick == true] {
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
    } | order(publishedAt desc)`;

    const articles = await client.fetch(query);

    // Group by category and take the most recent from each
    const articlesByCategory = articles.reduce(
      (acc: Record<string, any>, article: any) => {
        if (!acc[article.category]) {
          acc[article.category] = article;
        }
        return acc;
      },
      {}
    );

    // Transform and return
    return Object.values(articlesByCategory)
      .map(
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
            bio: "",
          },
          body: undefined,
          tags: [],
        })
      )
      .sort((a, b) => a.category.localeCompare(b.category));
  } catch (error) {
    console.error("Error fetching featured top picks:", error);
    return [];
  }
}

// Get all categories with their latest article
export async function getCategoriesWithLatestArticle(): Promise<
  Array<{
    category: string;
    article: Article;
  }>
> {
  try {
    const categoriesQuery = `array::unique(*[_type == "article"].category)`;
    const categories = await client.fetch(categoriesQuery);

    const results = await Promise.all(
      categories.map(async (category: string) => {
        const query = `*[_type == "article" && category == $category] | order(publishedAt desc)[0] {
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

        const article = await client.fetch(query, { category });

        if (!article) return null;

        return {
          category,
          article: {
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
          } as Article,
        };
      })
    );

    return results.filter(Boolean) as Array<{
      category: string;
      article: Article;
    }>;
  } catch (error) {
    console.error("Error fetching categories with latest article:", error);
    return [];
  }
}
