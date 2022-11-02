import { style } from '@vanilla-extract/css';
import { vars } from '../../consts/theme/theme.css';

export const overlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  minHeight: '100vh',
  width: '100%',
  background: vars.colors.neutral.black,
  color: vars.colors.neutral.white,
  overflow: 'hidden',
});
