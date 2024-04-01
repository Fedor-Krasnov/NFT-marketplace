import React from 'react';
import { topCreatorsData } from '../../../mocks';
import { Button, IconCode, Title } from '../../units';
import topCreatorsStyles from './TopCreators.module.scss';
import { UserCreators } from './UserCreators';

const topCreatorsClassName = 'top-creators';

const TopCreators = () => (
  <section className={topCreatorsStyles[topCreatorsClassName]}>
    <Title
      buttonIcon={IconCode.rocket}
      buttonTitle={topCreatorsData.buttonTitle}
      description={topCreatorsData.description}
      heading="h2"
      title={topCreatorsData.title}
      to={topCreatorsData.buttonLink}
    />
    <UserCreators />
    <Button
      className={topCreatorsStyles[`${topCreatorsClassName}__button`]}
      icon={IconCode.rocket}
      outline
      title={topCreatorsData.buttonTitle}
      to={topCreatorsData.buttonLink}
      width="fill"
    />
  </section>
);

export { TopCreators };
