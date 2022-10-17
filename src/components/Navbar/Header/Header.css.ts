import { style } from '@vanilla-extract/css';
import { px } from '../../../tools/css';

export const header = style({
  height: px(72),
  margin: 0,
  padding: '0 1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexShrink: 0,
});
