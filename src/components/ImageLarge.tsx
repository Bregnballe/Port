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
    images: {
      small: string;
      large: string;
    }
  };
}

export const ImageLarge = ({ card }: ImageLargeProps) => {
  return (
    <ContainerStyled>
      <FigureStyled>
        <ImageStyled alt={card.title} src={card.images.large} />
        <CaptionStyled>{card.title}</CaptionStyled>
      </FigureStyled>
    </ContainerStyled>
  );
};
