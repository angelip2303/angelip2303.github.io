import "./Hero.css";

const name = "Ángel Iglesias Préstamo";
const text =
  "I'm a student of software engineering at the University of Oviedo in Spain. My interest in web development began in 2014, when I began creating custom Wordpress themes. I learned a lot about HTML and CSS as a result of that experience. Fast forward to today, and I'm in my final year of college. These days, my main focus is learning about data engineering, but I'm also interested in functional programming and programming language design.";

export default function Hero(): JSX.Element {
  return (
    <section className="hero">
      <h1 className="title">
        {name}
        <img
          src={require("../assets/images/octopus.svg")}
          className="octopus"
          alt="Emoji of an octopus bouncing!"
        />
      </h1>
      <p>{text}</p>
    </section>
  );
}
