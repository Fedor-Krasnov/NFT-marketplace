import React from 'react';
import { browseMarketplacePageData } from '../../../mocks/Page';
import { NFTCard } from '../../NFTCard';
import workLayoutSectionStyles from './WorkLayoutSection.module.scss';

const workLayoutSectionClassName = 'work-layout-section';

const WorkLayoutSection = ({ userName }) => {
  const { nftCards } = browseMarketplacePageData;
  let nftCardsResult = nftCards;
  if (userName) {
    nftCardsResult = nftCards.filter((card) => card.nftDetails.username === userName);
  }

  return (
    <section className={workLayoutSectionStyles[workLayoutSectionClassName]}>
      <div className={workLayoutSectionStyles[`${workLayoutSectionClassName}__container`]}>
        {nftCardsResult.map((data, indexNFTCard) => (
          <NFTCard key={indexNFTCard} data={data} isDarkBackground />
        ))}
      </div>
    </section>
  );
};

export { WorkLayoutSection };
