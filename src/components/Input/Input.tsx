import React from 'react';
import { Button } from '../Button/Button';
import { container, input, maxButton } from './Input.css';
import { InputContainer } from './InputContainer/InputContainer';

export const Input = () => {
  return (
    <InputContainer>
      <label>From</label>
      <div className={container}>
        <input className={input} placeholder={'0.0'} />
        <Button variant={'max'} className={maxButton}>
          Max
        </Button>
        <Button variant={'token'}>ETH</Button>
      </div>
      <label>Balance: 0.0 </label>
    </InputContainer>
  );
};
