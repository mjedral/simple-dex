import { Web3ReactProvider } from '@web3-react/core';
import React from 'react';
import { getLibrary } from './web3';

export const Web3: React.FC = ({ children }) => (
  <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
);

Web3.displayName = 'Web3';
