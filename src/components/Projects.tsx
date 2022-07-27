import { ProjectType } from "../shared/sharedtypes";

import "./Projects.css";

import Project from "./Project";

import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects: ProjectType[] = [
  {
    name: "Decentralized Delivery",
    description:
      "We are creating an app for you to order the products you want - as in any other site - with privacy in mind.",
    image: "images/dede.png",
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
    description:
      "My own version of the C-- programming language. A simpler version of C written in the labs of the DLP course at UNIOVI.",
    image: "images/dlp.png",
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
    description:
      "My personal portfolio website created using React.js and some CSS animations that I like!",
    image: "images/site.png",
    technologies: ["React.js", "CSS"],
    externalLinks: [
      {
        url: "https://github.com/angelip2303/angelip2303.github.io",
        icon: FiGithub,
      },
    ],
  },
];

export default function Projects(): JSX.Element {
  return (
    <section id="projects">
      <h2>
        The projects I'm the most <span>proud</span> of
      </h2>
      <ol className="projects">
        {projects.map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </ol>
    </section>
  );
}
