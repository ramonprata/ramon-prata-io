'use client';

import styled from '@emotion/styled';
import { ITheme } from '../../../shared/types/ITheme';
import { desktopMediaQuery } from '../../../shared/styles';

export const StyledNavigation = styled.nav((props: { theme: ITheme }) => ({
  [`${desktopMediaQuery}`]: {
    display: 'initial',
  },
  display: 'none',
  '& ul': {
    listStyleType: 'none',
    margin: 0,
    padding: '0 8px',
    overflow: 'hidden',
    display: 'flex',
    '& > li': {
      padding: '0 0.8rem',
      '& *': {
        textDecoration: 'none',

        color: props.theme.palette.primaryText,
        '&:hover': {
          color: props.theme.palette.secondaryText,
        },
        '&:active': {
          '& *': {
            color: props.theme.palette.secondaryText,
          },
        },
      },
      cursor: 'pointer',
    },
  },
}));
