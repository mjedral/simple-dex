import { recipe } from '@vanilla-extract/recipes';
import { px } from '../../../tools/css';

export const wrap = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    direction: {
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
    },
    justify: {
      center: {
        justifyContent: 'center',
      },
    },
  },
});

const getHorizontal = (n: number) => ({
  paddingLeft: px(n),
  paddingRight: px(n),
  ':first-of-type': {
    paddingLeft: 0,
  },
  ':last-of-type': {
    paddingRight: 0,
  },
});

const getVertical = (n: number) => ({
  paddingTop: px(n),
  paddingBottom: px(n),
  ':first-of-type': {
    paddingTop: 0,
  },
  ':last-of-type': {
    paddingBottom: 0,
  },
});

export const wrapContent = recipe({
  variants: {
    horizontal: {
      none: getHorizontal(0),
      is_2: getHorizontal(2),
      is_4: getHorizontal(4),
      is_8: getHorizontal(8),
      is_12: getHorizontal(12),
    },
    vertical: {
      none: getVertical(0),
      is_2: getVertical(2),
      is_4: getVertical(4),
      is_8: getVertical(8),
      is_12: getVertical(12),
    },
  },
});
