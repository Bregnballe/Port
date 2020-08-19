import React from "react";
import {
  DescriptionStyled,
  ParagraphStyled,
  LinkStyled
} from "./DescriptionStyled";

export const Description = ({ project }) => {
  return (
    <DescriptionStyled>
      <h3> {project.title} </h3>
      <ParagraphStyled> {project.description} </ParagraphStyled>
      {project.link ? (
        <LinkStyled href={project.link.url}>{project.link.title}</LinkStyled>
      ) : null}
    </DescriptionStyled>
  );
};
