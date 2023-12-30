'use client';

import styled from '@emotion/styled';
import { desktopMediaQuery } from '../../shared/styles';
import { ITheme } from '../../shared/types/ITheme';
import { BoxContent } from '@/src/shared/components';

export const PageContainer = styled(BoxContent)((props: { theme: ITheme }) => ({
  alignItems: 'center',
  position: 'relative',
}));

export const StyledMain = styled.main((props: { theme: ITheme }) => ({
  position: 'absolute',
  overflowY: 'auto',
  height: '100vh',

  width: props.theme.layout.mainWidth.mobile,

  [desktopMediaQuery]: {
    width: props.theme.layout.mainWidth.desktop,
    margin: 'auto',
  },
}));
