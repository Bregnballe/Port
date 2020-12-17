import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  color: #3c3c3c;
  text-decoration: none;

  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:focus {
    outline: none;
    text-decoration: none;
    
    img {
      box-shadow: 0px 0px 0px 4px cadetblue;
    }
  }


`;

export const FigureStyled = styled.figure`
  margin: 0px;
  padding: 8px 8px 12px 8px;
  border-radius: 12px;
  cursor: pointer;
  break-inside: avoid-column;

  &:focus {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
`;

export const CaptionStyled = styled.figcaption`
  font-weight: 600;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
