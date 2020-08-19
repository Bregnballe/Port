import React from "react";
import {
  FigureStyled,
  ImageStyled,
  CaptionStyled,
  LinkStyled
} from "./ImageCardStyled";

export const ImageCard = ({ projecturl, cardurl, title, image }) => {
  return (
    <li>
      <LinkStyled to={`/${projecturl}/${cardurl}`}>
        <FigureStyled>
          <ImageStyled alt={title} src={image} />
          <CaptionStyled>{title}</CaptionStyled>
        </FigureStyled>
      </LinkStyled>
    </li>
  );
};
