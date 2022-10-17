import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  colors: {
    neutral: {
      black: '#000000',
      white: '#FFFFFF',
      gray1: '#101419',
      gray2: '#181E25',
      gray3: '#8FA2B7',
    },
    primary: {
      blue: '#3D8DFF',
    },
    gradient: 'linear-gradient(#8AD4EC, #EF96FF , #FF56A9 , #FFAA6C)',
  },
  fontFamily: {
    default: '"Archivo", sans-serif',
  },
  fontSize: {
    xLarge: '1.125rem',
    large: '1rem',
    medium: '0.9075rem',
    regular: '0.875rem',
    small: '0.75rem',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  rounds: {
    button: '40px',
    input: '16px',
    modal: '24px',
  },
});
