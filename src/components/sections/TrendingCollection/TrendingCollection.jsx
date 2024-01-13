import React from 'react';
import './TrendingCollection.scss';
import { trendingCollectionData } from '../../../mocks';
import { Title } from '../../units/Title';
import { NFTCollection } from './NFTCollection';

const trendingCollectionClassName = 'trending-collection';

const TrendingCollection = () => {
  const { description, nftCollection, title } = trendingCollectionData;

  return (
    <section className={trendingCollectionClassName}>
      <Title description={description} heading="h2" title={title} />
      <div className={`${trendingCollectionClassName}__content`}>
        {nftCollection.map((data) => (
          <NFTCollection
            key={data.nftDetails.username}
            className={`${trendingCollectionClassName}__nft-collection`}
            data={data}
          />
        ))}
      </div>
    </section>
  );
};

export { TrendingCollection };
