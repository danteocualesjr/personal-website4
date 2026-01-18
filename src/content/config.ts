import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const fictionCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    genre: z.string().optional(),
    wordCount: z.number().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  fiction: fictionCollection,
};
