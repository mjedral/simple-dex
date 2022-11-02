import React from 'react';
import { wrap } from './Wrap.css';
import { WrapProps } from './Wrap.types';

// const useContent = (
//   direction: Direction | undefined,
//   paddingBetween: Padding,
// ) =>
//   useMemo(() => {
//       switch (direction) {
//           case 'column':
//               return wrapContent({ vertical: paddingBetween });
//           case 'row':
//           default:
//               return wrapContent({ horizontal: paddingBetween });
//       }
//   }, [direction, paddingBetween]);

export const Wrap: React.FC<WrapProps> = ({ direction, align, justify, children }) => {
  return <div className={wrap({ direction, align, justify })}>{children}</div>;
};
