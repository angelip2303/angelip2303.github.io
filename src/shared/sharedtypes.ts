import { IconType } from "react-icons";

export interface ProjectType {
  name: string;
  featured: string;
  description: string;
  image: string;
  technologies: string[];
  externalLinks: { url: string; icon: IconType }[];
}
