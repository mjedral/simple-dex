import { BigNumber, ethers } from 'ethers';
import { useCallback, useMemo } from 'react';
import { DTP_Token } from '../../../../../simple-dex-contracts/contracts/typechain-types/contracts/DTP_Token/DTP_Token';
import { DTP_Token__factory } from '../../../../../simple-dex-contracts/contracts/typechain-types/factories/contracts/DTP_Token/DTP_Token__factory';
import { DTPTokenContractAddress } from '../../build/config';
import { useWallet } from '../web3/wallet';
import { useWeb3, Web3Library } from '../web3/web3';

const getTokenContract = (library: Web3Library | undefined): DTP_Token | undefined => {
  if (library) {
    return DTP_Token__factory.connect(DTPTokenContractAddress, library);
  }
};

const useApprove = (token: DTP_Token | undefined) => {
  if (token) {
    return token.approve(DTPTokenContractAddress, ethers.constants.MaxUint256);
  }
};

const useMintToken = (token: DTP_Token | undefined) => {
  return useCallback(
    async (amount: BigNumber) => {
      try {
        if (token) {
          return await token['mint(uint256)'](amount);
        }
      } catch (err) {
        console.log(err);
      }
    },
    [token],
  );
};

export const useToken = () => {
  const { library } = useWeb3();
  const token = useMemo(() => getTokenContract(library), [library]);

  const approve = useApprove(token);

  const mintToken = useMintToken(token);

  const balanceOf = useCallback(
    async (ticket: string) => {
      return token?.balanceOf(ticket);
    },
    [token],
  );

  return { token, approve, balanceOf, mintToken };
};
