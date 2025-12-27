// data/articles.ts
import { Article } from "./types";

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
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "#330df2",
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
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "#2563eb",
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
      avatar:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=100&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "#16a34a",
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
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "#000000",
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
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "#7c3aed",
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
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
    },
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    badgeColor: "#f59e0b",
  },
];
