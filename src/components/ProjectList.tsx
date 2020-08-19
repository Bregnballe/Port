import React from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectListStyled } from "./ProjectListStyled";

export const ProjectList = ({ listdata }) => {
  window.scrollTo(0, 0);
  // scroll to top of page

  const list = listdata.map((project, index) => {
    return (
      <ProjectCard
        index={index}
        key={project.id}
        id={project.id}
        title={project.title}
        projecturl={project.url}
        cardurl={project.content[0].url}
        image={project.content[0].image}
      />
    );
  });

  return <ProjectListStyled>{list}</ProjectListStyled>;
};
