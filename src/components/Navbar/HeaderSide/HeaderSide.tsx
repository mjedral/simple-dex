import React from 'react';
import { headerSide, wrap } from './HeaderSide.css';
import { HeaderSideProps } from './HeaderSide.types';

const ItemWrapper: React.FC<HeaderSideProps> = ({ children, side, ...props }) => (
  <div {...props} className={wrap({ side })}>
    {children}
  </div>
);

export const HeaderSide: React.FC<HeaderSideProps> = ({ children, side, ...props }) => (
  <div {...props} className={headerSide({ side })}>
    {React.Children.map(children, (child) => (
      <ItemWrapper side={side}>{child}</ItemWrapper>
    ))}
  </div>
);

HeaderSide.displayName = 'HeaderSide';
