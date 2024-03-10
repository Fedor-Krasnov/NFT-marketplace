import React from 'react';
import './HeroSection.scss';
import classNames from 'classnames';
import { heroSectionData } from '../../../mocks';
import { NFTCard } from '../../NFTCard';
import { Button, IconCode, Statistics } from '../../units';
import { Title } from '../../units/Title';

const heroSectionClassName = 'hero-section';

const HeroSection = () => {
  const { description, nftCard, statistics, title } = heroSectionData;

  return (
    <section className={heroSectionClassName}>
      <div className={`${heroSectionClassName}__details`}>
        <Title description={description} heading="h1" title={title} />
        <div className={classNames(`${heroSectionClassName}__img`, `${heroSectionClassName}__img--mobile`)}>
          <NFTCard data={nftCard} />
        </div>
        <Button icon={IconCode.rocket} title="Get Started" to="/authorization" />
        <Statistics className={`${heroSectionClassName}__statistics`} statistics={statistics} />
      </div>
      <div className={classNames(`${heroSectionClassName}__img`, `${heroSectionClassName}__img--desktop`)}>
        <NFTCard data={nftCard} />
      </div>
    </section>
  );
};

export { HeroSection };
