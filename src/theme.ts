import { createTheme, responsiveFontSizes } from '@mui/material';

let themeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#DBEEFA',
      main: '#CFE6F4',
      dark: '#C5DBE6',
      contrastText: '#152129'
    },
    secondary: {
      main: '#10A8A8',
      light: '#13CDCD',
      contrastText: '#074B4B'

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
      light: '#152129',
      main: '#0E161B',
      dark: '#010C13',
      contrastText: '#DAFBFB'
    },
    secondary: {
      main: '#10A8A8',
      light: '#13CDCD',
      contrastText: '#B6F7F7'
    },

  },
  typography: {
    fontFamily: 'Segoe UI',
  },
});

themeLight = responsiveFontSizes(themeLight);
themeDark = responsiveFontSizes(themeDark);

export default { themeLight, themeDark };


