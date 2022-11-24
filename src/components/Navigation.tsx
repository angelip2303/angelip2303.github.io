import "./Navigation.css";

import menu from "../menu.json";

export default function Navigation(): JSX.Element {
  return (
    <nav id="menu">
      {menu.menu.map((menuItem) => (
        <a
          href={menuItem.url}
          className="menu-element"
          //onClick={toggleMenu} TODO: improve this ?
          key={menuItem.title}
        >
          {menuItem.title}
        </a>
      ))}
    </nav>
  );
}
