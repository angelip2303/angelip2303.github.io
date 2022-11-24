import React from "react";

import "./ThemeSelector.css";

import { IconContext } from "react-icons";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeSelector(): JSX.Element {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    const mode: string = isDarkMode ? "light" : "dark";
    localStorage.setItem("theme", mode);
    document.documentElement.className = mode;
    setDarkMode((mode) => !mode);
  };

  React.useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme"); // TODO: refactor use react context :D
    const mode: string = localStorageTheme ? localStorageTheme : "light";
    document.documentElement.className = mode;
  }, []);

  return (
    <a onClick={toggleDarkMode}>
      <IconContext.Provider value={{ className: "themeSelector" }}>
        {isDarkMode ? <MdOutlineDarkMode /> : <MdLightMode />}
      </IconContext.Provider>
    </a>
  );
}
