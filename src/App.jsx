import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { PageContent, PageLayout } from './components/Page';

const App = () => (
  <Router>
    <Routes>
      <Route element={<PageLayout />} path="*">
        <Route element={<PageContent />} path="*" />
      </Route>
    </Routes>
  </Router>
  // <Page>
  //   <Routes>
  //     <Route element={<BrowseMarketplacePage />} path="/browse-marketplace" />
  //     <Route element={<UserProfilePage />} path="/user-profile/:userName" />
  //     <Route element={<PageAuctionNftPage />} path="/page-Auction-nft-Page" />
  //   </Routes>
  // </Page>
);

export { App };
