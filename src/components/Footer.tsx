import "./Footer.css";

import MadeWithLove from "./MadeWithLove";
import SocialMedia from "./SocialMedia";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <SocialMedia />
      <MadeWithLove />
    </footer>
  );
}
