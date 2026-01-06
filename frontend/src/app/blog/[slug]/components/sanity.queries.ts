import client from "@/sanity/client";

// Get all article slugs for static generation
export async function getAllArticleSlugs() {
  const query = `*[_type == "article" && defined(slug.current)]{
    "slug": slug.current
  }`;

  const slugs = await client.fetch(query);
  return slugs;
}

// Get single article by slug
export async function getArticleBySlug(slug: string) {
  const query = `*[_type == "article" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    category,
    isTopPick,
    publishedAt,
    readTime,
    author->{
      _id,
      name,
      role,
      bio,
      "avatar": avatar.asset->
    },
    image{
      asset->{
        _id,
        url,
        metadata{
          dimensions
        }
      },
      alt
    },
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
      _id,
      name,
      slug
    }
  }`;

  const article = await client.fetch(query, { slug });
  return article;
}

// Get latest articles for homepage/blog listing
export async function getLatestArticles(limit: number = 6) {
  const query = `*[_type == "article"] | order(publishedAt desc)[0...$limit]{
    _id,
    title,
    slug,
    description,
    category,
    publishedAt,
    readTime,
    "author": author->name,
    image{
      asset->{
        url
      },
      alt
    }
  }`;

  const articles = await client.fetch(query, { limit });
  return articles;
}

// Get articles by category
export async function getArticlesByCategory(category: string) {
  const query = `*[_type == "article" && category == $category] | order(publishedAt desc){
    _id,
    title,
    slug,
    description,
    category,
    publishedAt,
    readTime,
    "author": author->name,
    image{
      asset->{
        url
      },
      alt
    }
  }`;

  const articles = await client.fetch(query, { category });
  return articles;
}

// Get top picks for each category
export async function getTopPicks() {
  const query = `*[_type == "article" && isTopPick == true] | order(category asc){
    _id,
    title,
    slug,
    description,
    category,
    publishedAt,
    "author": author->name,
    image{
      asset->{
        url
      },
      alt
    }
  }`;

  const articles = await client.fetch(query);
  return articles;
}
