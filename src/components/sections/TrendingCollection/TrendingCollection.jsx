import React from 'react';
import './TrendingCollection.scss';
import { trendingCollection } from '../../../mocks';
import { Title } from '../../units/Title';
import { NFTCollection } from './NFTCollection';

const TrendingCollection = () => (
  <section className="trending-collection">
    <Title description={trendingCollection.description} heading="h2" title={trendingCollection.title} />
    <div className="trending-collection__content">
      <NFTCollection />
      <NFTCollection />
      <NFTCollection />
    </div>
  </section>
);

export { TrendingCollection };
