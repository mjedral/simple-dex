import { Outlet } from 'react-router-dom';
import { Navbar } from '../../../../pages/common/Navbar/Navbar';
import { Overlay } from '../../../Overlay/Overlay';
import React from 'react';

export const RouteContainer = () => {
  return (
    <Overlay>
      <Navbar />
      <Outlet />
    </Overlay>
  );
};
