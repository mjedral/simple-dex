import React from 'react';
import { header, icon, text } from './SwapHeader.css';
import gear from '../../../assets/gear.svg';

export const SwapHeader = () => {
  return (
    <div className={header}>
      <span className={text}>Swap</span>
      <img src={gear} className={icon} alt='gear icon' />
    </div>
  );
};
