import React from "react";
import {
  FigureStyled,
  ImageStyled,
  CaptionStyled,
  LinkStyled,
} from "./ImageCardStyled";

interface ImageCardProps {
  projecturl: string;
  cardurl: string;
  id: number;
  title: string;
  image: string;
}

export const ImageCard = ({
  projecturl,
  cardurl,
  title,
  image,
}: ImageCardProps) => {
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
