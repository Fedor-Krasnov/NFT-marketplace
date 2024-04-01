import React from 'react';
import { howItWorksData } from '../../../mocks';
import { Title } from '../../units';
import { ExplanatoryCard } from './ExplanatoryCard';
import howItWorksStyles from './HowItWorks.module.scss';

const howItWorksClassName = 'how-it-works';

const HowItWorks = () => {
  const { offerCards } = howItWorksData;

  return (
    <section className={howItWorksStyles[howItWorksClassName]}>
      <Title description={howItWorksData.description} heading="h2" title={howItWorksData.title} />
      <div className={howItWorksStyles[`${howItWorksClassName}__container`]}>
        {offerCards.map((data, dataId) => (
          <ExplanatoryCard key={dataId} data={data} />
        ))}
      </div>
    </section>
  );
};

export { HowItWorks };
