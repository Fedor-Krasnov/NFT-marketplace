import React from 'react';
import { Title } from '../../units';
import { ExplanatoryCard } from './ExplanatoryCard';
import howItWorksStyles from './HowItWorks.module.scss';

const howItWorksClassName = 'how-it-works';

const HowItWorks = ({ content }) => {
  const { offerCards, description, title } = content;

  return (
    <div className={howItWorksStyles[howItWorksClassName]}>
      <Title description={description} heading="h2" title={title} />
      <div className={howItWorksStyles[`${howItWorksClassName}__container`]}>
        {offerCards.map((data, dataId) => (
          <ExplanatoryCard key={dataId} data={data} />
        ))}
      </div>
    </div>
  );
};

export { HowItWorks };
