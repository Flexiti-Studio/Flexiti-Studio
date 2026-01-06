/* eslint-disable @typescript-eslint/no-explicit-any */
// // lib/articles.ts
// import { Article } from "./types";

import client from "@/sanity/client";

// export async function getArticleBySlug(slug: string): Promise<Article | null> {
//   // In a real app, this would fetch from a CMS or database
//   const articles: Record<string, Article> = {
//     "the-future-of-ai-in-ux-design": {
//       id: "1",
//       slug: "the-future-of-ai-in-ux-design",
//       title: "The Future of AI in User Experience Design",
//       excerpt:
//         "Artificial Intelligence is reshaping how we approach user experience, moving from static screens to predictive interfaces that anticipate needs.",
//       content: "", // Full article content would go here
//       readTime: "5 min read",
//       publishedDate: "Oct 24, 2023",
//       category: "UX Design",
//       tags: [
//         "Artificial Intelligence",
//         "UX Design",
//         "Future Tech",
//         "Generative UI",
//       ],
//       featuredImage:
//         "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
//       author: {
//         name: "Alex Morgan",
//         title: "Senior UX Researcher",
//         avatar:
//           "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
//         bio: "Alex is a Senior UX Researcher at Tech Studio with over 10 years of experience in cognitive psychology and human-computer interaction. He writes about the intersection of mind and machine.",
//         twitter: "https://twitter.com/alexmorgan",
//         linkedin: "https://linkedin.com/in/alexmorgan",
//       },
//       toc: [
//         { id: "intro", title: "Introduction", level: 1 },
//         { id: "predictive", title: "The Rise of Predictive UX", level: 2 },
//         { id: "generative", title: "Generative Interfaces", level: 2 },
//         { id: "challenges", title: "Ethical Challenges & Trust", level: 2 },
//         { id: "conclusion", title: "Conclusion", level: 2 },
//       ],
//       relatedArticles: [
//         {
//           id: "2",
//           slug: "why-brand-consistency-matters",
//           title: "Why Brand Consistency Matters More Than Ever",
//           excerpt:
//             "In a fragmented digital world, your design system is the glue that holds your brand identity together.",
//           category: "Design System",
//           readTime: "4 min read",
//           publishedDate: "Nov 8, 2023",
//           image:
//             "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=400&q=80",
//           badgeColor: "#9333ea",
//         },
//         {
//           id: "3",
//           slug: "from-sketch-to-launch",
//           title: "From Sketch to Launch: Our Design Process",
//           excerpt:
//             "A transparent look at how we take a vague idea and turn it into a polished, market-ready product.",
//           category: "Process",
//           readTime: "8 min read",
//           publishedDate: "Oct 15, 2023",
//           image:
//             "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=400&q=80",
//           badgeColor: "#ea580c",
//         },
//         {
//           id: "4",
//           slug: "web-security-2024",
//           title: "The State of Web Security in 2024",
//           excerpt:
//             "Exploring new vulnerabilities and defense mechanisms in modern web applications.",
//           category: "Security",
//           readTime: "5 min read",
//           publishedDate: "Oct 22, 2023",
//           image:
//             "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80",
//           badgeColor: "#16a34a",
//         },
//       ],
//     },
//   };

//   return articles[slug] || null;
// }

// Transform Sanity data to match your existing Article interface

import { Article } from "./types";

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const query = `*[_type == "article" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      description,
      category,
      isTopPick,
      publishedAt,
      readTime,
      // Featured Image
      "featuredImage": image.asset->url,
      // Author - transformed to match your interface
      author->{
        name,
        "title": role,  // Map role to title
        bio,
        "avatar": avatar.asset->url
      },
      // Body content
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
      // Tags
      tags[]->{
        name,
        badgeColor
      },
      // Generate TOC from headings in body (for sidebar)
      "toc": body[style in ["h2", "h3"]]{
        "id": @.children[0].text->lowercase->replace(" ", "-"),
        "title": @.children[0].text
      },
      // Related articles (same category, exclude current)
      "relatedArticles": *[_type == "article" && category == ^.category && slug.current != $slug] | order(publishedAt desc)[0...3]{
        _id,
        title,
        "slug": slug.current,
        category,
        readTime,
        "featuredImage": image.asset->url,
        publishedAt
      }
    }`;

    const sanityArticle = await client.fetch(query, { slug });

    if (!sanityArticle) return null;

    // Transform Sanity data to match your Article interface
    return transformSanityArticle(sanityArticle);
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

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

// For static generation
export async function getAllArticleSlugs() {
  const query = `*[_type == "article" && defined(slug.current)]{
    "slug": slug.current
  }`;

  const slugs = await client.fetch(query);
  return slugs.map((article: any) => ({
    slug: article.slug,
  }));
}
