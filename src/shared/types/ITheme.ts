export interface IPalette {
  transparent: string;
  background: string;
  foreground: string;

  primary: string;
  secondary: string;

  primaryText: string;
  secondaryText: string;
}

export interface ITypography {
  fontWeight: number;
  fontSize: number | string;
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
