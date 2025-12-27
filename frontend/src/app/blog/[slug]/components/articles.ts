// lib/articles.ts
import { Article } from "./types";

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  // In a real app, this would fetch from a CMS or database
  const articles: Record<string, Article> = {
    "the-future-of-ai-in-ux-design": {
      id: "1",
      slug: "the-future-of-ai-in-ux-design",
      title: "The Future of AI in User Experience Design",
      excerpt:
        "Artificial Intelligence is reshaping how we approach user experience, moving from static screens to predictive interfaces that anticipate needs.",
      content: "", // Full article content would go here
      readTime: "5 min read",
      publishedDate: "Oct 24, 2023",
      category: "UX Design",
      tags: [
        "Artificial Intelligence",
        "UX Design",
        "Future Tech",
        "Generative UI",
      ],
      featuredImage:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      author: {
        name: "Alex Morgan",
        title: "Senior UX Researcher",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
        bio: "Alex is a Senior UX Researcher at Tech Studio with over 10 years of experience in cognitive psychology and human-computer interaction. He writes about the intersection of mind and machine.",
        twitter: "https://twitter.com/alexmorgan",
        linkedin: "https://linkedin.com/in/alexmorgan",
      },
      toc: [
        { id: "intro", title: "Introduction", level: 1 },
        { id: "predictive", title: "The Rise of Predictive UX", level: 2 },
        { id: "generative", title: "Generative Interfaces", level: 2 },
        { id: "challenges", title: "Ethical Challenges & Trust", level: 2 },
        { id: "conclusion", title: "Conclusion", level: 2 },
      ],
      relatedArticles: [
        {
          id: "2",
          slug: "why-brand-consistency-matters",
          title: "Why Brand Consistency Matters More Than Ever",
          excerpt:
            "In a fragmented digital world, your design system is the glue that holds your brand identity together.",
          category: "Design System",
          readTime: "4 min read",
          publishedDate: "Nov 8, 2023",
          image:
            "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=400&q=80",
          badgeColor: "#9333ea",
        },
        {
          id: "3",
          slug: "from-sketch-to-launch",
          title: "From Sketch to Launch: Our Design Process",
          excerpt:
            "A transparent look at how we take a vague idea and turn it into a polished, market-ready product.",
          category: "Process",
          readTime: "8 min read",
          publishedDate: "Oct 15, 2023",
          image:
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=400&q=80",
          badgeColor: "#ea580c",
        },
        {
          id: "4",
          slug: "web-security-2024",
          title: "The State of Web Security in 2024",
          excerpt:
            "Exploring new vulnerabilities and defense mechanisms in modern web applications.",
          category: "Security",
          readTime: "5 min read",
          publishedDate: "Oct 22, 2023",
          image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80",
          badgeColor: "#16a34a",
        },
      ],
    },
  };

  return articles[slug] || null;
}
