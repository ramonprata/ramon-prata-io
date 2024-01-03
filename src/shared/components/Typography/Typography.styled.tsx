'use client';

import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { IPalette, ITheme } from '../../types/ITheme';
import { cellPhoneMediaQuery, desktopMediaQuery, tabletMediaQuery } from '../../styles';

export interface ITextProps {
  tag?: keyof React.ReactHTML;
  variant?: keyof ITheme['typography'];
  color?: keyof IPalette;
  caps?: boolean;
  size?: number;
  bold?: boolean;
  align?: CSSProperties['textAlign'];
  display?: CSSProperties['display'];
  ellipsis?: boolean;
  textShadow?: string;
  numberOfLines?: number;
}
export const TextFactory = ({
  tag = 'span',
  variant = 'p',
  color = 'primaryText',
  caps = false,
  size = 0,
  align = 'left',
  display,
  ellipsis = false,
  textShadow,
  numberOfLines = 1,
}: ITextProps) => {
  // @ts-ignore
  return styled[tag](({ theme }: { theme: ITheme }) => {
    const defaultFont = theme?.typography?.['default'];
    const variantFont = theme?.typography?.[variant];
    return {
      defaultFont,
      color: theme.palette[color],
      textTransform: caps ? 'uppercase' : 'none',
      textAlign: align,
      display,
      lineClamp: numberOfLines,
      ...(variantFont && {
        // fontFamily: variantFont.fontFamily,
        // fontStyle: variantFont?.fontStyle,
        fontWeight: variantFont.fontWeight,
        ...configFont(size > 0 ? size : variantFont.fontSize, variantFont.lineHeight),
        [cellPhoneMediaQuery]: {
          ...configFont(
            Number(variantFont?.fontSize ?? 0),
            typeof variantFont?.lineHeight === 'number'
              ? Number(variantFont?.lineHeight ?? 0)
              : variantFont?.lineHeight
          ),
        },
        [tabletMediaQuery]: {
          ...configFont(
            Number(variantFont?.fontSize ?? 0) + 2,
            typeof variantFont?.lineHeight === 'number'
              ? Number(variantFont?.lineHeight ?? 0) + 2
              : variantFont?.lineHeight
          ),
        },
        [desktopMediaQuery]: {
          ...configFont(
            Number(variantFont?.fontSize ?? 0) + 4,
            typeof variantFont?.lineHeight === 'number'
              ? Number(variantFont?.lineHeight ?? 0) + 4
              : variantFont?.lineHeight
          ),
        },
      }),

      ...(ellipsis && {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }),

      ...(textShadow && {
        textShadow,
      }),
    };
  });
};

const buildSize = (size: string | number | undefined) => {
  if (size) {
    return size === 'auto' ? size : `${Number(size) / 10}rem`;
  }
  return 0;
};

const configFont = (fontSize?: number | undefined, lineHeight?: string | number | null) => ({
  fontSize: fontSize ?? 16,
  lineHeight: typeof lineHeight === 'string' ? lineHeight : buildSize(Number(lineHeight ?? 0)),
});
