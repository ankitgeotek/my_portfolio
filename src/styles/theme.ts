import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Define your custom colors for data science theme
const colors = {
  primary: {
    main: '#1976d2', // Blue - represents trust and professionalism
    light: '#42a5f5',
    dark: '#1565c0',
  },
  secondary: {
    main: '#dc004e', // Deep pink - for highlights and CTAs
    light: '#ff5983',
    dark: '#9a0036',
  },
  success: {
    main: '#2e7d32', // Green for positive metrics
  },
  warning: {
    main: '#f57c00', // Orange for warnings
  },
  error: {
    main: '#d32f2f', // Red for errors
  },
};

// Create base theme
let theme = createTheme({
  palette: {
    mode: 'light',
    ...colors,
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 600,
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(25, 118, 210, 0.2)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 6px 12px rgba(25, 118, 210, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
          },
          transition: 'box-shadow 0.2s ease-in-out',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          color: '#212121',
        },
      },
    },
  },
});

// Create dark theme
const darkThemeBase = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64b5f6',
      light: '#90caf9',
      dark: '#42a5f5',
      contrastText: '#000000',
    },
    secondary: {
      main: '#f06292',
      light: '#f8bbd9',
      dark: '#e91e63',
      contrastText: '#000000',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
    action: {
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.12)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
  typography: {
    ...theme.typography,
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 600,
          padding: '10px 24px',
          boxShadow: 'none',
        },
        containedPrimary: {
          backgroundColor: '#64b5f6',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#42a5f5',
            boxShadow: '0 6px 12px rgba(100, 181, 246, 0.4)',
          },
        },
        outlinedPrimary: {
          borderColor: '#64b5f6',
          color: '#64b5f6',
          '&:hover': {
            backgroundColor: 'rgba(100, 181, 246, 0.08)',
            borderColor: '#90caf9',
          },
        },
        outlinedSecondary: {
          borderColor: '#f06292',
          color: '#f06292',
          '&:hover': {
            backgroundColor: 'rgba(240, 98, 146, 0.08)',
            borderColor: '#f8bbd9',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: '#1e1e1e',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
            borderColor: 'rgba(255, 255, 255, 0.12)',
          },
          transition: 'box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          backgroundColor: 'rgba(100, 181, 246, 0.15)',
          color: '#90caf9',
          border: '1px solid rgba(100, 181, 246, 0.3)',
          '&:hover': {
            backgroundColor: 'rgba(100, 181, 246, 0.25)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(18, 18, 18, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
          color: '#ffffff',
        },
      },
    },
  },
});

// Apply responsive font sizes
export const lightTheme = responsiveFontSizes(theme);
export const darkTheme = responsiveFontSizes(darkThemeBase);

export default lightTheme;