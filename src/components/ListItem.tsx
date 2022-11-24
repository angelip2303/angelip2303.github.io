import React from "react";

import { ListItemType } from "../shared/sharedtypes";

import "./ListItem.css";

interface ListItemProps {
  listItem: ListItemType;
}

export default function ListItem(props: ListItemProps): JSX.Element {
  const style = {
    "--image": `url(${require(`../assets/images/${props.listItem.image}`)})`,
    cursor: "pointer",
  } as React.CSSProperties;

  return (
    <li
      className="project"
      style={style}
      key={props.listItem.name}
      onClick={() => window.open(props.listItem.url, "_blank")}
    >
      <h4>{props.listItem.featured}</h4>
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
