import React from 'react';
import { container } from './InputContainer.css';

type Props = {
  children: React.ReactNode;
};

export const InputContainer = ({ children }: Props) => {
  return <div className={container}>{children}</div>;
};
