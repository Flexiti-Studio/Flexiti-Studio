// schemas/tag.ts
import { defineType, defineField } from "sanity";

export const tag = defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tag name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),

    // Add this field
    defineField({
      name: "badgeColor",
      title: "Badge Color",
      type: "string",
      description: "Hex color code for the tag badge (e.g., #3B82F6)",
      validation: (Rule) =>
        Rule.regex(/^#([0-9a-fA-F]{3}){1,2}$/).error(
          "Must be a valid hex color"
        ),
      initialValue: "#6B7280", // Default gray color
    }),

    // Optional: Add description field
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "badgeColor",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `Color: ${subtitle}` : "No color set",
      };
    },
  },
});
