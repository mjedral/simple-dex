import React from 'react';
import { container } from './SwapContainer.css';

type Props = {
  children: React.ReactNode;
};

export const SwapContainer = ({ children }: Props) => {
  return <div className={container}>{children}</div>;
};
