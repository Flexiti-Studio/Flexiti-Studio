/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/keywordExtractor.ts
/**
 * Advanced keyword extraction from article content
 */
export interface ExtractedKeyword {
  word: string;
  frequency: number;
  isHeading: boolean;
}

export function extractKeywordsFromContent(
  body: any[],
  includeHeadings: boolean = true,
  includeBody: boolean = false
): ExtractedKeyword[] {
  const wordMap = new Map<string, ExtractedKeyword>();

  if (!body || !Array.isArray(body)) return [];

  // Common stop words to filter out
  const stopWords = new Set([
    "the",
    "and",
    "for",
    "are",
    "but",
    "not",
    "you",
    "all",
    "any",
    "can",
    "her",
    "was",
    "one",
    "our",
    "out",
    "day",
    "get",
    "has",
    "him",
    "his",
    "how",
    "man",
    "new",
    "now",
    "old",
    "see",
    "two",
    "who",
    "boy",
    "did",
    "its",
    "let",
    "put",
    "say",
    "she",
    "too",
    "use",
    "way",
    "people",
    "from",
    "with",
    "your",
    "have",
    "they",
    "this",
    "that",
    "been",
  ]);

  // Process each block in the body
  body.forEach((block) => {
    if (block._type === "block") {
      const isHeading = block.style === "h2" || block.style === "h3";

      // Only process headings if includeHeadings is true
      // Only process normal text if includeBody is true
      if ((includeHeadings && isHeading) || (includeBody && !isHeading)) {
        const text = block.children
          ?.filter((child: any) => child._type === "span" && child.text)
          .map((child: any) => child.text)
          .join(" ")
          .toLowerCase();

        if (text) {
          // Extract words (alphanumeric with hyphens)
          const words = text.match(/[a-z0-9]+(?:[-'][a-z0-9]+)*/g) || [];

          words.forEach((word: string) => {
            // Filter out stop words and short words
            if (word.length > 3 && !stopWords.has(word)) {
              const existing = wordMap.get(word);
              const frequency = (existing?.frequency || 0) + 1;

              wordMap.set(word, {
                word,
                frequency,
                isHeading: isHeading || existing?.isHeading || false,
              });
            }
          });
        }
      }
    }
  });

  // Convert to array and sort by frequency (most frequent first)
  const keywords = Array.from(wordMap.values()).sort(
    (a, b) => b.frequency - a.frequency
  );

  return keywords;
}

/**
 * Get the most relevant keywords for article matching
 */
export function getTopKeywordsForMatching(body: any[]): string[] {
  const allKeywords = extractKeywordsFromContent(body, true, true);

  // Prioritize heading keywords, then most frequent body keywords
  const headingKeywords = allKeywords
    .filter((k) => k.isHeading)
    .map((k) => k.word);

  const bodyKeywords = allKeywords
    .filter((k) => !k.isHeading)
    .slice(0, 10) // Take top 10 body keywords
    .map((k) => k.word);

  // Combine and deduplicate
  return [...new Set([...headingKeywords, ...bodyKeywords])].slice(0, 8);
}
