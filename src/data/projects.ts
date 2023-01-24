import type { IListItem } from "../types";

export const projects: IListItem[] = [
  {
    name: "Decentralized Delivery",
    featured: "Featured Project",
    description:
      "We are creating an app for you to order the products you want - as in any other site - with privacy in mind.",
    image: "dede.webp",
    technologies: ["React.js", "Node.js"],
    url: "https://github.com/Arquisoft/dede_en2a",
  },
  {
    name: "C--",
    featured: "Featured Project",
    description:
      "My own version of the C-- programming language. A simpler version of C written in the labs of the DLP course at UNIOVI.",
    image: "dlp.webp",
    technologies: ["Java", "ANTLR", "Programming Language Design"],
    url: "https://github.com/angelip2303/DLP-uniovi",
  },
  {
    name: "angelip2303.github.io",
    featured: "Featured Project",
    description:
      "My personal portfolio website created using Astro and TailwindCSS",
    image: "site.webp",
    technologies: ["Astro", "TailwindCSS", "TypeScript"],
    url: "https://github.com/angelip2303/angelip2303.github.io",
  },
  {
    name: "MiniPaint",
    featured: "Happy Accident",
    description:
      "Tiny whiteboard where user can draw and save what he is being painted in the canvas.",
    image: "/minipaint.webp",
    technologies: ["p5.js", "Creative Coding"],
    url: "https://editor.p5js.org/angelip2303/sketches/wr9xz7fNX",
  },
  {
    name: "Pong!",
    featured: "Happy Accident",
    description:
      "Version of the Pong game to be played in the browser and implemented using a physics engine",
    image: "pong.webp",
    technologies: ["p5.js", "Creative Coding", "Game", "Matter.js"],
    url: "https://editor.p5js.org/angelip2303/sketches/1Uge8MdnF",
  },
  {
    name: "Boxing Game",
    featured: "Featured Project",
    description:
      "Boxing game that can be controlled with your webcam. Created using ml5.js and p5.js",
    image: "boxing.webp",
    technologies: ["p5.js", "ml5.js", "Game", "Documentation"],
    url: "https://angelip2303.github.io/boxing-docs/",
  },
];
