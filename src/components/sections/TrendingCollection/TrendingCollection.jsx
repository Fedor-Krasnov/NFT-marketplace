import React from 'react';
import { Title } from '../../units/Title';
import { TitleSize } from '../../units/Title/types';
import { NFTCollection } from './NFTCollection';
import trendingCollectionStyles from './TrendingCollection.module.scss';

const trendingCollectionClassName = 'trending-collection';

const TrendingCollection = ({ content }) => {
  const { description, nftCollection, title } = content;

  return (
    <div className={trendingCollectionStyles[trendingCollectionClassName]}>
      <Title description={description} heading={TitleSize.h2} title={title} />
      <div className={trendingCollectionStyles[`${trendingCollectionClassName}__content`]}>
        {nftCollection.map((data) => (
          <NFTCollection
            key={data.nftDetails.username}
            className={trendingCollectionStyles[`${trendingCollectionClassName}__nft-collection`]}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export { TrendingCollection };
