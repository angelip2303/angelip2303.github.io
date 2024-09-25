import { defineCollection, z } from "astro:content";

const menu = defineCollection({
    schema: z.object({
        title: z.string(),
        icon: z.string(),
        url: z.string()
    })
})

const sections = defineCollection({
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
    })
})

const experience = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
    })
})

const projects = defineCollection({
    schema: z.object({
        name: z.string(),
        featured: z.string(),
        description: z.string(),
        image: z.string(),
        technologies: z.array(z.string()),
        url: z.string().url()
    })
})

const talks = defineCollection({
    schema: z.object({
        name: z.string(),
        featured: z.string(),
        description: z.string(),
        image: z.string(),
        technologies: z.array(z.string()),
        url: z.string().url()
    })
})

const socials = defineCollection({
    schema: z.object({
        icon: z.string(),
        url: z.string().url(),
        alt: z.string()
    })
})

export const collections = {
    'menu': menu,
    'sections': sections,
    'experience': experience,
    'projects': projects,
    'talks': talks,
    'socials': socials
  };