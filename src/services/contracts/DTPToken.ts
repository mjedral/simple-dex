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
  return useCallback(async () => {
    if (token) {
      return await token.approve(DTPTokenContractAddress, ethers.constants.MaxUint256);
    }
  }, [token]);
};

const useAllownce = (token: DTP_Token | undefined, account: string | undefined | null) => {
  return useCallback(async () => {
    if (token && account) {
      return await token.allowance(account, DTPTokenContractAddress);
    }
  }, [token, account]);
};

const useMintToken = (token: DTP_Token | undefined) => {
  return useCallback(
    async (amount: BigNumber) => {
      try {
        if (token) {
          return await token['mint(uint256)'](amount, { maxFeePerGas: 0, maxPriorityFeePerGas: 0 });
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
    async (account: string | undefined | null) => {
      if (account) {
        return token?.balanceOf(account);
      }
    },
    [token],
  );

  return { token, approve, balanceOf, mintToken };
};
