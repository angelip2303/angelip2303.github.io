import React from "react";

import { ProjectType } from "../shared/sharedtypes";

import "./Project.css";

interface ProjectProps {
  project: ProjectType;
}

export default function Project(props: ProjectProps): JSX.Element {
  const style = {
    "--image": `url(${props.project.image})`,
    cursor: "pointer",
  } as React.CSSProperties;

  return (
    <li
      className="project"
      style={style}
      key={props.project.name}
      onClick={() => window.open(props.project.url, "_blank")}
    >
      <h4>{props.project.featured}</h4>
      <h2>{props.project.name}</h2>
      <p>{props.project.description}</p>
      <ul className="project-items">
        <li className="project-item" key={props.project.technologies[0]}>
          {props.project.technologies[0]}
        </li>
        {props.project.technologies.slice(1).map((technology) => (
          <React.Fragment key={technology}>
            <span>·</span>
            <li className="project-item">{technology}</li>
          </React.Fragment>
        ))}
      </ul>
    </li>
  );
}
