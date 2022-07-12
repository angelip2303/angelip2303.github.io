import "./Header.css";

import { FaBars } from "react-icons/fa";

export default function Header(): JSX.Element {
  return (
    <header>
      <h1>aip</h1>
      <label htmlFor="toggle">
        <FaBars />
      </label>
      <input type="checkbox" id="toggle" />
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
