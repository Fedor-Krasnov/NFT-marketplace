import React from 'react';
import './WorkLayoutSection.scss';
import { browseMarketplacePageData } from '../../../mocks/Page';
import { NFTCard } from '../../NFTCard';

const WorkLayoutSection = () => {
  const { workLayout } = browseMarketplacePageData;

  return (
    <div className="work-layout">
      <div className="work-layout__container">
        {workLayout.map((data, indexNFTCard) => (
          <NFTCard key={indexNFTCard} data={data} isDarkBackground />
        ))}
      </div>
    </div>
  );
};

export { WorkLayoutSection };
