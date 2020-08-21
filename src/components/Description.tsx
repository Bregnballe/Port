import React from "react";
import {
  DescriptionStyled,
  ParagraphStyled,
  LinkStyled,
} from "./DescriptionStyled";
import { IProject } from "../data/ProjectListType";

interface ProjectProps {
  project: IProject;
}

export const Description = ({ project }: ProjectProps) => {
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
