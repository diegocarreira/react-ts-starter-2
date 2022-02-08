import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom';

import App from './App';
import extendedTheme from './style/theme';

ReactDOM.render(
  <ThemeProvider theme={extendedTheme.theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
