import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
export const collections = {
  trips: defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/trips' }),
    schema: z.object({
      slug: z.string(), title: z.string(), region: z.string(),
      startDate: z.string(), endDate: z.string(), cover: z.string(),
      summary: z.string(), order: z.number()
    }).passthrough()
  }),
  days: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/days' }),
    schema: z.object({
      trip: z.string(), order: z.number(), date: z.string(), title: z.string()
    }).passthrough()
  })
};
