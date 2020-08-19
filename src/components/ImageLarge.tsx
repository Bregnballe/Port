import React from "react";

import {
  ContainerStyled,
  FigureStyled,
  CaptionStyled,
  ImageStyled
} from "./ImageLargeStyled";

export const ImageLarge = ({ card }) => {
  return (
    <ContainerStyled>
      <FigureStyled>
        <ImageStyled alt={card.title} src={card.image} />
        <CaptionStyled>{card.title}</CaptionStyled>
      </FigureStyled>
    </ContainerStyled>
  );
};
