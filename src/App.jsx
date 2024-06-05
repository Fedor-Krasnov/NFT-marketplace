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
  // <Route element={<UserProfilePage />} path="/user-profile/:userName" />
);

export { App };
