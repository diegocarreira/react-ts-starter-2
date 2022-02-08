import { red, blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Theme base for this app
const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      contrastText: '#FFF',
      dark: blue[900],
    },
    secondary: {
      main: '#FFF',
      contrastText: blue[800],
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

const extendedTheme = {
  theme,
  variables: {
    testColor: '#ff6530',
    drawerWidth: '200px',
  },
};

export default extendedTheme;
