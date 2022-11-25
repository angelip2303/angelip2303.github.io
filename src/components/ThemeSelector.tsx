import React from "react";

import "./ThemeSelector.css";

import { IconContext } from "react-icons";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "context/ThemeContext";

export default function ThemeSelector(): JSX.Element {
  const theme = useTheme();
  return (
    <button onClick={theme?.toggleTheme}>
      <IconContext.Provider value={{ className: "themeSelector" }}>
        {theme?.isDarkMode ? <MdOutlineDarkMode /> : <MdLightMode />}
      </IconContext.Provider>
    </button>
  );
}
