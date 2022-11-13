import { useWeb3, Web3Library } from '../web3/web3';

import { Exchange__factory } from '../../../../../simple-dex-contracts/contracts/typechain-types/factories/contracts/DTP_Dex/DTP_Dex.sol/Exchange__factory';
import { Exchange } from '../../../../../simple-dex-contracts/contracts/typechain-types/contracts/DTP_Dex/DTP_Dex.sol/Exchange';
import { DTPDexContractAddress } from '../../build/config';

const getContract = (library: Web3Library | undefined): Exchange | undefined => {
  if (library) {
    return Exchange__factory.connect(DTPDexContractAddress, library);
  }
};

const useDex = () => {
  const { library } = useWeb3();
  const DTPDex = getContract(library);
};
