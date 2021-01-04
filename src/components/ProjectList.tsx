import React from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectListStyled } from "./ProjectListStyled";

import { ProjectListType } from "../data/ProjectListType";

interface ProjectListProps {
  projectList: ProjectListType;
}

export const ProjectList = ({ projectList }: ProjectListProps) => {
  window.scrollTo(0, 0);
  // scroll to top of page

  const list = projectList.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        id={project.id}
        title={project.title}
        projecturl={project.url}
        cardurl={project.content[0].url}
        image={project.content[0].images.small}
      />
    );
  });

  return <ProjectListStyled>{list}</ProjectListStyled>;
};
