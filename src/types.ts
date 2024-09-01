export interface IListItem {
  name: string;
  featured: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
  class: string;
}

export interface IMenuItem {
  icon: string;
  title: string;
  url: string;
}

export interface ISocialMedia {
  icon: string;
  url: string;
  name: string;
}

export interface IExperienceItem {
  title: string;
  date: string;
  description: string;
}

export interface ISection {
  title: string;
  subtitle: string;
  description: string;
}