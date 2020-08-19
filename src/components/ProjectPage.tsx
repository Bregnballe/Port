import React from "react";
import { ImageLarge } from "./ImageLarge";
import { TopBar } from "./TopBar";
import { ImageList } from "./ImageList";
import { Description } from "./Description";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { useParams } from "react-router-dom";

export const ProjectPage = ({ listdata }) => {
  const { projecturl, cardurl } = useParams();

  console.log(useParams());

  window.scrollTo(0, 0);
  //scroll to top of page

  const project = listdata.find((project) => project.url === projecturl);
  //find the project from the useparams url
  if (project) {
    const card = project.content.find((card) => card.url === cardurl);
    //find the card from the useparams url
    if (card) {
      return (
        <div>
          <TopBar />
          <Description project={project} />
          <ImageLarge card={card} />
          <ImageList project={project} />
        </div>
      );
    } else {
      return (
        <div>
          <TopBar />
          <Description project={project} />
          <ImagePlaceholder />
          <ImageList project={project} />
        </div>
      );
    }
  } else {
    return (
      <div>
        <TopBar />
        <h1>no project found</h1>
      </div>
    );
  }
};
