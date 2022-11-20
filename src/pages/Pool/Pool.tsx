import React from 'react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Wrap } from '../../components/Layouts/Wrap/Wrap';
import { SwapContainer } from '../../components/Swap/SwapContainer/SwapContainer';
import { Header } from '../../components/Header/Header';

export const Pool = () => {
  return (
    <Wrap justify='center'>
      <SwapContainer>
        <Header headerName={'Add liquidity'} />
        <Input label={'From'} />
        <Input label={'To'} />
        <Button variant={'swap'}>Enter an Amount</Button>
      </SwapContainer>
    </Wrap>
  );
};
