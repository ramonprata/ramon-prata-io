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
}));
