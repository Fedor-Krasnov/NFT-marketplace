import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import {
  BrowseCategories,
  DiscoverMoreNfTs,
  HeroSection,
  TopCreators,
  TrendingCollection,
} from './components/sections';

const App = () => (
  <Router>
    <Header />
    <HeroSection />
    <TrendingCollection />
    <TopCreators />
    <BrowseCategories />
    <DiscoverMoreNfTs />
    <Footer />
  </Router>
);

export { App };
