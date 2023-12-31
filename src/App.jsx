import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Page } from './components/Page';
import { AuthorizationPage } from './components/Page/AuthorizationPage';
import { BrowseMarketplacePage } from './components/Page/BrowseMarketplacePage';
import { ConnectWalletPage } from './components/Page/ConnectWalletPage';
import { HomePage } from './components/Page/HomePage';
import { TopCreatorsPage } from './components/Page/TopCreatorsPage';
import { UserProfilePage } from './components/Page/UserProfilePage';

const App = () => (
  <Page>
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<AuthorizationPage />} path="/authorization" />
      <Route element={<ConnectWalletPage />} path="/connect-wallet" />
      <Route element={<TopCreatorsPage />} path="/top-creators" />
      <Route element={<BrowseMarketplacePage />} path="/browse-marketplace" />
      <Route element={<UserProfilePage />} path="/user-profile" />
    </Routes>
  </Page>
);

export { App };
