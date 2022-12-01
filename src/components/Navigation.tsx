import { Link } from "react-router-dom";

import "./Navigation.css";

import menu from "../menu.json";

interface NavigationProps {
  toggleMenu: () => void;
}

export default function Navigation(props: NavigationProps): JSX.Element {
  return (
    <nav id="menu">
      {menu.menu.map((menuItem) => (
        <Link
          to={menuItem.url}
          onClick={props.toggleMenu}
          key={menuItem.title}
          className="menuElement"
          title={"Link to the page " + menuItem.title}
        >
          <img
            src={require(`../assets/images/${menuItem.emoji}`)}
            className="menuIcon"
            alt={"Icon for the menu item " + menuItem.title}
          />
          {menuItem.title}
        </Link>
      ))}
    </nav>
  );
}
