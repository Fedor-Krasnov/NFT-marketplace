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
import { HowItWorks } from './components/sections/HowItWorks/HowItWorks.jsx';

const App = () => (
  <Router>
    <Header />
    <HeroSection />
    <TrendingCollection />
    <TopCreators />
    <BrowseCategories />
    <DiscoverMoreNfTs />
    <HowItWorks />
    <Footer />
  </Router>
);

export { App };
