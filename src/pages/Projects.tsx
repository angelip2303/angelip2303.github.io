import List from "components/List";

import projects from "../projects.json";

export default function Projects(): JSX.Element {
  return (
    <section id="events">
      <List title={"The projects I have worked on"} list={projects.projects} />
    </section>
  ); // TODO: remove projects.projects => just projects
}
