'use client';

import { useSliceSetter, useSliceState } from '@/src/shared/hooks';
import { ThemeModeEnum } from '@/src/shared/types';

export const useThemeModeState = () => {
  const layoutSlice = useSliceState('themeMode');
  const setThemeMode = useSliceSetter('setThemeMode');

  const isDarkMode = layoutSlice === ThemeModeEnum.dark;
  return {
    isDarkMode,
    setThemeMode,
  };
};
