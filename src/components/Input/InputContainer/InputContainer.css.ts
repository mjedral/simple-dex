import { style } from '@vanilla-extract/css';
import { vars } from '../../../consts/theme/theme.css';
import { px } from '../../../tools/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: px(435),
  height: px(135),
  padding: px(16),
  border: `2px solid ${vars.colors.neutral.gray1}`,
  borderRadius: vars.rounds.input,
  marginTop: px(25),
});
