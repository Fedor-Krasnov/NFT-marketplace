import React from 'react';
import './HowItWorks.scss';
import { howItWorksData } from '../../../mocks';
import { Title } from '../../units/index.js';

const HowItWorks = () => {
  const { offerCards, image } = howItWorksData;

  return (
    <section className="how-it-works">
      <Title description={howItWorksData.description} heading="h2" title={howItWorksData.title} />
      <div className="how-it-works__container">
        <div className="explanatory-card">
          {/* <img alt={image.alt} src={image.src} />*/}
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: offerCards.offer }} />
            <p dangerouslySetInnerHTML={{ __html: offerCards.offerDescription }} />
          </div>
        </div>
        <div className="explanatory-card">
          {/* <img alt={image.alt} src={image.src} />*/}
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: offerCards.offer }} />
            <p dangerouslySetInnerHTML={{ __html: offerCards.offerDescription }} />
          </div>
        </div>
        <div className="explanatory-card">
          {/* <img alt={image.alt} src={image.src} />*/}
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: offerCards.offer }} />
            <p dangerouslySetInnerHTML={{ __html: offerCards.offerDescription }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { HowItWorks };
