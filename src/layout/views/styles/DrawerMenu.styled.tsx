'use client';

import styled from '@emotion/styled';
import { cellPhoneMediaQuery, desktopMediaQuery } from '../../../shared/styles';
import { ITheme } from '../../../shared/types';
import { BoxContent } from '@/src/shared/components';

export interface IDrawerProps {
  showMenu?: boolean;
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
}));

export const Content = styled.div(({ theme }: IDrawerProps) => ({
  [`${cellPhoneMediaQuery}`]: {
    paddingTop: theme?.layout.headerHeight.mobile,
  },
  '& ul li': {
    padding: '8px 0',
  },
}));

export const CloseIconContainer = styled(BoxContent)(({ theme }: IDrawerProps) => ({}));
