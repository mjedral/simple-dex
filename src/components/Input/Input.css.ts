import { style } from '@vanilla-extract/css';
import { vars } from '../../consts/theme/theme.css';
import { px } from '../../tools/css';

export const input = style({
  outline: 'none',
  backgroundColor: vars.colors.neutral.black,
  color: '#6A84A0',
  padding: px(8),
  width: px(240),
  fontSize: px(34),
  borderRadius: vars.rounds.input,
  border: 'none',
  marginRight: px(10),
  '::placeholder': {
    color: '#6A84A0',
  },
});

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: px(6),
  marginBottom: px(6),
});

export const maxButton = style({
  marginRight: px(10),
  height: px(40),
  width: px(60),
});
