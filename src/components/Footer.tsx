import "./Footer.css";

import { BsHeartFill } from "react-icons/bs";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <p>
        Made with{" "}
        <a href="">
          <BsHeartFill />
        </a>{" "}
        in Asturias
      </p>
    </footer>
  );
}
