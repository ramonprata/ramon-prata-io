import { createStore } from 'zustand/vanilla';
import { immer } from 'zustand/middleware/immer';
import { useStore as zustandUseStore } from 'zustand';

import layoutSlice, {
  ILayoutInitialState,
  ILayoutActions,
} from '../../layout/sliceStore/layoutSlice';

export type TGlobalInitialState = ILayoutInitialState;

export type TGlobalActions = ILayoutActions;

export type Store = ReturnType<(typeof slices)['layoutSlice']>;

export type StateCallback = (state: TGlobalInitialState) => TGlobalInitialState;
export type SetCallback<T> = (set: (state: T) => void) => void;

export const slices = {
  layoutSlice: layoutSlice.slice,
};

export const vanillaStore = createStore(
  immer<Store>((set) => ({
    ...layoutSlice.slice(set as SetCallback<ILayoutInitialState>),
  }))
);

export const useStore = zustandUseStore;
