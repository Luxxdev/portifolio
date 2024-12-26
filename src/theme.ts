import { createTheme, responsiveFontSizes } from '@mui/material';

let themeLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
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
      main: '#232323',
    },
    secondary: {
      main: '#4f8e3e',
    },
  },
  typography: {
    fontFamily: 'Segoe UI',
  },
});

themeLight = responsiveFontSizes(themeLight);
themeDark = responsiveFontSizes(themeDark);

export default { themeLight, themeDark };


