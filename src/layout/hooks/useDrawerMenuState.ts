'use client';

import { useSliceSetter, useSliceState } from '@/src/shared/hooks';
import { ILayoutInitialState, ILayoutActions } from '../sliceStore/layoutSlice';

export const useDrawerMenuState = () => {
  const isDrawerMenuOpened = useSliceState<ILayoutInitialState, 'isDrawerMenuOpened'>(
    'isDrawerMenuOpened'
  );
  const setDrawerMenuOpened = useSliceSetter<ILayoutActions, 'setDrawerMenuOpened'>(
    'setDrawerMenuOpened'
  );

  return {
    isDrawerMenuOpened,
    setDrawerMenuOpened,
  };
};
