import { BigNumber } from 'ethers';
import * as React from 'react';
import { Button } from '../../../components/Button/Button';
import { Header } from '../../../components/Navbar/Header/Header';
import { HeaderSide } from '../../../components/Navbar/HeaderSide/HeaderSide';
import { Logo } from '../../../components/Navbar/Logo/Logo';
import { NavbarItem } from '../../../components/Navbar/NavbarItems/NavbarItem/NavbarItem';
import { navbarItems } from '../../../components/Navbar/NavbarItems/NavbarItems';
import { useToken } from '../../../services/contracts/DTPToken';
import { useWeb3 } from '../../../services/web3/web3';
import { Wallet } from '../Wallet/Wallet';

export const Navbar = () => {
  const { mintToken, balanceOf, approve } = useToken();
  const { account } = useWeb3();

  console.log(balanceOf(account));

  const mintTokenFunc = async () => {
    try {
      return await mintToken(BigNumber.from(1000000000000));
    } catch (err) {
      console.log(err);
    }
  };
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
      <HeaderSide side={'right'}>
        <Button onClick={approve}>Approve</Button>
        <Button onClick={mintTokenFunc}>Mint</Button>
        <Wallet />
      </HeaderSide>
    </Header>
  );
};
