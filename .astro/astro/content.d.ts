declare module 'astro:content' {
	export interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"events": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "events";
  data: any;
  render(): Render[".md"];
}>;
"experience": {
"empathy.md": {
	id: "empathy.md";
  slug: "empathy";
  body: string;
  collection: "experience";
  data: InferEntrySchema<"experience">
} & { render(): Render[".md"] };
"uniovi.md": {
	id: "uniovi.md";
  slug: "uniovi";
  body: string;
  collection: "experience";
  data: InferEntrySchema<"experience">
} & { render(): Render[".md"] };
};
"menu": {
"experience.md": {
	id: "experience.md";
  slug: "experience";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"home.md": {
	id: "home.md";
  slug: "home";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"projects.md": {
	id: "projects.md";
  slug: "projects";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"publications.md": {
	id: "publications.md";
  slug: "publications";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"talks.md": {
	id: "talks.md";
  slug: "talks";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
};
"projects": {
"angelip2303-github-io.md": {
	id: "angelip2303-github-io.md";
  slug: "angelip2303-github-io";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"boxing-game.md": {
	id: "boxing-game.md";
  slug: "boxing-game";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"c-minus-minus.md": {
	id: "c-minus-minus.md";
  slug: "c-minus-minus";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"decentralized-delivery.md": {
	id: "decentralized-delivery.md";
  slug: "decentralized-delivery";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"minipaint.md": {
	id: "minipaint.md";
  slug: "minipaint";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"pong.md": {
	id: "pong.md";
  slug: "pong";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"pregel-rs.md": {
	id: "pregel-rs.md";
  slug: "pregel-rs";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"pschema-rs.md": {
	id: "pschema-rs.md";
  slug: "pschema-rs";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"tfg.md": {
	id: "tfg.md";
  slug: "tfg";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"wd2duckdb.md": {
	id: "wd2duckdb.md";
  slug: "wd2duckdb";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
};
"sections": {
"experience.md": {
	id: "experience.md";
  slug: "experience";
  body: string;
  collection: "sections";
  data: InferEntrySchema<"sections">
} & { render(): Render[".md"] };
"projects.md": {
	id: "projects.md";
  slug: "projects";
  body: string;
  collection: "sections";
  data: InferEntrySchema<"sections">
} & { render(): Render[".md"] };
"talks.md": {
	id: "talks.md";
  slug: "talks";
  body: string;
  collection: "sections";
  data: InferEntrySchema<"sections">
} & { render(): Render[".md"] };
};
"socials": {
"email.md": {
	id: "email.md";
  slug: "email";
  body: string;
  collection: "socials";
  data: any
} & { render(): Render[".md"] };
"github.md": {
	id: "github.md";
  slug: "github";
  body: string;
  collection: "socials";
  data: any
} & { render(): Render[".md"] };
"linkedin.md": {
	id: "linkedin.md";
  slug: "linkedin";
  body: string;
  collection: "socials";
  data: any
} & { render(): Render[".md"] };
};
"talks": {
"solid.md": {
	id: "solid.md";
  slug: "solid";
  body: string;
  collection: "talks";
  data: InferEntrySchema<"talks">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"publications": Record<string, {
  id: string;
  collection: "publications";
  data: any;
}>;

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.mjs");
}
