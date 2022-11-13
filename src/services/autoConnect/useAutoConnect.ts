import { metamask, useWeb3 } from '../web3/web3';
import { BigNumber } from 'ethers';
import { useEffect } from 'react';

const hasSupportedNetwork = () => {
  if (!metamask.supportedChainIds) {
    // all networks are supported
    return true;
  }

  const getChainId = () => {
    if (window.ethereum?.request) {
      window.ethereum?.request({ method: 'eth_chainId' });
    }
  };

  console.log(getChainId());
  console.log(window.ethereum?.request && window.ethereum?.request({ method: 'eth_chainId' }));

  // if has metamask
  if (window.ethereum && window.ethereum?.request) {
    const supportedChainIds = metamask.supportedChainIds.map((id) => BigNumber.from(id));
    const chainId = BigNumber.from(5);
    // check if selected network is in supported list
    return supportedChainIds.some((supported) => supported.eq(chainId));
  } else {
    return false;
  }
};

export const useAutoConnect = () => {
  const { active, activate } = useWeb3();

  useEffect(() => {
    if (!active) {
      metamask.isAuthorized().then((isAuthorized) => {
        if (isAuthorized && hasSupportedNetwork()) {
          activate(metamask);
        }
      });
    }
  }, [activate, active]);
};
