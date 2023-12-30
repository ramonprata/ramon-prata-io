'use client';

import styled from '@emotion/styled';
import { desktopMediaQuery } from '../../shared/styles';
import { ITheme } from '../../shared/types/ITheme';
import { BoxContent } from '@/src/shared/components';

export const PageContainer = styled(BoxContent)((props: { theme: ITheme }) => ({
  alignItems: 'center',
  height: '100%',
  overflowY: 'auto',
  position: 'relative',
}));

export const StyledMain = styled.main((props: { theme: ITheme }) => ({
  position: 'absolute',

  height: `calc(100% - ${props.theme.layout.headerHeight.mobile})`,
  width: props.theme.layout.mainWidth.mobile,
  bottom: 0,
  border: 'dashed 1px lime', // TODO - REMOVE BORDER
  [desktopMediaQuery]: {
    width: props.theme.layout.mainWidth.desktop,
    margin: 'auto',
    height: `calc(100% - ${props.theme.layout.headerHeight.desktop})`,
  },
}));
