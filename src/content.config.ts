import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// AutoIncome が src/content/blog/*.md に記事を書き出す
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(''),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { blog };
