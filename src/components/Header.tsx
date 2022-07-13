import React from "react";

import "./Header.css";

import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header(): JSX.Element {
  const [isMenuToggled, setMenuToggled] = React.useState(true);

  const toggleMenu = () => {
    document.getElementById("menu")?.classList.toggle("active");
    setMenuToggled((current) => !current);
  };

  return (
    <header>
      <h1>aip</h1>
      <div className="toggle-menu" hidden={!isMenuToggled} onClick={toggleMenu}>
        <FaBars />
      </div>
      <nav id="menu">
        <div
          className="toggle-menu close-menu"
          hidden={isMenuToggled}
          onClick={toggleMenu}
        >
          <FaTimes />
        </div>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/%C3%A1ngel-iglesias-pr%C3%A9stamo-007b561b7/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/angelip2303">
            <FaGithub />
          </a>
        </div>
      </nav>
    </header>
  );
}
