import * as React from 'react';
import { Header } from '../../../components/Navbar/Header/Header';
import { HeaderSide } from '../../../components/Navbar/HeaderSide/HeaderSide';
import { Logo } from '../../../components/Navbar/Logo/Logo';
import { NavbarItem } from '../../../components/Navbar/NavbarItems/NavbarItem/NavbarItem';
import { navbarItems } from '../../../components/Navbar/NavbarItems/NavbarItems';

export const Navbar = () => {
  return (
    <Header>
      <HeaderSide side={'left'}>
        <Logo />
        {navbarItems.map((item, i) => (
          <NavbarItem to={item.link} key={i}>
            {item.text}
          </NavbarItem>
        ))}
      </HeaderSide>
    </Header>
  );
};
