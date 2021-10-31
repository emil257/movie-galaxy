import { createTheme } from '@mui/material/styles';

const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#ef5350',
    },
    secondary: {
      main: '#b0bec5',
    },
  },
};

export const theme = createTheme(themeOptions);

