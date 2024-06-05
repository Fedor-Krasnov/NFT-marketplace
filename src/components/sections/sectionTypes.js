import { AuthorizationPage, BrowseMarketplacePage, ConnectWalletPage, NFTAuctionPage, RankingsPage } from '../Page';
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
  connectWallet: 'connect-wallet',
  rankingsPage: 'rankings-page',
  browseMarketplacePage: 'browse-marketplace-page',
  NFTAuctionPage: 'nftAuction-Page',
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
  [SectionType.rankingsPage]: RankingsPage,
  [SectionType.browseMarketplacePage]: BrowseMarketplacePage,
  [SectionType.NFTAuctionPage]: NFTAuctionPage,
};
