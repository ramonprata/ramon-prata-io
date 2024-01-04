'use client';

import styled from '@emotion/styled';
import { cellPhoneMediaQuery, desktopMediaQuery } from '../../../shared/styles';
import { ITheme } from '../../../shared/types';
import Link from 'next/link';

interface ICommonProps {
  theme: ITheme;
}

export const StyledNav = styled.nav(({ theme }: ICommonProps) => ({
  '& ul': {
    listStyle: 'none',
  },
}));
export const StyledLink = styled(Link)(({ theme }: ICommonProps) => ({
  textDecoration: 'none',
}));
