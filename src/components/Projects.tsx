import { ProjectType } from "../shared/sharedtypes";

import "./Projects.css";

import Project from "./Project";

import projects from "../projects.json";

//import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects(): JSX.Element {
  return (
    <section id="projects">
      <h2>
        The projects I&apos;m the most <span>proud</span> of
      </h2>
      <ol className="projects">
        {projects.projects.map((project) => (
          <Project project={project as ProjectType} key={project.name} />
        ))}
      </ol>
    </section>
  );
}
