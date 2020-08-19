import React from "react";
import { HomeButton } from "./HomeButton";
import { TopBarStyled } from "./TopBarStyled";

export const TopBar = () => {
  return (
    <TopBarStyled>
      <HomeButton />
    </TopBarStyled>
  );
};
