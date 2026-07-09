import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
  loader: glob({ base: "./src/contents/blogs", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    ...rssSchema.shape,
    rAuthor: reference("authors"),
    rRelatedBlogs: z.array(reference("blog")).optional(),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/authors" }),
  schema: z.object({
    name: z.string(),
    // portfolio: z.url(),
  }),
});

export const collections = { blog, authors };
