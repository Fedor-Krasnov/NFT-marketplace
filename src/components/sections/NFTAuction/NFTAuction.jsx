import React from 'react';
import { DiscoverMoreNfTs } from '../DiscoverMoreNFTs';
import { DescriptionNFT } from './DescriptionNFT';
import { NFTSection } from './NFTSection';

const NFTAuction = ({ content }) => {
  const { moreNFT } = content;

  return (
    <>
      <NFTSection content={content} />
      <DescriptionNFT content={content} />
      <DiscoverMoreNfTs content={moreNFT} />
    </>
  );
};

export { NFTAuction };
