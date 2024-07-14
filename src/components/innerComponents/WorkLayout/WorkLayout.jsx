import React from 'react';
import { browseMarketplaceData } from '../../../mocks/sections';
import { NFTCard } from '../NFTCard';
import { Tabs } from './Tabs';
import { TabsType } from './types';
import workLayoutStyles from './WorkLayout.module.scss';

const workLayoutClassName = 'work-layout';

const WorkLayout = ({ tabsType, userId }) => {
  const { nftCards } = browseMarketplaceData;
  let nftCardsResult = nftCards;

  if (userId) {
    nftCardsResult = nftCards.filter((card) => card.userId === userId);
  }

  if (!nftCardsResult.length) {
    return null;
  }

  let tabs = [];
  if (tabsType === TabsType.marketplace) {
    tabs = [
      { quantity: 302, title: 'NFTs' },
      { quantity: 67, title: 'Collections' },
    ];
  } else if (tabsType === TabsType.userProfile) {
    tabs = [
      { quantity: 302, title: 'Created' },
      { quantity: 67, title: 'Owned' },
      { quantity: 4, title: 'Collection' },
    ];
  }

  return (
    <>
      <Tabs data={tabs} />
      <div className={workLayoutStyles[workLayoutClassName]}>
        <div className={workLayoutStyles[`${workLayoutClassName}__container`]}>
          {nftCardsResult.map((data, indexNFTCard) => (
            <NFTCard key={indexNFTCard} data={data} isDarkBackground />
          ))}
        </div>
      </div>
    </>
  );
};

export { WorkLayout };
