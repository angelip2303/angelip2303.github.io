import { ListItemType } from "../shared/sharedtypes";

import "./List.css";

import ListItem from "./ListItem";

interface ListProps {
  title: string;
  list: ListItemType[];
}

export default function Projects(props: ListProps): JSX.Element {
  return (
    <section className="listSection">
      <h1>{props.title}</h1>
      <br />
      <ol className="list">
        {props.list.map((element) => (
          <ListItem listItem={element as ListItemType} key={element.name} />
        ))}
      </ol>
    </section>
  );
}
