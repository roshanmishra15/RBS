
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#123B3A',
      contrastText: '#FFFFFF',
    },

    secondary: {
      main: '#20B8A6',
      contrastText: '#062F2A',
    },

    background: {
      default: '#F4F7F6',
      paper: '#FFFFFF',
    },

    text: {
      primary: '#243432',
      secondary: '#64748B',
    },

    success: {
      main: '#15803D',
    },

    error: {
      main: '#DC2626',
    },

    warning: {
      main: '#D97706',
    },

    divider: '#E2E8F0',
  },

  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif',

    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },

    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '9px 16px',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
