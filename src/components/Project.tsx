import React from "react";

import { ProjectType } from "../shared/sharedtypes";

import "./Project.css";

interface ProjectProps {
  project: ProjectType;
}

export default function Project(props: ProjectProps): JSX.Element {
  const style = {
    "--image": `url(${window.location.origin + props.project.image})`,
  } as React.CSSProperties;

  return (
    <li className="project" style={style} key={props.project.name}>
      <h4>Featured Project</h4>
      <h2>{props.project.name}</h2>
      <p>{props.project.description}</p>
      <ul className="project-items">
        {props.project.technologies.map((technology) => (
          <li className="project-item" key={technology}>
            {technology}
          </li>
        ))}
      </ul>
      <ul className="project-items">
        {props.project.externalLinks.map((externalLink) => (
          <li className="project-item" key={externalLink.url}>
            <a href={externalLink.url}>
              <externalLink.icon />
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
