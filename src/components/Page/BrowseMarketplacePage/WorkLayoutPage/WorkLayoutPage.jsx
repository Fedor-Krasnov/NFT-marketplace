import React from 'react';
import './WorkLayoutPage.scss';
import { browseMarketplacePageData } from '../../../../mocks/Page/browseMarketplacePageData.js';
import { NFTCard } from '../../../NFTCard/index.js';

const WorkLayoutPage = () => {
  const { workLayout } = browseMarketplacePageData;

  return (
    <div className="work-layout">
      <div className="work-layout__container">
        {workLayout.map((data, indexNFTCard) => (
          <NFTCard key={indexNFTCard} data={data} />
        ))}
      </div>
    </div>
  );
};

export { WorkLayoutPage };
