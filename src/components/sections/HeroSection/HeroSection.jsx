import React from 'react';
import classNames from 'classnames';
import { NFTCard } from '../../innerComponents';
import { Button, IconCode, Statistics } from '../../units';
import { Title } from '../../units/Title';
import heroSectionStyles from './HeroSection.module.scss';
import { TitleSize } from '../../units/Title/types';

const heroSectionClassName = 'hero-section';

const HeroSection = ({ content }) => {
  const { description, nftCard, statistics, title } = content;

  return (
    <div className={heroSectionStyles[heroSectionClassName]}>
      <div className={heroSectionStyles[`${heroSectionClassName}__details`]}>
        <Title
          className={heroSectionStyles[`${heroSectionClassName}__description`]}
          description={description}
          heading={TitleSize.h1}
          title={title}
        />
        <div
          className={classNames(
            heroSectionStyles[`${heroSectionClassName}__img`],
            heroSectionStyles[`${heroSectionClassName}__img--mobile`],
          )}
        >
          <NFTCard data={nftCard} />
        </div>
        <Button
          className={heroSectionStyles[`${heroSectionClassName}__button`]}
          icon={IconCode.rocket}
          title="Get Started"
          to="/authorization"
        />
        <Statistics className={heroSectionStyles[`${heroSectionClassName}__statistics`]} statistics={statistics} />
      </div>
      <div
        className={classNames(
          heroSectionStyles[`${heroSectionClassName}__img`],
          heroSectionStyles[`${heroSectionClassName}__img--desktop`],
        )}
      >
        <NFTCard data={nftCard} />
      </div>
    </div>
  );
};

export { HeroSection };
