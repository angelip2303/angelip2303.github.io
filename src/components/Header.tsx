import React from "react";

import "./Header.css";

import ThemeSelector from "./ThemeSelector";
import ToggleMenu from "./ToggleMenu";
import Navigation from "./Navigation";

export default function Header(): JSX.Element {
  const [isMenuToggled, setMenuToggled] = React.useState(true);

  const toggleMenu = () => {
    document.getElementById("menu")?.classList.toggle("active");
    setMenuToggled((current) => !current);
  };

  return (
    <header>
      <ThemeSelector />
      <ToggleMenu isMenuToggled={isMenuToggled} toggleMenu={toggleMenu} />
      <Navigation toggleMenu={toggleMenu} />
    </header>
  );
}
