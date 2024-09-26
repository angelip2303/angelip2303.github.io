import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";

import {
  experienceSchema,
  listItemSchema,
  menuSchema,
  sectionSchema,
  socialItemSchema,
} from "../schemas";

const menu = defineCollection({
  loader: file("src/data/menu/menu.json"),
  schema: menuSchema,
});

const sections = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/data/sections" }),
  schema: sectionSchema,
});

const experience = defineCollection({
  loader: glob({ pattern: "*.json", base: "src/data/experience" }),
  schema: experienceSchema,
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/data/projects" }),
  schema: listItemSchema,
});

const publications = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/data/publications" }),
  schema: listItemSchema,
});

const talks = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/data/talks" }),
  schema: listItemSchema,
});

const socials = defineCollection({
  loader: glob({ pattern: "*.json", base: "src/data/socials" }),
  schema: socialItemSchema,
});

export const collections = {
  menu,
  sections,
  experience,
  projects,
  publications,
  talks,
  socials,
};
