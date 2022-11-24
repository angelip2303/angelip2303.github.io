import React from "react";

import { ListItemType } from "../shared/sharedtypes";

import "./ListItem.css";

interface ListItemProps {
  listItem: ListItemType;
}

export default function ListItem(props: ListItemProps): JSX.Element {
  return (
    <li
      className="project"
      key={props.listItem.name}
      onClick={() => window.open(props.listItem.url, "_blank")}
    >
      <span className="badge">{props.listItem.featured}</span>
      <h2>{props.listItem.name}</h2>
      <p>{props.listItem.description}</p>
      <ul className="project-items">
        <li className="project-item" key={props.listItem.technologies[0]}>
          {props.listItem.technologies[0]}
        </li>
        {props.listItem.technologies.slice(1).map((technology) => (
          <React.Fragment key={technology}>
            <span>·</span>
            <li className="project-item">{technology}</li>
          </React.Fragment>
        ))}
      </ul>
    </li>
  );
}
