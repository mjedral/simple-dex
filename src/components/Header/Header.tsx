import React from 'react';
import { header, icon, text } from './Header.css';
import gear from '../../assets/gear.svg';

type HeaderType = {
  headerName: string;
};

export const Header = ({ headerName }: HeaderType) => {
  return (
    <div className={header}>
      <span className={text}>{headerName}</span>
      <img src={gear} className={icon} alt='gear icon' />
    </div>
  );
};
