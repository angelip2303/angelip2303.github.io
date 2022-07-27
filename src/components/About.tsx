import "./About.css";

export default function About(): JSX.Element {
  return (
    <section id="about">
      <h2>
        Let me <span>introduce</span> myself
      </h2>
      <p>
        <span
          className="greetings-text"
          style={{ textTransform: "capitalize" }}
        >
          hola
        </span>
        ! My name is <span>Ángel Iglesias Préstamo</span> and I'm a Software
        Engineering student from the University of Oviedo, here at Spain. My
        interest in web development started back in 2014 when I started to
        create custom themes for Wordpress. That experience taught me a lot
        about HTML & CSS.
      </p>
      <p>
        Fast-forward to today, and I'm currently in my last year of the degree.
        My main focus these days is learning about{" "}
        <span>front-end development</span> as well as I have a high interest in{" "}
        <span>functional programming</span> and{" "}
        <span>programming language design</span>.
      </p>
    </section>
  );
}
