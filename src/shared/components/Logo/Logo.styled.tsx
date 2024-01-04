'use client';

import styled from '@emotion/styled';
import { Typography } from '..';
import { ITheme } from '../../types';

export const LogoText = styled(Typography)((props: { theme: ITheme }) => ({
  textShadow: props.theme.palette.textShadow,
  letterSpacing: 2,
}));
