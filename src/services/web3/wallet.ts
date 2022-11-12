import { useCallback } from 'react';
import { metamask, useWeb3 } from './web3';

export const useWallet = () => {
  const { activate, account, library } = useWeb3();

  const connectWallet = useCallback(() => {
    if (metamask === undefined) throw new Error('Undefined connector');
    return activate(metamask, undefined, true);
  }, [activate]);

  return { connectWallet, account, library, activate };
};
