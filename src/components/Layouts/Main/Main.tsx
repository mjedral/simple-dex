import * as React from 'react';
import { main } from './Main.css';

export const Main: React.FC = ({ children }) => {
  return <main className={main}>{children}</main>;
};

Main.displayName = 'Main';
