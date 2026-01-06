import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Custom scrollbar hide utility
export function scrollbarHide() {
  return `
    /* Hide scrollbar for Chrome, Safari and Opera */
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    
    /* Hide scrollbar for IE, Edge and Firefox */
    .scrollbar-hide {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  `;
}

export const getFallbackImage = (
  imageUrl: string | null,
  type: "avatar" | "article" = "article"
) => {
  if (imageUrl) return imageUrl;

  return type === "avatar"
    ? "/default-avatar.jpg"
    : "/default-article-image.jpg";
};

export const formatDate = (dateString: string): string => {
  if (!dateString) return "Unknown date";

  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
