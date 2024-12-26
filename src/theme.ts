import { createTheme, responsiveFontSizes } from '@mui/material';

let themeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#ffffff',
      main: '#f0f0f0',
      dark: '#b0b0b0',
      contrastText: '#333333'
    },
    secondary: {
      main: '#b0b0b0',
      light: '#a0a0a0',
    },
  },
  typography: {
    fontFamily: 'Segoe UI',
  },
});

let themeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#252525',
      main: '#191919',
      dark: '#111111',
      contrastText: '#f0f0f0'
    },
    secondary: {
      main: '#353535',
      light: '#181818',
    },
  },
  typography: {
    fontFamily: 'Segoe UI',
  },
});

themeLight = responsiveFontSizes(themeLight);
themeDark = responsiveFontSizes(themeDark);

export default { themeLight, themeDark };


