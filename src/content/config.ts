import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    heroTitle: z.string().optional(),
    heroSubtitle: z.string().optional(),
    heroDescription: z.string().optional(),
    aboutTitle: z.string().optional(),
    aboutDescription: z.string().optional(),
    aboutImage: z.string().optional(),
    mission: z.string().optional(),
    vision: z.string().optional(),
    values: z.array(z.string()).optional(),
  }),
});

const courses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    duration: z.string(),
    students: z.number(),
    instructor: z.string(),
    rating: z.number().min(1).max(5),
    image: z.string(),
    category: z.enum(['Web Design', 'Graphic Design', 'Video Editing', 'Online Marketing', 'Programming', 'Business']),
    featured: z.boolean().default(false),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    position: z.string(),
    bio: z.string(),
    image: z.string(),
    facebook: z.string().optional(),
    twitter: z.string().optional(),
    instagram: z.string().optional(),
    linkedin: z.string().optional(),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    position: z.string(),
    company: z.string().optional(),
    testimonial: z.string(),
    image: z.string(),
    rating: z.number().min(1).max(5),
  }),
});

const settings = defineCollection({
  type: 'content',
  schema: z.object({
    siteTitle: z.string(),
    siteDescription: z.string(),
    contactEmail: z.string(),
    contactPhone: z.string(),
    address: z.string(),
    social: z.object({
      facebook: z.string().optional(),
      twitter: z.string().optional(),
      instagram: z.string().optional(),
      linkedin: z.string().optional(),
    }),
  }),
});

export const collections = {
  pages,
  courses,
  team,
  testimonials,
  settings,
};