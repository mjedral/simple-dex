import * as React from 'react';

export type Side = 'left' | 'right';

export type HeaderSideProps = Omit<React.HTMLAttributes<HTMLElement>, 'className'> & {
  side: Side;
};
