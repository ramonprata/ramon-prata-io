export interface IPalette {
  transparent: string;
  background: string;
  foreground: string;

  primary: string;
  secondary: string;

  primaryText: string;
  secondaryText: string;
  textShadow: string;
}

export interface ITypography {
  fontWeight: number;
  fontSize: number;
  lineHeight: number | string;
}

export interface ITheme {
  palette: IPalette;
  typography: {
    [key: string]: ITypography;
  };
  layout: {
    headerHeight: {
      desktop: string;
      mobile: string;
    };
    mainWidth: {
      desktop: string | number;
      mobile: string | number;
    };
  };
}

export enum ThemeModeEnum {
  dark = 'dark',
  light = 'light',
}
