import { style } from '@vanilla-extract/css';
import { px } from '../../../tools/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: px(600),
  width: px(470),
});
