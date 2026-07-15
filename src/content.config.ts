import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
  loader: glob({ base: "./src/contents/blogs", pattern: "**/*.{md,mdx}" }),
  schema: rssSchema.extend({
    rAuthor: reference("authors"),
    rRelatedBlogs: z.array(reference("blog")).optional(),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/authors" }),
  schema: z.object({
    name: z.string(),
    contacts: z.object({
      email: z.email(),
    }),
    socials: z.object({
      LinkedIn: z.url(),
      Github: z.url(),
    }),
  }),
});

export const collections = { blog, authors };
