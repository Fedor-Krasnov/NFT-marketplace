import React from 'react';
import './WorkLayoutSection.scss';
import { browseMarketplacePageData } from '../../../mocks/Page';
import { NFTCard } from '../../NFTCard';

const workLayoutSectionClassName = 'work-layout-section';

const WorkLayoutSection = ({ userName }) => {
  const { nftCards } = browseMarketplacePageData;
  let nftCardsResult = nftCards;
  if (userName) {
    nftCardsResult = nftCards.filter((card) => card.nftDetails.username === userName);
  }

  return (
    <section className={workLayoutSectionClassName}>
      <div className={`${workLayoutSectionClassName}__container`}>
        {nftCardsResult.map((data, indexNFTCard) => (
          <NFTCard key={indexNFTCard} data={data} isDarkBackground />
        ))}
      </div>
    </section>
  );
};

export { WorkLayoutSection };
