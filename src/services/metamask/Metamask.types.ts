export type AddEthereumChainOptions = {
  chainId: number | string;
  rpcUrls: string[];
  chainName: string;
  iconUrls: string[];
  nativeCurrency: { name: string; symbol: string; decimals: 18 };
};
