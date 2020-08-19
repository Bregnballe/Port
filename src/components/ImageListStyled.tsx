import styled from "styled-components";

export const ImageListStyled = styled.ul`
  column-width: 320px;
  column-gap: 0px;
  margin: 64px 8px 0px 8px;
  list-style: none;
  padding: 0px;

  @media only screen and (max-width: 767px) {
    column-width: 240px;
    font-size: 14px;
  }

  @media only screen and (max-width: 500px) {
    column-width: 160px;
  }
`;
