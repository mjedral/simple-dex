import { BigNumber } from 'ethers';
import React from 'react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Wrap } from '../../components/Layouts/Wrap/Wrap';
import { SwapContainer } from '../../components/Swap/SwapContainer/SwapContainer';
import { SwapHeader } from '../../components/Swap/SwapHeader/SwapHeader';
import { useToken } from '../../services/contracts/DTPToken';
import { useWeb3 } from '../../services/web3/web3';

export const Swap = () => {
  return (
    <Wrap justify='center'>
      <SwapContainer>
        <SwapHeader />
        <Input label={'From'} />
        <Input label={'To'} />
        <Button variant={'swap'}>Enter an Amount</Button>
      </SwapContainer>
    </Wrap>
  );
};
