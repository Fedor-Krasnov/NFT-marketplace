import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Page } from './components/Page';
import { AuthorizationPage } from './components/Page/AuthorizationPage';
import { ConnectWalletPage } from './components/Page/ConnectWalletPage/index.js';
import { HomePage } from './components/Page/HomePage';

const App = () => (
  <Page>
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<AuthorizationPage />} path="/authorization" />
      <Route element={<ConnectWalletPage />} path="/connectwallet" />
    </Routes>
  </Page>
);

export { App };
