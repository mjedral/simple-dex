import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  fontFamily: 'Inter, sans-serif',
  margin: 0,
  padding: 0,
});

globalStyle('.page', {
  overflow: 'hidden',
});
