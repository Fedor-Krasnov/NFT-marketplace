import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Page } from './components/Page';
import { AuthorizationPage } from './components/Page/AuthorizationPage';
import { ConnectWalletPage } from './components/Page/ConnectWalletPage/index.js';
import { HomePage } from './components/Page/HomePage';
import { TopCreatorsPage } from './components/Page/TopCreatorsPage/index.js';

const App = () => (
  <Page>
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<AuthorizationPage />} path="/authorization" />
      <Route element={<ConnectWalletPage />} path="/connectwallet" />
      <Route element={<TopCreatorsPage />} path="/topcreators" />
    </Routes>
  </Page>
);

export { App };
