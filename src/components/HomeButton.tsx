import React from "react";
import { LinkStyled, ParagraphStyled } from "./HomeButtonStyled";

export const HomeButton = () => {
  return (
    <LinkStyled to="/">
      <i className="material-icons">arrow_back</i>
      <ParagraphStyled>Back</ParagraphStyled>
    </LinkStyled>
  );
};
