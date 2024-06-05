import {
  authorizationPageData,
  browseMarketplacePageData,
  connectWalletPageData,
  pageAuctionNFTPageData,
  rankingsPageData,
} from '../Page';
import {
  auctionData,
  browseCategoriesData,
  discoverMoreNfTsData,
  heroSectionData,
  howItWorksData,
  topCreatorsData,
  trendingCollectionData,
  weeklyDigestData,
} from '../sections';

export const pages = [
  {
    pathname: '/',
    seo: {
      title: 'NFT Marketplace',
      description: '',
      keywords: '',
    },
    sections: [
      {
        content: heroSectionData,
        type: 'hero',
      },
      {
        content: trendingCollectionData,
        type: 'trending-collection',
      },
      {
        content: topCreatorsData,
        type: 'top-creators',
      },
      {
        content: browseCategoriesData,
        type: 'browse-categories',
      },
      {
        content: discoverMoreNfTsData,
        type: 'discover-more-nfTs',
      },
      {
        content: auctionData,
        type: 'auction',
      },
      {
        content: howItWorksData,
        type: 'how-it-works',
      },
      {
        content: weeklyDigestData,
        type: 'weekly-digest',
      },
    ],
  },
  {
    pathname: '/authorization',
    seo: {
      title: 'Authorization – NFT Marketplace',
      description: '',
      keywords: '',
    },
    sections: [
      {
        content: authorizationPageData,
        type: 'authorization',
      },
    ],
  },
  {
    pathname: '/connect-wallet',
    seo: {
      title: 'Connect Wallet – NFT Marketplace',
      description: '',
      keywords: '',
    },
    sections: [
      {
        content: connectWalletPageData,
        type: 'connect-wallet',
      },
    ],
  },
  {
    pathname: '/rankings',
    seo: {
      title: 'Rankings – NFT Marketplace',
      description: '',
      keywords: '',
    },
    sections: [
      {
        content: rankingsPageData,
        type: 'rankings-page',
      },
    ],
  },
  {
    pathname: '/browse-marketplace',
    seo: {
      title: 'Browse Marketplace – NFT Marketplace',
      description: '',
      keywords: '',
    },
    sections: [
      {
        content: browseMarketplacePageData,
        type: 'browse-marketplace-page',
      },
    ],
  },
  {
    pathname: '/page-Auction-nft-Page',
    seo: {
      title: 'NFT Auction – NFT Marketplace',
      description: '',
      keywords: '',
    },
    sections: [
      {
        content: pageAuctionNFTPageData,
        type: 'page-Auction-nft-Page',
      },
    ],
  },
];
