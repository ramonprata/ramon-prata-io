import { IPalette, ITheme } from '../types/ITheme';

const darkTheme: IPalette = {
  transparent: 'transparent',
  background: '#06050a',
  foreground: '#f5f3f7',

  primary: '#1f1b37',
  secondary: '#193c47',

  primaryText: '#f5f3f7',
  secondaryText: '#be51c8',
};

const lightTheme: IPalette = {
  transparent: 'transparent',
  background: '#f5f3f7',
  foreground: '#06050a',

  primary: '#fff',
  secondary: '#eef9fd',

  primaryText: '#06050a',
  secondaryText: '#be51c8',
};

export const getTheme = (darkMode = false): ITheme => {
  return {
    palette: darkMode ? darkTheme : lightTheme,
    layout: {
      headerHeight: {
        desktop: '64px',
        mobile: '58px',
      },
      mainWidth: {
        desktop: '60%',
        mobile: '100%',
      },
    },
    typography: {
      h1: {
        fontSize: '3.2rem',
        fontWeight: 700,
        lineHeight: 60,
      },
      h2: {
        fontSize: '2.4rem',
        fontWeight: 700,
        lineHeight: 60,
      },
      caption: {
        fontSize: '1.4rem',
        fontWeight: 700,
        lineHeight: 16,
      },
      link: {
        fontSize: '1.6rem',
        fontWeight: 500,
        lineHeight: 24,
      },
      p: {
        fontSize: '1.6rem',
        fontWeight: 400,
        lineHeight: 24,
      },
    },
  };
};
