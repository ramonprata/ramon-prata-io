'use client';

import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from '@emotion/react';
import { getTheme } from '@/src/shared/styles/theme';
import { useThemeModeState } from '@/src/layout';

export const ProvidersWrapper = (props: PropsWithChildren) => {
  const { isDarkMode } = useThemeModeState();
  return (
    <>
      <ThemeProvider theme={getTheme(isDarkMode)}>{props.children}</ThemeProvider>
    </>
  );
};
