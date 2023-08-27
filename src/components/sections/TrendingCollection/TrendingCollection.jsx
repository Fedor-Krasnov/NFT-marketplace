import React from 'react';
import './TrendingCollection.scss';
import { trendingCollectionData } from '../../../mocks';
import { Title } from '../../units/Title';
import { NFTCollection } from './NFTCollection';

const TrendingCollection = () => {
  const { description, nftCollection, title } = trendingCollectionData;

  return (
    <section className="trending-collection">
      <Title description={description} heading="h2" title={title} />
      <div className="trending-collection__content">
        {nftCollection.map((data) => (
          <NFTCollection key={data.nftDetails.username} className="trending-collection__nft-collection" data={data} />
        ))}
      </div>
    </section>
  );
};

export { TrendingCollection };
