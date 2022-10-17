import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { navItem } from './NavbarItem.css';
import { NavbarItemProps } from './NavbarItem.types';

export const NavbarItem = ({ children, to }: NavbarItemProps) => {
  return (
    <NavLink to={to} className={navItem}>
      {children}
    </NavLink>
  );
};
