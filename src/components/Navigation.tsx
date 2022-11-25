import { Link } from "react-router-dom";

import "./Navigation.css";

import menu from "../menu.json";

export default function Navigation(): JSX.Element {
  return (
    <nav id="menu">
      {menu.menu.map((menuItem) => (
        <Link to={menuItem.url} key={menuItem.title}>
          <img src={require(`../assets/images/${menuItem.emoji}`)} />
          {menuItem.title}{" "}
        </Link>
      ))}
    </nav>
  );
}
