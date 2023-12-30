'use client';

import styled from '@emotion/styled';
import { desktopMediaQuery } from '../../shared/styles';
import { ITheme } from '../../shared/types/ITheme';

export const StyledHeader = styled.header((props: { theme: ITheme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  backgroundColor: props.theme.palette.primary,
  height: props.theme.layout.headerHeight.mobile,
  [desktopMediaQuery]: {
    height: props.theme.layout.headerHeight.desktop,
  },
  zIndex: 1,
  boxShadow: '0 1px 2px 0 rgba(0,0,0,.1)',
}));
