import React from "react";
import {
  FigureStyled,
  ImageStyled,
  LinkStyled,
  CaptionStyled
} from "./ProjectCardStyled";

export const ProjectCard = ({ projecturl, cardurl, title, image }) => {
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
