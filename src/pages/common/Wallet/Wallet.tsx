import React from 'react';
import { Button } from '../../../components/Button/Button';
import { useWallet } from '../../../services/web3/wallet';

export const Wallet = () => {
  const { connectWallet, account } = useWallet();

  console.log(account);

  const callMetamask = async () => {
    await connectWallet();
  };

  return (
    <Button onClick={callMetamask} variant='wallet'>
      Connect to a wallet
    </Button>
  );
};
