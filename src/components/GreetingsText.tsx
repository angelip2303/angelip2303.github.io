import React from "react";

import "./GreetingsText.css";

const greetings = ["hola", "hello", "salut"];

export default function GreetingsText(): JSX.Element {
  React.useState(() => {
    let textElements = document.getElementsByClassName("greetings-text");
    let index = 0;

    function changeGreetingsText() {
      Array.from(textElements).forEach(
        (element) => (element.textContent = greetings[index])
      );
      index = index === greetings.length - 1 ? 0 : index + 1;
    }

    window.setInterval(changeGreetingsText, 5000);
  });

  return (
    <React.Fragment>
      <h2 className="hero-text greetings-text">hola</h2>
      <h2 className="hero-text greetings-text">hola</h2>
    </React.Fragment>
  );
}
