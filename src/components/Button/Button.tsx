import React from 'react';
import { useClassName } from '../../tools/css';
import { button } from './Button.css';
import { ButtonProps } from './Button.types';

export const Button = ({ children, variant = 'wallet', className }: ButtonProps) => {
  const addClassName = useClassName(button({ variant }), className);
  return <button className={addClassName}>{children}</button>;
};
