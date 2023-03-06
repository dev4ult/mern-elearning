import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { grey } from '@mui/material/colors';

function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: 'background.light', minHeight: '100vh' }}>{children}</Box>
    </ThemeProvider>
  );
}

const fontBase = {
  display: 'block',
};

const theme = createTheme({
  palette: {
    background: {
      light: grey[100],
      dark: '#0a1929',
    },
    primary: {
      light: '#757ce8',
      main: grey[900],
      dark: 'blue',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    button: {
      main: grey[900],
      contrastText: '#fff',
    },
  },
  typography: {
    sm: { ...fontBase, fontSize: 14 },
    base: { ...fontBase, fontSize: 16 },
    md: { ...fontBase, fontSize: 24 },
    lg: { ...fontBase, fontSize: 32 },
    xl: { ...fontBase, fontSize: 40 },
  },
});

export default Theme;
