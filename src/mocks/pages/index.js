import { authorizationPageData } from '../Page/index.js';
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
];
