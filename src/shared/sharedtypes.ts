import { IconType } from "react-icons";

export interface ProjectType {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  externalLinks: { url: string; icon: IconType }[];
}
