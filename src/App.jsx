import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import {
  Auction,
  BrowseCategories,
  DiscoverMoreNfTs,
  HeroSection,
  HowItWorks,
  TopCreators,
  TrendingCollection,
  WeeklyDigest,
} from './components/sections';

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
