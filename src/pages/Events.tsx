import List from "components/List";

import events from "../events.json";

export default function Events(): JSX.Element {
  return (
    <section id="events">
      <List title={"The events I have attended"} list={events.events} />
    </section>
  );
}
