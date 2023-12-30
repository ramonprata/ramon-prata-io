'use client';

import styled from '@emotion/styled';

export const sizeByVariant = {
  small: 48,
  medium: 72,
  large: 180,
};

export interface IAvatarContainerProps {
  variant?: keyof typeof sizeByVariant;
}

export const AvatarContainer = styled('div')<IAvatarContainerProps>`
  background-color: ${(props) => props.theme.palette.background};
  overflow: hidden;
  border-radius: 50%;
  height: ${(props) => sizeByVariant[props.variant ?? 'small']}px;
  & > img {
    object-fit: cover;
  }
`;
