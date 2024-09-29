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
  company: z.string(),
  job: z.string(),
  startMonth: z.string(),
  startYear: z.number(),
  endMonth: z.string().optional(),
  endYear: z.number().optional(),
  logo: z.string(),
});

export const listItemSchema = z.object({
  name: z.string(),
  featured: z.boolean(),
  description: z.string(),
  image: z.string(),
  technologies: z.array(z.string()),
  url: z.string().url(),
});

export const publicationSchema = z.object({
  title: z.string(),
  authors: z.array(z.string()),
  date: z.string(),
  book: z.string(),
  conference: z.string(),
  featured: z.boolean(),
  path: z.string(),
  doi: z.string().url(),
});

export const talkSchema = z.object({
  event: z.string(),
  title: z.string(),
  date: z.string(),
  location: z.string(),
  url: z.string().url().optional(),
  slides: z.string().optional(),
});

export const socialItemSchema = z.object({
  icon: z.string(),
  url: z.string().url(),
  alt: z.string(),
});
