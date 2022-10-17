import * as React from 'react';
import { HTMLAttributes } from 'react';

export const Page: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};

Page.displayName = 'Page';
