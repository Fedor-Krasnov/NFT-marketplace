import React from 'react';
import './WorkLayoutSection.scss';
import { browseMarketplacePageData } from '../../../mocks/Page';
import { NFTCard } from '../../NFTCard';

const workLayoutSectionClassName = 'work-layout-section';

const WorkLayoutSection = () => {
  const { nftCards } = browseMarketplacePageData;

  return (
    <section className={workLayoutSectionClassName}>
      <div className={`${workLayoutSectionClassName}__container`}>
        {nftCards.map((data, indexNFTCard) => (
          <NFTCard key={indexNFTCard} data={data} isDarkBackground />
        ))}
      </div>
    </section>
  );
};

export { WorkLayoutSection };
