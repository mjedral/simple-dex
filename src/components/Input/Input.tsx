import React from 'react';
import { Button } from '../Button/Button';
import { container, input, maxButton } from './Input.css';
import { InputProps } from './Input.types';
import { InputContainer } from './InputContainer/InputContainer';

export const Input = ({ label }: InputProps) => {
  return (
    <InputContainer>
      <label>{label}</label>
      <div className={container}>
        <input type='number' className={input} placeholder={'0.0'} />
        <Button variant={'max'} className={maxButton}>
          Max
        </Button>
        <Button variant={'token'}>ETH</Button>
      </div>
      <label>Balance: 0.0 </label>
    </InputContainer>
  );
};
