import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../consts/theme/theme.css';
import { px } from '../../tools/css';

export const button = recipe({
  base: {
    borderStyle: 'none',
    borderRadius: vars.rounds.button,
    cursor: 'pointer',
    fontFamily: vars.fontFamily.default,
    lineHeight: px(20),
    transition: '.2s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: vars.colors.neutral.gray2,
  },
  variants: {
    variant: {
      wallet: {
        padding: px(10),
        fontSize: vars.fontSize.regular,
        color: vars.colors.primary.blue,
      },
      token: {
        borderRadius: px(16),
        border: `1px solid #101419`,
        padding: px(20),
        width: px(110),
        color: vars.colors.neutral.white,
        backgroundColor: vars.colors.neutral.black,
      },
      swap: {
        width: '100%',
        padding: px(16),
        backgroundColor: '#101419',
        color: '#384657',
        fontSize: vars.fontSize.regular,
        marginTop: px(25),
      },
      max: {
        padding: px(10),
        borderRadius: px(16),
        backgroundColor: vars.colors.neutral.white,
        color: vars.colors.primary.blue,
      },
    },
  },
});
