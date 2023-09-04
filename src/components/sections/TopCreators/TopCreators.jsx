import React from 'react';
import './TopCreators.scss';
import { topCreatorsData } from '../../../mocks';
import { IconCode, Title } from '../../units';
import { UserCreators } from './UserCreators';

const TopCreators = () => (
  <section className="top-creators">
    <Title
      buttonIcon={IconCode.rocket}
      buttonTitle={topCreatorsData.buttonTitle}
      description={topCreatorsData.description}
      heading="h2"
      title={topCreatorsData.title}
    />
    <UserCreators />
  </section>
);

export { TopCreators };
