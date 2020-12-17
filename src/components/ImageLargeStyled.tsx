import styled from "styled-components";

export const ContainerStyled = styled.div`
  margin: 48px 8px 0px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

`;

export const FigureStyled = styled.figure`
  display: table;
  margin: 0px;
  padding: 8px;
  border-radius: 12px;
`;

export const CaptionStyled = styled.figcaption`
  margin: 0px 0px 0px 8px;
  display: table-caption;
  caption-side: bottom;
`;

export const ImageStyled = styled.img`
  display: block;
  max-width: 100%;
  max-height: 80vh;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
`;
