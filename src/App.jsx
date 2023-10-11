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
  WeeklyDigest,
} from './components/sections';
import { Auction } from './components/sections/Auction/index.js';
import { HowItWorks } from './components/sections/HowItWorks/HowItWorks.jsx';

const App = () => (
  <Router>
    <Header />
    <HeroSection />
    <TrendingCollection />
    <TopCreators />
    <BrowseCategories />
    <DiscoverMoreNfTs />
    <Auction />
    <HowItWorks />
    <WeeklyDigest />
    <Footer />
  </Router>
);

export { App };
