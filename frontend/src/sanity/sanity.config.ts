// sanity/sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { post } from "./schemaTypes/post";
import { article } from "./schemaTypes/article";
import { author } from "./schemaTypes/author";
import { tag } from "./schemaTypes/tag";
import { portfolioItem } from "./schemaTypes/portfolioItem";
import { product } from "./schemaTypes/product";

export default defineConfig({
  name: "flexiti-studio",
  title: "Flexiti Studio CMS",
  basePath: "/studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [structureTool()],
  schema: {
    types: [post, article, author, tag, portfolioItem, product],
  },
});
