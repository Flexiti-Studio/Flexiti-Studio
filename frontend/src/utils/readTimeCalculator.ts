/* eslint-disable @typescript-eslint/no-explicit-any */
// utils/readTimeCalculator.ts
/**
 * Calculate reading time from Portable Text body content
 * @param body - Portable Text array from Sanity
 * @param wordsPerMinute - Average reading speed (default: 200)
 * @returns Read time in minutes with "X min read" format
 */
export function calculateReadTime(
  body: any[],
  wordsPerMinute: number = 200
): string {
  if (!body || !Array.isArray(body) || body.length === 0) {
    return "3 min read"; // Default fallback
  }

  let totalWords = 0;
  let imageCount = 0;

  // Process each block in the body
  body.forEach((block) => {
    if (block._type === "block" && block.children) {
      // Count words in text blocks
      block.children.forEach((child: any) => {
        if (child._type === "span" && child.text) {
          const words = child.text.trim().split(/\s+/).length;
          totalWords += words;
        }
      });
    } else if (block._type === "image") {
      // Images add reading time (about 12 seconds per image)
      imageCount += 1;
    }
  });

  // Calculate time for text (words per minute)
  const textTime = totalWords / wordsPerMinute;

  // Calculate time for images (12 seconds per image)
  const imageTime = imageCount * 0.2; // 0.2 minutes = 12 seconds

  // Add time for code blocks if present
  const codeBlocks = body.filter(
    (block) =>
      block._type === "code" ||
      (block._type === "block" && block.style === "code")
  ).length;
  const codeTime = codeBlocks * 0.5; // 0.5 minutes = 30 seconds per code block

  // Total reading time in minutes
  const totalMinutes = textTime + imageTime + codeTime;

  // Round up to nearest minute, minimum 1 minute
  const roundedMinutes = Math.max(1, Math.ceil(totalMinutes));

  // Format the output
  return formatReadTime(roundedMinutes);
}

/**
 * Format read time in a user-friendly way
 */
function formatReadTime(minutes: number): string {
  if (minutes <= 1) {
    return "1 min read";
  } else if (minutes <= 5) {
    return `${minutes} min read`;
  } else if (minutes <= 60) {
    return `${minutes} min read`;
  } else {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (remainingMinutes === 0) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} read`;
    } else {
      return `${hours}h ${remainingMinutes}min read`;
    }
  }
}

/**
 * Alternative: Calculate read time from plain text/HTML
 */
export function calculateReadTimeFromText(
  text: string,
  wordsPerMinute: number = 200
): string {
  if (!text || text.trim().length === 0) {
    return "3 min read";
  }

  // Remove HTML tags if present
  const cleanText = text.replace(/<[^>]*>/g, " ");

  // Count words
  const words = cleanText.trim().split(/\s+/).length;

  // Calculate minutes
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));

  return formatReadTime(minutes);
}

/**
 * Calculate read time with different reading speeds
 */
export interface ReadTimeOptions {
  wordsPerMinute?: number;
  imagesPerMinute?: number; // Time per image in minutes
  codeBlocksPerMinute?: number; // Time per code block in minutes
}

export function calculateReadTimeDetailed(
  body: any[],
  options: ReadTimeOptions = {}
): {
  minutes: number;
  textMinutes: number;
  imageMinutes: number;
  codeMinutes: number;
  formatted: string;
} {
  const {
    wordsPerMinute = 200,
    imagesPerMinute = 0.2, // 12 seconds per image
    codeBlocksPerMinute = 0.5, // 30 seconds per code block
  } = options;

  if (!body || !Array.isArray(body) || body.length === 0) {
    return {
      minutes: 3,
      textMinutes: 3,
      imageMinutes: 0,
      codeMinutes: 0,
      formatted: "3 min read",
    };
  }

  let totalWords = 0;
  let imageCount = 0;
  let codeBlockCount = 0;

  // Analyze content
  body.forEach((block) => {
    if (block._type === "block" && block.children) {
      // Check if it's a code block
      if (block.style === "code") {
        codeBlockCount += 1;
      } else {
        // Count words in text blocks
        block.children.forEach((child: any) => {
          if (child._type === "span" && child.text) {
            const words = child.text.trim().split(/\s+/).length;
            totalWords += words;
          }
        });
      }
    } else if (block._type === "image") {
      imageCount += 1;
    } else if (block._type === "code") {
      codeBlockCount += 1;
    }
  });

  // Calculate times for each content type
  const textMinutes = totalWords / wordsPerMinute;
  const imageMinutes = imageCount * imagesPerMinute;
  const codeMinutes = codeBlockCount * codeBlocksPerMinute;

  // Total time
  const totalMinutes = textMinutes + imageMinutes + codeMinutes;
  const roundedMinutes = Math.max(1, Math.ceil(totalMinutes));

  return {
    minutes: roundedMinutes,
    textMinutes: Math.ceil(textMinutes),
    imageMinutes: Math.ceil(imageMinutes),
    codeMinutes: Math.ceil(codeMinutes),
    formatted: formatReadTime(roundedMinutes),
  };
}

/**
 * Estimate read time based on character count (fallback)
 */
export function estimateReadTimeFromLength(
  contentLength: number,
  type: "words" | "characters" = "words"
): string {
  let words: number;

  if (type === "words") {
    words = contentLength;
  } else {
    // Assume average word length is 5 characters
    words = Math.ceil(contentLength / 5);
  }

  const minutes = Math.max(1, Math.ceil(words / 200));
  return formatReadTime(minutes);
}
