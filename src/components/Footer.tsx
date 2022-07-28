import "./Footer.css";

import { BsHeartFill } from "react-icons/bs";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <p>
        Made with{" "}
        <a
          href="https://github.com/angelip2303/angelip2303.github.io"
          className="icon"
        >
          <BsHeartFill />
        </a>{" "}
        in Asturias
      </p>
    </footer>
  );
}
