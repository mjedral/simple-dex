import React from 'react';
import { header } from './Header.css';
import { HeaderProps } from './Header.types';

export const Header: React.FC<HeaderProps> = ({ children, ...props }) => {
  return (
    <header {...props} className={header}>
      {children}
    </header>
  );
};

Header.displayName = 'Header';
