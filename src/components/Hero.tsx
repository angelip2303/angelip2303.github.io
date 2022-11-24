import "./Hero.css";

export default function Hero(): JSX.Element {
  return (
    <section className="hero">
      <h1>
        Ángel Iglesias Préstamo
        <img
          src={require("../assets/images/octopus.svg")}
          className="octopus"
        />
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis
        leo sit amet nibh tristique venenatis. Nunc orci erat, tristique eget
        eros eget, pharetra faucibus velit. Curabitur mattis dictum maximus.
        Pellentesque vitae orci efficitur, pharetra est nec, sollicitudin magna.
        Phasellus aliquet sem nunc. Nunc vitae nisi sit amet mauris imperdiet
        posuere. Sed vitae risus volutpat mi tristique ultricies et ac sapien.
      </p>
    </section>
  );
}
