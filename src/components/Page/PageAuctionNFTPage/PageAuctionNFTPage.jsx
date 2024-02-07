import React from 'react';
import { useParams } from 'react-router-dom';
import { WorkLayoutSection } from '../../sections';
import { DescriptionNFTSectionPage } from './DescriptionNFTSectionPage/index.js';
import { NFTSectionPage } from './NFTSectionPage/index.js';

const PageAuctionNftPage = () => {
  const { userName } = useParams();

  return (
    <>
      <NFTSectionPage />
      <DescriptionNFTSectionPage />
      <WorkLayoutSection userName={userName} />
    </>
  );
};

export { PageAuctionNftPage };
