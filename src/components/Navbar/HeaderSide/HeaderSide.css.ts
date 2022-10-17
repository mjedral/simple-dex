import { recipe } from '@vanilla-extract/recipes';
import { px } from '../../../tools/css';

export const headerSide = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
  },
  variants: {
    side: {
      left: {
        justifyContent: 'left',
      },
      right: {
        justifyContent: 'right',
      },
    },
  },
});

export const wrap = recipe({
  variants: {
    side: {
      left: {
        ':first-of-type': {
          marginRight: px(56),
        },
        ':last-of-type': {
          marginRight: '0',
        },
      },
      right: {
        marginLeft: px(8),
        marginRight: px(8),
        ':first-of-type': {
          marginLeft: '0',
        },
        ':last-of-type': {
          marginRight: '0',
        },
      },
    },
  },
});
