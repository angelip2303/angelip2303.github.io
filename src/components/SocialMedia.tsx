import "./SocialMedia.css";

import { IconType } from "react-icons";
import { TfiGithub, TfiLinkedin, TfiEmail } from "react-icons/tfi";

interface SocialMediaInterface {
  title: string;
  icon: IconType;
  url: string;
}

const socialMedia: SocialMediaInterface[] = [
  {
    title: "Github",
    icon: TfiGithub,
    url: "https://github.com/angelip2303",
  },
  {
    title: "LinkedIn",
    icon: TfiLinkedin,
    url: "https://www.linkedin.com/in/%C3%A1ngel-iglesias-pr%C3%A9stamo-007b561b7/",
  },
  {
    title: "Email",
    icon: TfiEmail,
    url: "mailto:angel.iglesias.prestamo@gmail.com",
  },
];

export default function SocialMedia(): JSX.Element {
  return (
    <li className="socials">
      {socialMedia.map((social) => (
        <ul
          className="icon"
          onClick={() => window.open(social.url, "_blank")}
          key={social.title}
        >
          <social.icon />
        </ul>
      ))}
    </li>
  );
}
