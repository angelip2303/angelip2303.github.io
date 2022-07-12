import "./Hero.css";

import GreetingsText from "./GreetingsText";
import ScrollDown from "./ScrollDown";

export default function Hero(): JSX.Element {
  return (
    <section className="hero">
      <GreetingsText />
      <ScrollDown />
    </section>
  );
}
