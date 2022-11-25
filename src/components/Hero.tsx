import "./Hero.css";

export default function Hero(): JSX.Element {
  return (
    <section className="hero">
      <h1 className="title">
        Ángel Iglesias Préstamo
        <img
          src={require("../assets/images/octopus.svg")}
          className="octopus"
        />
      </h1>

      <p>
        I&apos;m a Software Engineering student from the University of Oviedo,
        here at Spain. My interest in web development started back in 2014 when
        I started to create custom themes for Wordpress. That experience taught
        me a lot about HTML and CSS. Fast-forward to today, and I&apos;m
        currently in my last year of the degree. My main focus these days is
        learning about front-end development as well as I have a high interest
        in functional programming and programming language design.
      </p>
    </section>
  );
}
