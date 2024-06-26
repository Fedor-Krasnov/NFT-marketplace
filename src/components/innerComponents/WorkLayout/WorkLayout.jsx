import React from 'react';
import { browseMarketplaceData } from '../../../mocks/sections';
import { NFTCard } from '../NFTCard';
import workLayoutStyles from './WorkLayout.module.scss';

const workLayoutClassName = 'work-layout';

const WorkLayout = ({ userName }) => {
  const { nftCards } = browseMarketplaceData;
  let nftCardsResult = nftCards;
  if (userName) {
    nftCardsResult = nftCards.filter((card) => card.nftDetails.username === userName);
  }

  return (
    <div className={workLayoutStyles[workLayoutClassName]}>
      <div className={workLayoutStyles[`${workLayoutClassName}__container`]}>
        {nftCardsResult.map((data, indexNFTCard) => (
          <NFTCard key={indexNFTCard} data={data} isDarkBackground />
        ))}
      </div>
    </div>
  );
};

export { WorkLayout };
