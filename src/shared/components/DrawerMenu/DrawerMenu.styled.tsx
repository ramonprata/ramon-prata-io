'use client';

import styled from '@emotion/styled';
import { cellPhoneMediaQuery, desktopMediaQuery } from '../../styles';
import { ITheme } from '../../types';

export interface IDrawerProps {
  showMenu: boolean;
  theme?: ITheme;
}
export const Drawer = styled.div(({ showMenu, theme }: IDrawerProps) => ({
  position: 'fixed',
  height: '100vh',
  background: theme?.palette.primary,
  top: 0,
  left: showMenu ? 0 : '-100%',
  width: '60%',
  transition: 'all 0.4s',
  [`${desktopMediaQuery}`]: {
    display: 'none',
  },
  '& > nav': {
    [`${cellPhoneMediaQuery}`]: {
      paddingTop: theme?.layout.headerHeight.mobile,
    },
  },
}));
