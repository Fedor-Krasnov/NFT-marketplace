import React from 'react';
import { topCreatorsData } from '../../../mocks';
import { Button, IconCode, Title } from '../../units';
import { TitleSize } from '../../units/Title/types';
import topCreatorsStyles from './TopCreators.module.scss';
import { UserCreators } from './UserCreators';

const topCreatorsClassName = 'top-creators';

const TopCreators = ({ content }) => (
  <div className={topCreatorsStyles[topCreatorsClassName]}>
    <Title
      buttonIcon={IconCode.rocket}
      buttonTitle={topCreatorsData.buttonTitle}
      description={topCreatorsData.description}
      heading={TitleSize.h2}
      title={topCreatorsData.title}
      to={topCreatorsData.buttonLink}
    />
    <UserCreators content={content} />
    <Button
      className={topCreatorsStyles[`${topCreatorsClassName}__button`]}
      icon={IconCode.rocket}
      outline
      title={topCreatorsData.buttonTitle}
      to={topCreatorsData.buttonLink}
      width="fill"
    />
  </div>
);

export { TopCreators };
