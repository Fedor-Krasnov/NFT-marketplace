import React from 'react';
import './HowItWorks.scss';
import { howItWorksData } from '../../../mocks';
import { Title } from '../../units';
import { ExplanatoryCard } from './ExplanatoryCard';

const howItWorksClassName = 'how-it-works';

const HowItWorks = () => {
  const { offerCards } = howItWorksData;

  return (
    <section className={howItWorksClassName}>
      <Title description={howItWorksData.description} heading="h2" title={howItWorksData.title} />
      <div className={`${howItWorksClassName}__container`}>
        {offerCards.map((data, dataId) => (
          <ExplanatoryCard key={dataId} data={data} />
        ))}
      </div>
    </section>
  );
};

export { HowItWorks };
