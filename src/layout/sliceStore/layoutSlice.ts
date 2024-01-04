import { ThemeModeEnum } from '@/src/shared/types';
import { SetCallback } from '@/src/shared/store';

export interface ILayoutInitialState {
  themeMode: ThemeModeEnum;
  isDrawerMenuOpened: boolean;
}

export const initialState: ILayoutInitialState = {
  themeMode: ThemeModeEnum.dark,
  isDrawerMenuOpened: false,
};

const actions = (set: SetCallback<ILayoutInitialState>) => ({
  setThemeMode: (themeMode: ILayoutInitialState['themeMode']) =>
    set((state) => {
      state.themeMode = themeMode;
    }),
  setDrawerMenuOpened: (opened: boolean) =>
    set((state) => {
      state.isDrawerMenuOpened = opened;
    }),
});

export const slice = (set: SetCallback<ILayoutInitialState>) => ({
  ...initialState,
  ...actions(set),
});

export type ILayoutActions = ReturnType<typeof actions>;

const sliceState = {
  slice,
  initialState,
};

export default sliceState;
