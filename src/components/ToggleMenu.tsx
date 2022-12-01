import React from "react";

import "./ToggleMenu.css";

import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";

interface ToggleMenuProps {
  isMenuToggled: boolean;
  toggleMenu: () => void;
}

export default function ToggleMenu(props: ToggleMenuProps): JSX.Element {
  return (
    <button
      onClick={props.toggleMenu}
      title="Button for toggling the nav for mobiles"
    >
      <IconContext.Provider value={{ className: "toggle-menu" }}>
        {props.isMenuToggled ? <FaBars /> : <FaTimes className="close-menu" />}
      </IconContext.Provider>
    </button>
  );
}
