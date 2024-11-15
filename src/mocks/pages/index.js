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
import { usersData } from '../usersData';

export const pages = [
  {
    pathname: '/',
    seo: {
      title: 'Nexus',
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
        width: 'full',
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
      title: 'Authorization – Nexus',
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
      title: 'Connect Wallet – Nexus',
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
      title: 'Rankings – Nexus',
      description: '',
      keywords: '',
    },
    sections: [
      {
        content: rankingsPageData,
        type: 'rankings',
      },
    ],
  },
  {
    pathname: '/browse-marketplace',
    seo: {
      title: 'Browse Marketplace – Nexus',
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
      title: 'NFT Auction – Nexus',
      description: '',
      keywords: '',
    },
    sections: [
      {
        content: NFTAuctionPageData,
        type: 'nftAuction',
      },
    ],
  },
  {
    pathname: '/user-profile',
    seo: {
      title: 'user-profile – Nexus',
      description: '',
      keywords: '',
    },
    sections: [
      {
        content: usersData,
        type: 'user-profile',
        width: 'full',
      },
    ],
  },
];
