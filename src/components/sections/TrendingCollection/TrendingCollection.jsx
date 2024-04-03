import React from 'react';
import { trendingCollectionData } from '../../../mocks';
import { Title } from '../../units/Title';
import { NFTCollection } from './NFTCollection';
import trendingCollectionStyles from './TrendingCollection.module.scss';

const trendingCollectionClassName = 'trending-collection';

const TrendingCollection = () => {
  const { description, nftCollection, title } = trendingCollectionData;

  return (
    <section className={trendingCollectionStyles[trendingCollectionClassName]}>
      <Title description={description} heading="h2" title={title} />
      <div className={trendingCollectionStyles[`${trendingCollectionClassName}__content`]}>
        {nftCollection.map((data) => (
          <NFTCollection
            key={data.nftDetails.username}
            className={trendingCollectionStyles[`${trendingCollectionClassName}__nft-collection`]}
            data={data}
          />
        ))}
      </div>
    </section>
  );
};

export { TrendingCollection };
