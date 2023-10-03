import React from 'react';
import './HowItWorks.scss';
import { howItWorksData } from '../../../mocks';
import { Title } from '../../units/index.js';

const HowItWorks = () => (
  <section className="how-it-works">
    <Title description={howItWorksData.description} heading="h2" title={howItWorksData.title} />
  </section>
);

export { HowItWorks };
