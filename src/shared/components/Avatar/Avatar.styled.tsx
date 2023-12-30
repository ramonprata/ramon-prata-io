'use client';

import styled from '@emotion/styled';

export interface IAvatarContainerProps {}

export const AvatarContainer = styled('div')<IAvatarContainerProps>`
  background-color: ${(props) => props.theme.palette.background};
  padding: 16px;
  & > img {
    border-radius: 50%;
    object-fit: cover;
  }
`;
