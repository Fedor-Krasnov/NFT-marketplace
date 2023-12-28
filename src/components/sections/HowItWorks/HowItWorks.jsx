import React from 'react';
import './HowItWorks.scss';
import { howItWorksData } from '../../../mocks';
import { Title } from '../../units';
import { ExplanatoryCard } from './ExplanatoryCard';

const HowItWorks = () => {
  const { offerCards, image } = howItWorksData;

  return (
    <section className="how-it-works">
      <Title description={howItWorksData.description} heading="h2" title={howItWorksData.title} />
      <div className="how-it-works__container">
        {offerCards.map((data, dataId) => (
          <ExplanatoryCard key={dataId} data={data} />
        ))}
      </div>
    </section>
  );
};

export { HowItWorks };
