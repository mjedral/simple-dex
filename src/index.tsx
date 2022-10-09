import React from 'react';
import { render } from 'react-dom';
import App from './App';

const root = window.document.createElement('div');
window.document.body.appendChild(root);

const AppView = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

render(<AppView />, root);
