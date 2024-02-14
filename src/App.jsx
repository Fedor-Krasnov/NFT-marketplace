import React, { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Page } from './components/Page';
import { AuthorizationPage } from './components/Page/AuthorizationPage';
import { BrowseMarketplacePage } from './components/Page/BrowseMarketplacePage';
import { ConnectWalletPage } from './components/Page/ConnectWalletPage';
import { HomePage } from './components/Page/HomePage';
import { PageAuctionNftPage } from './components/Page/PageAuctionNFTPage';
import { TopCreatorsPage } from './components/Page/TopCreatorsPage';
import { UserProfilePage } from './components/Page/UserProfilePage';

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
