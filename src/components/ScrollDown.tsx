import $ from "jquery";

import "./ScrollDown.css";

export default function ScrollDown(): JSX.Element {
  const handleClick = () => {
    // We have to make sure that the about section is being displayed :D
    const about = $("#about").offset();
    if (about) $("html, body").animate({ scrollTop: about.top }, "slow");
  };

  return (
    <button
      className="scroll-down"
      aria-label="scroll-down"
      onClick={handleClick}
    />
  );
}
