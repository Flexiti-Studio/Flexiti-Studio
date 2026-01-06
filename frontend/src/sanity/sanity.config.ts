// sanity/sanity.config.ts
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { post } from "./schemaTypes/post";
import { article } from "./schemaTypes/article";
import { author } from "./schemaTypes/author";
import { tag } from "./schemaTypes/tag";

export default defineConfig({
  name: "flexiti-studio",
  title: "Flexiti Studio CMS",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [deskTool()],
  schema: {
    types: [post, article, author, tag],
  },
});
