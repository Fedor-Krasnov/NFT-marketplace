import React from 'react';
import { pageAuctionNFTPageData } from '../../../mocks/Page';
import { DiscoverMoreNfTs } from '../../sections';
import { DescriptionNFTSectionPage } from './DescriptionNFTSectionPage';
import { NFTSectionPage } from './NFTSectionPage';

const PageAuctionNftPage = () => {
  const { moreNFT } = pageAuctionNFTPageData;

  return (
    <>
      <NFTSectionPage />
      <DescriptionNFTSectionPage />
      <DiscoverMoreNfTs data={moreNFT} />
    </>
  );
};

export { PageAuctionNftPage };
