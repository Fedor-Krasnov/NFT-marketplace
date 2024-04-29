import React from 'react';
import { Helmet } from 'react-helmet';
import { pageAuctionNFTPageData } from '../../../mocks/Page';
import { DiscoverMoreNfTs } from '../../sections';
import { DescriptionNFTSectionPage } from './DescriptionNFTSectionPage';
import { NFTSectionPage } from './NFTSectionPage';

const PageAuctionNftPage = () => {
  const { moreNFT, titleAuction } = pageAuctionNFTPageData;

  return (
    <>
      <Helmet>
        <title>{titleAuction} – NFT Marketplace</title>
      </Helmet>
      <NFTSectionPage />
      <DescriptionNFTSectionPage />
      <DiscoverMoreNfTs data={moreNFT} />
    </>
  );
};

export { PageAuctionNftPage };
