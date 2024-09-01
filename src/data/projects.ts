import type { IListItem } from "../types";

export const projects: IListItem[] = [
  {
    name: "wd2duckdb",
    featured: "Happy Accident",
    description:
      "Application that transforms a Wikidata JSON dump into a DuckDB database.",
    image: "/src/assets/wd2duckdb.webp",
    technologies: ["Rust", "DuckDB", "Wikidata", "JSON", "ETL", "CLI"],
    url: "https://github.com/angelip2303/wd2duckdb",
    class: "col-span-10 lg:col-span-4"
  },
  {
    name: "pregel-rs",
    featured: "Featured Project",
    description:
      "A Graph library written in Rust for implementing your own algorithms in a Pregel fashion.",
    image: "/src/assets/pregel.webp",
    technologies: [
      "Rust",
      "Knowledge Graphs",
      "Algorithms",
      "Pregel",
      "Pola-rs",
    ],
    url: "https://github.com/angelip2303/pregel-rs",
    class: "col-span-10 lg:col-span-6"
  },
  {
    name: "pschema-rs",
    featured: "Featured Project",
    description:
      "Pregel-based schema validation algorithm written in Rust for generating Wikidata subsets.",
    image: "/src/assets/pschema.webp",
    technologies: [
      "Rust",
      "Knowledge Graphs",
      "Algorithms",
      "Pregel",
      "Pola-rs",
      "ShEx",
    ],
    url: "https://github.com/angelip2303/pschema-rs",
    class: "col-span-10 lg:col-span-5"
  },
  {
    name: "TFG",
    featured: "Featured Project",
    description:
      "Documentation of the Final Degree Project on the analysis and implementation of an algorithm to validate Knowledge Graphs using Big data techniques.",
    image: "/src/assets/tfg.webp",
    technologies: ["Documentation", "Latex", "RDF", "Research"],
    url: "https://angelip2303.github.io/tfg/",
    class: "col-span-10 lg:col-span-5"
  },
  {
    name: "Decentralized Delivery",
    featured: "Featured Project",
    description:
      "We are creating an app for you to order the products you want - as in any other site - with privacy in mind.",
    image: "/src/assets/dede.webp",
    technologies: ["React.js", "Node.js"],
    url: "https://github.com/Arquisoft/dede_en2a",
    class: "col-span-10 lg:col-span-5"
  },
  {
    name: "C--",
    featured: "Featured Project",
    description:
      "My own version of the C-- programming language. A simpler version of C written in the labs of the DLP course at UNIOVI.",
    image: "/src/assets/dlp.webp",
    technologies: ["Java", "ANTLR", "Programming Language Design"],
    url: "https://github.com/angelip2303/DLP-uniovi",
    class: "col-span-10 lg:col-span-5"
  },
  {
    name: "angelip2303.github.io",
    featured: "Featured Project",
    description:
      "My personal portfolio website created using Astro and TailwindCSS",
    image: "/src/assets/site.webp",
    technologies: ["Astro", "TailwindCSS", "TypeScript"],
    url: "https://github.com/angelip2303/angelip2303.github.io",
    class: "col-span-10 lg:col-span-6"
  },
  {
    name: "MiniPaint",
    featured: "Happy Accident",
    description:
      "Tiny whiteboard where user can draw and save what he is being painted in the canvas.",
    image: "/src/assets/minipaint.webp",
    technologies: ["p5.js", "Creative Coding"],
    url: "https://editor.p5js.org/angelip2303/sketches/wr9xz7fNX",
    class: "col-span-10 lg:col-span-4"
  },
  {
    name: "Pong!",
    featured: "Happy Accident",
    description:
      "Version of the Pong game to be played in the browser and implemented using a physics engine",
    image: "/src/assets/pong.webp",
    technologies: ["p5.js", "Creative Coding", "Game", "Matter.js"],
    url: "https://editor.p5js.org/angelip2303/sketches/1Uge8MdnF",
    class: "col-span-10 lg:col-span-4"
  },
  {
    name: "Boxing Game",
    featured: "Featured Project",
    description:
      "Boxing game that can be controlled with your webcam. Created using ml5.js and p5.js",
    image: "/src/assets/boxing.webp",
    technologies: ["p5.js", "ml5.js", "Game", "Documentation"],
    url: "https://angelip2303.github.io/boxing-docs/",
    class: "col-span-10 lg:col-span-6"
  },
];
