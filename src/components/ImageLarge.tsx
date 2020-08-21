import React from "react";

import {
  ContainerStyled,
  FigureStyled,
  CaptionStyled,
  ImageStyled,
} from "./ImageLargeStyled";

interface ImageLargeProps {
  card: {
    title: string;
    image: string;
  };
}

export const ImageLarge = ({ card }: ImageLargeProps) => {
  return (
    <ContainerStyled>
      <FigureStyled>
        <ImageStyled alt={card.title} src={card.image} />
        <CaptionStyled>{card.title}</CaptionStyled>
      </FigureStyled>
    </ContainerStyled>
  );
};
