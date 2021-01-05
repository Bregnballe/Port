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
        <FigureStyled role="figure" >
          <ImageStyled src={image} alt={title} />
          <CaptionStyled >{title}</CaptionStyled>
        </FigureStyled>
      </LinkStyled>
    </li>
  );
};

