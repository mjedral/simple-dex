import React from 'react';
import { useClassName } from '../../tools/css';
import { button } from './Button.css';
import { ButtonProps } from './Button.types';

export const Button = ({ children, variant = 'wallet', className, onClick }: ButtonProps) => {
  const addClassName = useClassName(button({ variant }), className);
  return (
    <button onClick={onClick} className={addClassName}>
      {children}
    </button>
  );
};
