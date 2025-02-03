import { createTheme, responsiveFontSizes } from '@mui/material';

let themeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#E4ECF1',
      main: '#CAD9E3',
      dark: '#AFC5D5',
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
      contrastText: '#EDFDFD'
    },
    secondary: {
      main: '#10A8A8',
      light: '#13CDCD',
      contrastText: '#E3F2FB'
    },

  },
  typography: {
    fontFamily: 'Segoe UI',
  },
});

themeLight = responsiveFontSizes(themeLight);
themeDark = responsiveFontSizes(themeDark);

export default { themeLight, themeDark };


