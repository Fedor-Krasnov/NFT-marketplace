import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Page } from './components/Page';
import { BrowseMarketplacePage } from './components/Page/BrowseMarketplacePage';
import { HomePage } from './components/Page/HomePage';

const App = () => (
  <Page>
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<BrowseMarketplacePage />} path="/browse-marketplace" />
    </Routes>
  </Page>
);

export { App };
