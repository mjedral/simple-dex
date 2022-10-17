import { style } from '@vanilla-extract/css';
import { vars } from '../../../../consts/theme/theme.css';
import { px } from '../../../../tools/css';

export const navItem = style({
  height: '100%',
  marginLeft: px(50),
  textDecoration: 'none',
  color: vars.colors.neutral.gray3,
  display: 'block',
  position: 'relative',
  padding: `${px(18)} ${px(16)}`,
  ':hover': {
    color: vars.colors.gradient,
  },
});
