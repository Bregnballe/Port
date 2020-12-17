import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: left;
  color: #3c3c3c;
  text-decoration: none;
  padding: 4px;
  border-radius: 4px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:focus {
    outline: 0;
    text-decoration: none;
    box-shadow: 0px 0px 0px 4px cadetblue;
  }
`;

export const ParagraphStyled = styled.p`
  display: inline-block;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
