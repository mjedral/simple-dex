import React from 'react';
import { overlay } from './Overlay.css';

export const Overlay: React.FC = ({ children }) => {
  return <div className={overlay}>{children}</div>;
};
