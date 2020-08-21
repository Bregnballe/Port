import React from "react";
import { ImageCard } from "./ImageCard";
import { ImageListStyled } from "./ImageListStyled";

import { IProject } from "../data/ProjectListType";

interface ImageListProps {
  project: IProject;
}

export const ImageList = ({ project }: ImageListProps) => {
  const imageList = project.content.map((card) => {
    return (
      <ImageCard
        key={card.id}
        id={card.id}
        title={card.title}
        cardurl={card.url}
        projecturl={project.url}
        image={card.image}
      />
    );
  });

  return <ImageListStyled>{imageList}</ImageListStyled>;
};
