import React from 'react';
import './PageAuctionNFTPage.scss';
import { useParams } from 'react-router-dom';
import { WorkLayoutSection } from '../../sections';
import { DescriptionNFTSection } from './DescriptionNFTSection/index.js';
import { NFTSection } from './NFTSection/index.js';

const PageAuctionNftPage = () => {
  const { userName } = useParams();

  return (
    <>
      <NFTSection />
      <DescriptionNFTSection />
      <WorkLayoutSection userName={userName} />
    </>
  );
};

export { PageAuctionNftPage };
