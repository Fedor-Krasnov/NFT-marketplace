import React from 'react';
import './PageAuctionNFTPage.scss';
import { useParams } from 'react-router-dom';
import { WorkLayoutSection } from '../../sections';

const PageAuctionNftPage = () => {
  const { userName } = useParams();

  return (
    <>
      <WorkLayoutSection userName={userName} />
    </>
  );
};

export { PageAuctionNftPage };
