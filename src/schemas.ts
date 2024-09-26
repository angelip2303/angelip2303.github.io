import { z } from "astro:content";

export const menuSchema = z.object({
  id: z.string(),
  icon: z.string(),
  url: z.string(),
});

export const sectionSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
});

export const experienceSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string(),
});

export const listItemSchema = z.object({
  name: z.string(),
  featured: z.boolean(),
  description: z.string(),
  image: z.string(),
  technologies: z.array(z.string()),
  url: z.string().url(),
});

export const socialItemSchema = z.object({
  icon: z.string(),
  url: z.string().url(),
  alt: z.string(),
});
