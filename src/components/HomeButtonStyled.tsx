import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: left;
  color: #3c3c3c;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const ParagraphStyled = styled.p`
  display: inline-block;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
