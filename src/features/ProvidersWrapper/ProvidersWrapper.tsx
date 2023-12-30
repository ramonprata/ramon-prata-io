'use client';

import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from '@emotion/react';
import { getTheme } from '@/src/shared/styles/theme';

export const ProvidersWrapper = (props: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider theme={getTheme(true)}>{props.children}</ThemeProvider>
    </>
  );
};
