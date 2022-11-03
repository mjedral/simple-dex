import { AddEthereumChainOptions } from './Metamask.types';

const hex = (value: number | string) => `0x${Number(value).toString(16)}`;

export const getChainId = async () => {
  const hexStr =
    window.ethereum?.request && (await window.ethereum.request({ method: 'eth_chainId' }));
  if (hexStr) {
    return parseInt(hexStr);
  }
};

export const netVersion = async () => {
  if (window.ethereum) {
    const userChainId =
      window.ethereum?.request &&
      (await window.ethereum.request({
        method: 'net_version',
      }));

    return Number(userChainId);
  }
};

export const addEthereumChain = ({ chainId, ...other }: AddEthereumChainOptions) => {
  return (
    window.ethereum?.request &&
    window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: hex(chainId),
          ...other,
        },
      ],
    })
  );
};

export const switchEthereumChain = (chainId: string | number) => {
  return (
    window.ethereum?.request &&
    window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: hex(chainId) }],
    })
  );
};
