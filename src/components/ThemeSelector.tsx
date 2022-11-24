import React from "react";

import "./ThemeSelector.css";

import { IconContext } from "react-icons";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeSelector(): JSX.Element {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    document.documentElement.className = isDarkMode ? "light" : "dark";
    setDarkMode((mode) => !mode);
  };

  return (
    <a onClick={toggleDarkMode}>
      <IconContext.Provider value={{ className: "themeSelector" }}>
        {isDarkMode ? <MdOutlineDarkMode /> : <MdLightMode />}
      </IconContext.Provider>
    </a>
  );
}
