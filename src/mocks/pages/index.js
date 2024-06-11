import { authorizationPageData, connectWalletPageData, NFTAuctionPageData, rankingsPageData } from '../Page';
import {
  auctionData,
  browseCategoriesData,
  browseMarketplaceData,
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
        content: browseMarketplaceData,
        marginBottom: 0,
        type: 'browse-marketplace',
        width: 'full',
      },
    ],
  },
  {
    pathname: '/nft-auction',
    seo: {
      title: 'NFT Auction – NFT Marketplace',
      description: '',
      keywords: '',
    },
    sections: [
      {
        content: NFTAuctionPageData,
        type: 'nftAuction-Page',
      },
    ],
  },
];
