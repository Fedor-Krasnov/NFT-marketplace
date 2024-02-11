import React from 'react';
import { discoverMoreNfTsData } from '../../../mocks';
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
    <DiscoverMoreNfTs data={discoverMoreNfTsData} />
    <Auction />
    <HowItWorks />
    <WeeklyDigest />
  </>
);

export { HomePage };
