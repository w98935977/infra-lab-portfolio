import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    titleZh: z.string().optional(),
    subtitle: z.string(),
    subtitleZh: z.string().optional(),
    summary: z.string(),
    summaryZh: z.string().optional(),
    stack: z.array(z.string()),
    status: z.string(),
    statusZh: z.string().optional(),
    order: z.number()
  })
});

export const collections = { projects };
