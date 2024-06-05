import React from 'react';
import { DiscoverMoreNfTs } from '../../sections';
import { DescriptionNFTSectionPage } from './DescriptionNFTSectionPage';
import { NFTSectionPage } from './NFTSectionPage';

const PageAuctionNftPage = ({ content }) => {
  const { moreNFT } = content;

  return (
    <>
      <NFTSectionPage content={content} />
      <DescriptionNFTSectionPage content={content} />
      <DiscoverMoreNfTs content={moreNFT} />
    </>
  );
};

export { PageAuctionNftPage };
