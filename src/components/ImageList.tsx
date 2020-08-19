import React from "react";
import { ImageCard } from "./ImageCard";
import { ImageListStyled } from "./ImageListStyled";

export const ImageList = ({ project }) => {
  const imageList = project.content.map((card, index) => {
    return (
      <ImageCard
        index={index}
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
