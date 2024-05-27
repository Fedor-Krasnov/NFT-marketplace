import { AuthorizationPage } from '../Page';
import {
  Auction,
  BrowseCategories,
  DiscoverMoreNfTs,
  HeroSection,
  HowItWorks,
  TopCreators,
  TrendingCollection,
  WeeklyDigest,
} from '../sections';

export const SectionType = {
  hero: 'hero',
  trendingCollection: 'trending-collection',
  topCreators: 'top-creators',
  browseCategories: 'browse-categories',
  discoverMoreNfTs: 'discover-more-nfTs',
  auction: 'auction',
  howItWorks: 'how-it-works',
  weeklyDigest: 'weekly-digest',
  authorization: 'authorization',
};

export const sectionTypeToComponentMap = {
  [SectionType.hero]: HeroSection,
  [SectionType.topCreators]: TopCreators,
  [SectionType.trendingCollection]: TrendingCollection,
  [SectionType.browseCategories]: BrowseCategories,
  [SectionType.discoverMoreNfTs]: DiscoverMoreNfTs,
  [SectionType.auction]: Auction,
  [SectionType.howItWorks]: HowItWorks,
  [SectionType.weeklyDigest]: WeeklyDigest,
  [SectionType.authorization]: AuthorizationPage,
};