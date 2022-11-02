import React from 'react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Wrap } from '../../components/Layouts/Wrap/Wrap';
import { SwapContainer } from '../../components/Swap/SwapContainer/SwapContainer';
import { SwapHeader } from '../../components/Swap/SwapHeader/SwapHeader';

export const Swap = () => {
  return (
    <Wrap justify='center'>
      <SwapContainer>
        <SwapHeader />
        <Input />
        <Input />
        <Button variant={'swap'}>Enter an Amount</Button>
      </SwapContainer>
    </Wrap>
  );
};