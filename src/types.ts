export interface IListItem {
  name: string;
  featured: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
}

export interface INavigationItem {
  emoji: string;
  title: string;
  url: string;
}

export interface ISocialMedia {
  icon: string;
  url: string;
  name: string;
}
