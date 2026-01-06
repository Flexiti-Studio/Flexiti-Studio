import { defineType, defineField } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Development", value: "development" },
          { title: "Design", value: "design" },
          { title: "Frameworks", value: "frameworks" },
          { title: "Career", value: "career" },
          { title: "AI", value: "ai" },
          { title: "Tech", value: "tech" },
          { title: "Business", value: "business" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "isTopPick",
      title: "Top pick for this category",
      type: "boolean",
      initialValue: false,
      description:
        "Mark this as the featured/top article for its category. Only one per category.",
    }),

    defineField({
      name: "publishedAt",
      title: "Published date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "readTime",
      title: "Read time",
      type: "string",
      description: 'Example: "7 min read"',
    }),

    // ✅ CLEAN AUTHOR REFERENCE - NO EXTRA FIELDS
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Cover image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "badgeColor",
      title: "Badge color",
      type: "string",
      description: "Hex color e.g. #2563eb",
      validation: (Rule) =>
        Rule.regex(/^#([0-9a-fA-F]{3}){1,2}$/).error(
          "Must be a valid hex color"
        ),
    }),

    defineField({
      name: "body",
      title: "Article content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
        },
        {
          name: "keyInsight",
          title: "Key Insight",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              initialValue: "Key Insight",
            },
            {
              name: "text",
              title: "Text",
              type: "text",
            },
          ],
        },
      ],
    }),

    // ✅ SIMPLE TAGS REFERENCE - NO EXTRA FIELDS
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
});
