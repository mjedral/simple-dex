import { BigNumber, ethers } from 'ethers';
import { useCallback, useMemo } from 'react';
// import { DTP_Token } from '../../../../../simple-dex-contracts/contracts/typechain-types/contracts/DTP_Token/DTP_Token';
import { DTPToken } from '../../../../../simple-dex-token-contract/typechain-types/contracts/DTPToken';
// import { DTP_Token__factory } from '../../../../../simple-dex-contracts/contracts/typechain-types/factories/contracts/DTP_Token/DTP_Token__factory';
import { DTPToken__factory } from '../../../../../simple-dex-token-contract/typechain-types/factories/contracts/DTPToken__factory';
import { DTPTokenContractAddress } from '../../build/config';
import { useWallet } from '../web3/wallet';
import { useWeb3, Web3Library } from '../web3/web3';

const getTokenContract = (library: Web3Library | undefined): DTPToken | undefined => {
  if (library) {
    return DTPToken__factory.connect('0x8b05Fe368F34a9D401bdCE44D2ed82E5769bfD72', library);
  }
};

const useApprove = (token: DTPToken | undefined) => {
  return useCallback(async () => {
    if (token) {
      return await token.approve(DTPTokenContractAddress, ethers.constants.MaxUint256);
    }
  }, [token]);
};

const useAllownce = (token: DTPToken | undefined, account: string | undefined | null) => {
  return useCallback(async () => {
    if (token && account) {
      return await token.allowance(account, DTPTokenContractAddress);
    }
  }, [token, account]);
};

const useMintToken = (token: DTPToken | undefined) => {
  return useCallback(
    async (amount: BigNumber) => {
      try {
        if (token) {
          return await token['mint(uint256)'](amount, {
            maxFeePerGas: 1000000,
            maxPriorityFeePerGas: 100000,
          });
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
  const { account } = useWallet();
  const token = useMemo(() => getTokenContract(library), [library]);

  const approve = useApprove(token);

  const allowance = useAllownce(token, account);

  const mintToken = useMintToken(token);

  const balanceOf = useCallback(
    async (account: string | undefined | null) => {
      if (account) {
        return token?.balanceOf(account);
      }
    },
    [token],
  );

  return { token, approve, balanceOf, mintToken, allowance };
};
