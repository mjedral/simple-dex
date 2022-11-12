import React from 'react';
import { Button } from '../../../components/Button/Button';
import { useWallet } from '../../../services/web3/wallet';
import { addr } from '../../../tools/addr';

export const Wallet = () => {
  const { connectWallet, account } = useWallet();

  const callMetamask = async () => {
    await connectWallet();
  };

  return (
    <Button onClick={callMetamask} variant='wallet'>
      {account ? addr(account) : 'Connect to a wallet'}
    </Button>
  );
};
