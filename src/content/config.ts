import { z, defineCollection } from "astro:content";
// The blog posts on the site.
const postsCollection = defineCollection({
  type: "content",

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      authors: z.array(z.enum(["ben", "nicholas", "zach"])),
      tags: z.array(z.string()),
      published: z.date().optional(),
      cover: image().refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
    }),
});

export const collections = {
  posts: postsCollection,
};
