import React from 'react';
import classNames from 'classnames';
import { heroSectionData } from '../../../mocks';
import { NFTCard } from '../../NFTCard';
import { Button, IconCode, Statistics } from '../../units';
import { Title } from '../../units/Title';
import heroSectionStyles from './HeroSection.module.scss';

const heroSectionClassName = 'hero-section';

const HeroSection = () => {
  const { description, nftCard, statistics, title } = heroSectionData;

  return (
    <section className={heroSectionStyles[heroSectionClassName]}>
      <div className={heroSectionStyles[`${heroSectionClassName}__details`]}>
        <Title description={description} heading="h1" title={title} />
        <div
          className={classNames(
            heroSectionStyles[`${heroSectionClassName}__img`],
            heroSectionStyles[`${heroSectionClassName}__img--mobile`],
          )}
        >
          <NFTCard data={nftCard} />
        </div>
        <Button icon={IconCode.rocket} title="Get Started" to="/authorization" />
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
    </section>
  );
};

export { HeroSection };
