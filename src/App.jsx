import React, { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import {
  Page,
  HomePage,
  AuthorizationPage,
  ConnectWalletPage,
  BrowseMarketplacePage,
  TopCreatorsPage,
  UserProfilePage,
  PageAuctionNftPage,
} from './components/Page';

const App = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Page>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AuthorizationPage />} path="/authorization" />
        <Route element={<ConnectWalletPage />} path="/connect-wallet" />
        <Route element={<TopCreatorsPage />} path="/top-creators" />
        <Route element={<BrowseMarketplacePage />} path="/browse-marketplace" />
        <Route element={<UserProfilePage />} path="/user-profile/:userName" />
        <Route element={<PageAuctionNftPage />} path="/page-Auction-nft-Page" />
      </Routes>
    </Page>
  );
};

export { App };
