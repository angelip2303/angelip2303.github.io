import { ProjectType } from "../shared/sharedtypes";

import "./Projects.css";

import Project from "./Project";

import { FiGithub, FiExternalLink } from "react-icons/fi";

import DedeImg from "../assets/images/dede.webp";
import CProgrammingLanguage from "../assets/images/dlp.webp";
import Portfolio from "../assets/images/site.webp";
import SolidWorld from "../assets/images/solid.webp";

const projects: ProjectType[] = [
  {
    name: "Decentralized Delivery",
    featured: "Featured Project",
    description:
      "We are creating an app for you to order the products you want - as in any other site - with privacy in mind.",
    image: DedeImg,
    technologies: ["React.js", "Node.js"],
    externalLinks: [
      {
        url: "https://github.com/Arquisoft/dede_en2a",
        icon: FiGithub,
      },
      {
        url: "https://www.dedeen2a.tk/",
        icon: FiExternalLink,
      },
    ],
  },
  {
    name: "C--",
    featured: "Featured Project",
    description:
      "My own version of the C-- programming language. A simpler version of C written in the labs of the DLP course at UNIOVI.",
    image: CProgrammingLanguage,
    technologies: ["Java", "ANTLR", "Programming Language Design"],
    externalLinks: [
      {
        url: "https://github.com/angelip2303/DLP-uniovi",
        icon: FiGithub,
      },
    ],
  },
  {
    name: "angelip2303.github.io",
    featured: "Featured Project",
    description:
      "My personal portfolio website created using React.js and some CSS animations that I like!",
    image: Portfolio,
    technologies: ["React.js", "CSS"],
    externalLinks: [
      {
        url: "https://github.com/angelip2303/angelip2303.github.io",
        icon: FiGithub,
      },
      {
        url: "https://angelip2303.github.io/",
        icon: FiExternalLink,
      },
    ],
  },
  {
    name: "Solid World July 2022",
    featured: "Featured Event",
    description:
      "Event were I introduced the Decentralized Delivery project to the Solid community.",
    image: SolidWorld,
    technologies: ["English", "Communication"],
    externalLinks: [
      {
        url: "https://vimeo.com/731471028",
        icon: FiExternalLink,
      },
    ],
  },
];

export default function Projects(): JSX.Element {
  return (
    <section id="projects">
      <h2>
        The projects I&apos;m the most <span>proud</span> of
      </h2>
      <ol className="projects">
        {projects.map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </ol>
    </section>
  );
}
