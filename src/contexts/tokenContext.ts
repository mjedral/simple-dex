import { useToken } from '../services/contracts/DTPToken';
import { contextWrapper } from './buildContext';

export type TokensContextType = ReturnType<typeof useToken>;

const tokensStub: TokensContextType = {
  token: undefined,
  mintToken: () => Promise.resolve(undefined),
  approve: () => Promise.resolve(undefined),
  balanceOf: () => Promise.resolve(undefined),
  allowance: () => Promise.resolve(undefined),
};

export const TokensCtx = contextWrapper(tokensStub, useToken);
