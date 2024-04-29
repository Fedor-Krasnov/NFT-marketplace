import React from 'react';
import { Helmet } from 'react-helmet';
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
    <Helmet>
      <title>NFT Marketplace</title>
    </Helmet>
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
