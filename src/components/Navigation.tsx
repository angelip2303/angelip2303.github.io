import "./Navigation.css";

import menu from "../menu.json";

export default function Navigation(): JSX.Element {
  return (
    <nav id="menu">
      {menu.menu.map((menuItem) => (
        <a href={menuItem.url} className="menu-element" key={menuItem.title}>
          <img src={menuItem.emoji}></img> {menuItem.title}
        </a>
      ))}
    </nav>
  );
}
