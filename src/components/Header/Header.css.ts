import { style } from '@vanilla-extract/css';
import { px } from '../../tools/css';

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: px(8),
});

export const text = style({
  fontSize: px(48),
});

export const icon = style({
  width: px(24),
  height: px(24),
});
