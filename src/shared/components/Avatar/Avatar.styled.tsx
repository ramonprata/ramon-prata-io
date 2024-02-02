"use client";

import styled from "@emotion/styled";

export const sizeByVariant = {
  small: 48,
  medium: 72,
  large: 180,
};

export interface IAvatarContainerProps {
  variant?: keyof typeof sizeByVariant;
}

export const AvatarContainer = styled("div")<IAvatarContainerProps>`
  background-color: #ddd;
  filter: brightness(85%);
  overflow: hidden;
  border-radius: 50%;
  height: ${(props) => sizeByVariant[props.variant ?? "small"]}px;
  width: ${(props) => sizeByVariant[props.variant ?? "small"]}px;
  & > img {
    object-fit: cover;
  }
`;
