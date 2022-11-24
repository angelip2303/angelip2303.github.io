import "./Header.css";

import ThemeSelector from "./ThemeSelector";
import ToggleMenu from "./ToggleMenu";
import Navigation from "./Navigation";

export default function Header(): JSX.Element {
  return (
    <header>
      <ThemeSelector />
      <ToggleMenu />
      <Navigation />
    </header>
  );
}
