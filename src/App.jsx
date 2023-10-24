import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Page } from './components/Page';
import { AuthorizationPage } from './components/Page/AuthorizationPage';
import { HomePage } from './components/Page/HomePage';

const App = () => (
  <Page>
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<AuthorizationPage />} path="/browse-marketplace" />
    </Routes>
  </Page>
);

export { App };
