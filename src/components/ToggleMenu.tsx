import React from "react";

import "./ToggleMenu.css";

import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";

export default function ToggleMenu(): JSX.Element {
  const [isMenuToggled, setMenuToggled] = React.useState(true);

  const toggleMenu = () => {
    document.getElementById("menu")?.classList.toggle("active"); // TODO: works?
    setMenuToggled((current) => !current);
  };

  return (
    <a onClick={toggleMenu}>
      <IconContext.Provider value={{ className: "toggle-menu" }}>
        {
          isMenuToggled ? <FaBars /> : <FaTimes className="close-menu" /> // TODO: save in the db of the browser?
        }
      </IconContext.Provider>
    </a>
  );
}
