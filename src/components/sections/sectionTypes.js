import { AuthorizationPage, BrowseMarketplace, ConnectWalletPage, NFTAuction } from '../Page';
import {
  Auction,
  BrowseCategories,
  DiscoverMoreNfTs,
  HeroSection,
  HowItWorks,
  Rankings,
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
  connectWallet: 'connect-wallet',
  rankings: 'rankings',
  browseMarketplace: 'browse-marketplace',
  NFTAuction: 'nftAuction',
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
  [SectionType.connectWallet]: ConnectWalletPage,
  [SectionType.rankings]: Rankings,
  [SectionType.browseMarketplace]: BrowseMarketplace,
  [SectionType.NFTAuction]: NFTAuction,
};
