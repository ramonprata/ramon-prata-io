'use client';

import styled from '@emotion/styled';

const sizeByVariant = {
  small: '48px',
  medium: '72px',
  large: '180px',
};

export interface IAvatarContainerProps {
  variant?: keyof typeof sizeByVariant;
}

export const AvatarContainer = styled('div')<IAvatarContainerProps>`
  background-color: ${(props) => props.theme.palette.background};
  border-radius: 50%;
  overflow: hidden;
  width: ${(props) => sizeByVariant[props.variant ?? 'small']};
  height: ${(props) => sizeByVariant[props.variant ?? 'small']};
`;
