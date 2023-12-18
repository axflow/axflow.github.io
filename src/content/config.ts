import { z, defineCollection } from "astro:content";
// The blog posts on the site.
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      authors: z.array(z.enum(['ben', 'nicholas'])),
      tags: z.array(z.string()),
      published: z.date(),
    })
});


export const collections = {
  posts: postsCollection,
};
