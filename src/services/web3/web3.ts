import { InjectedConnector } from '@web3-react/injected-connector';
import { providers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';

export const metamask = new InjectedConnector({
  supportedChainIds: [5],
});

export const getLibrary = (provider: providers.ExternalProvider | providers.JsonRpcFetchFunc) => {
  return new Web3Provider(provider).getSigner();
};

export type Web3Library = ReturnType<typeof getLibrary>;

export const useWeb3 = (...args: Parameters<typeof useWeb3React>) =>
  useWeb3React<Web3Library>(...args);
