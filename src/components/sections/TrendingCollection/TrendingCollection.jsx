import React from 'react';
import './TrendingCollection.scss';
import { trendingCollection } from '../../../mocks';
import { Title } from '../../units/Title/index.js';

const TrendingCollection = () => (
  <section className="trending-collection">
    <Title description={trendingCollection.description} heading="h2" title={trendingCollection.title} />
  </section>
);

export { TrendingCollection };
