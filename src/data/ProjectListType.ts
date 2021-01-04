export interface IContent {
  id: number;
  url: string;
  title: string;
  images: {
    small: string;
    large: string;
  }
}

export interface ILink {
  title: string;
  url: string;
}

export interface IProject {
  id: number;
  url: string;
  title: string;
  description: string;
  link?: ILink;
  content: IContent[];
}

export type ProjectListType = IProject[];
