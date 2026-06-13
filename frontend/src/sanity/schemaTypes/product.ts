import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'SaaS Platforms', value: 'SaaS Platforms' },
          { title: 'Business Tools', value: 'Business Tools' },
          { title: 'AI & Automation', value: 'AI & Automation' },
          { title: 'Internal Tools', value: 'Internal Tools' },
          { title: 'Experimental', value: 'Experimental' },
          { title: 'Utilities', value: 'Utilities' },
          { title: 'FinTech', value: 'FinTech' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Live', value: 'Live' },
          { title: 'Beta', value: 'Beta' },
          { title: 'Private Beta', value: 'Private Beta' },
          { title: 'Open Source', value: 'Open Source' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Image Alt Text',
      type: 'string',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured (Engineering Excellence)',
      type: 'boolean',
      initialValue: false,
      description: 'Check this to display the product in the Engineering Excellence section at the top.',
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of features/selling points (primarily for featured products)',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Material symbols icon name (e.g. inventory_2, school, smart_toy) - primarily for featured products',
    }),
    defineField({
      name: 'color',
      title: 'Accent Color',
      type: 'string',
      options: {
        list: [
          { title: 'Blue', value: 'blue' },
          { title: 'Indigo', value: 'indigo' },
          { title: 'Purple', value: 'purple' },
          { title: 'Cyan', value: 'cyan' },
        ],
      },
      initialValue: 'blue',
      description: 'Theme color accent - primarily for featured products',
    }),
    defineField({
      name: 'reverse',
      title: 'Reverse Layout Alignment',
      type: 'boolean',
      initialValue: false,
      description: 'Check this to reverse the layout order of image and text in the featured listing.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which products appear (lower numbers first)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'category',
      isFeatured: 'isFeatured',
    },
    prepare(selection) {
      const { title, media, subtitle, isFeatured } = selection
      return {
        title,
        media,
        subtitle: `${subtitle} ${isFeatured ? '★ Featured' : ''}`,
      }
    },
  },
})
