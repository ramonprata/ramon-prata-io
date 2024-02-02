"use client";

import React from "react";
import { IconContainer, StyledIcon } from "./Icon.styled";

export interface IIconProps {
  iconName: string;
  onlyMobile?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Icon = ({ iconName, onlyMobile, onClick }: IIconProps) => {
  return (
    <IconContainer onClick={(e) => onClick?.(e)} onlyMobile={!!onlyMobile}>
      <StyledIcon className={"material-symbols-outlined"}>
        {iconName}
      </StyledIcon>
    </IconContainer>
  );
};

export default Icon;
