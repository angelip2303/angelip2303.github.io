import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import {
  experienceSchema,
  listItemSchema,
  menuSchema,
  sectionSchema,
  socialItemSchema,
} from "../schemas";

const menu = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "src/data/menu" }),
  schema: menuSchema,
});

const sections = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/data/sections" }),
  schema: sectionSchema,
});

const experience = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "src/data/experience" }),
  schema: experienceSchema,
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/data/projects" }),
  schema: listItemSchema,
});

const talks = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/data/talks" }),
  schema: listItemSchema,
});

const socials = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "src/data/socials" }),
  schema: socialItemSchema,
});

export const collections = {
  menu,
  sections,
  experience,
  projects,
  talks,
  socials,
};
