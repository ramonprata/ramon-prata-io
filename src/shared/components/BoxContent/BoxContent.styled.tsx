'use client';

import styled from '@emotion/styled';
import { CSSProperties } from 'react';
import { ITheme } from '../../types/ITheme';

export interface IBoxContainerProps {
  pad?: string;
  marg?: string;
  w?: number | string;
  h?: number | string;
  bg?: keyof ITheme['palette'];
  flex?: boolean | number;
  center?: boolean;
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  direction?: 'row' | 'column';
  radius?: number | string;
  fixed?: boolean;
  absolute?: boolean;
  top?: boolean;
  bottom?: boolean;
  z?: number;
}

const ROOT_FONT_SIZE = 10;

export const BoxContainer = styled.div(
  ({
    theme,
    pad = '0 0 0 0',
    marg = '0 0 0 0',
    w = '100%',
    h = '100%',
    bg = 'transparent',
    radius = 0,
    flex,
    direction = 'row',
    center,
    justify,
    align,
    fixed,
    absolute,
    top,
    bottom,
    z,
  }: IBoxContainerProps & { theme: ITheme }) => {
    const [width, height] = buildSize(w, h);
    return {
      width,
      height,
      padding: buildSpace(pad),
      margin: buildSpace(marg),
      backgroundColor: theme?.palette?.[bg] ?? 'transparent',
      borderRadius: typeof radius === 'string' ? `${radius}%` : radius,
      boxSizing: 'border-box',
      ...(flex && {
        display: 'flex',
        flex: typeof flex === 'number' ? flex : 1,
        flexDirection: direction,
        alignItems: align ? align : center ? 'center' : 'flex-start',
        justifyContent: justify ? justify : center ? 'center' : 'flex-start',
      }),
      ...((fixed || absolute) && {
        position: fixed ? 'fixed' : 'absolute',
        zIndex: z ? z : 0,
        ...(top && {
          top: 0,
          left: 0,
        }),
        ...(bottom && {
          bottom: 0,
          left: 0,
        }),
      }),
    };
  }
);

export const buildSize = (w: IBoxContainerProps['w'], h: IBoxContainerProps['h']) => {
  const sizes = [w, h];
  return sizes.map((s) => {
    if (s === 'fit') {
      return 'fit-content';
    }
    if (s !== 'auto') {
      if (typeof s === 'string') {
        if (s.includes('%')) {
          return s;
        }
        if (s.includes('px')) {
          const newS = s.split('px');
          const numberMesure = Number(newS[0]) / ROOT_FONT_SIZE;
          return `${numberMesure}rem`;
        }

        return '100%';
      }
      if (typeof s === 'number') {
        return `${s}%`;
      }
    }
    return s;
  });
};

export const buildSpace = (spacings: string) => {
  const splitedSpaces = spacings.split(' ');
  const spacingns = splitedSpaces
    .map((s) => (s === 'auto' ? s : `${Number(s) / ROOT_FONT_SIZE}rem`))
    .join(' ');
  return spacingns;
};
