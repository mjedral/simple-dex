import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page } from './components/Layouts/Page/Page';
import { RouteContainer } from './components/Layouts/Page/RouteContainer/RouteContainer';
import { Overlay } from './components/Overlay/Overlay';
import { themeClass } from './consts/theme/theme.css';
import { TokensCtx } from './contexts/tokenContext';
import { Pool } from './pages/Pool/Pool';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { Swap } from './pages/Swap/Swap';
import { Web3 } from './services/web3/Provider';

function App() {
  return (
    <BrowserRouter>
      <Web3>
        <TokensCtx.Provider>
          <Page className={`${themeClass} page`}>
            <Overlay>
              <Routes>
                <Route element={<RouteContainer />}>
                  <Route path='/' element={<Swap />} />
                  <Route path='/swap' element={<Swap />}></Route>
                  <Route path='/pool' element={<Pool />}></Route>
                  <Route path='/portfolio' element={<Portfolio />}></Route>
                </Route>
              </Routes>
            </Overlay>
          </Page>
        </TokensCtx.Provider>
      </Web3>
    </BrowserRouter>
  );
}

export default App;
