import $ from "jquery";

import "./ScrollDown.css";

export default function ScrollDown(): JSX.Element {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    // We have to make sure that the about section is being displayed :D
    let about = $("#about").offset();
    if (about) $("html, body").animate({ scrollTop: about.top }, "slow");
  };

  return <a className="scroll-down" href="#" onClick={handleClick}></a>;
}
