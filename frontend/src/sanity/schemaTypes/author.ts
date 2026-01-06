import { defineType, defineField } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // 🔥 ADD THIS SLUG FIELD - REQUIRED FOR REFERENCES
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(), // Important!
    }),

    defineField({
      name: "role",
      title: "Role / Title",
      type: "string",
      description: "e.g. Senior UX Researcher at Flexiti Studio",
    }),

    defineField({
      name: "bio",
      title: "Short Bio",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "portfolio",
      title: "Portfolio / Profile URL",
      type: "url",
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "email",
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "avatar",
    },
  },
});
