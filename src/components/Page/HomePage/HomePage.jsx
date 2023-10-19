import React from 'react';
import {
  Auction,
  BrowseCategories,
  DiscoverMoreNfTs,
  HeroSection,
  HowItWorks,
  TopCreators,
  TrendingCollection,
  WeeklyDigest,
} from '../../sections';

const HomePage = () => (
  <>
    <HeroSection />
    <TrendingCollection />
    <TopCreators />
    <BrowseCategories />
    <DiscoverMoreNfTs />
    <Auction />
    <HowItWorks />
    <WeeklyDigest />
  </>
);

export { HomePage };
