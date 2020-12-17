import React from "react";
import {
  FigureStyled,
  ImageStyled,
  LinkStyled,
  CaptionStyled,
} from "./ProjectCardStyled";

interface ProjectCardProps {
  projecturl: string;
  cardurl: string;
  id: number;
  title: string;
  image: string;
}

export const ProjectCard = ({
  projecturl,
  cardurl,
  title,
  image,
}: ProjectCardProps) => {
  return (
    <li>
      <LinkStyled to={`/${projecturl}/${cardurl}`} >
        <FigureStyled role="figure" aria-labelledby={title}>
          <ImageStyled src={image} />
          <CaptionStyled id={title}>{title}</CaptionStyled>
        </FigureStyled>
      </LinkStyled>
    </li>
  );
};

