import React from 'react';
import './HeroSection.scss';
import { heroSectionData } from '../../../mocks';
import { NFTCard } from '../../NFTCard';
import { Button, IconCode, Statistics } from '../../units';
import { Title } from '../../units/Title';

const HeroSection = () => {
  const { description, nftCard, statistics, title } = heroSectionData;

  return (
    <section className="hero-section">
      <div className="hero-section__details">
        <Title description={description} title={title} />
        <div className="hero-section__img hero-section__img--mobile">
          <NFTCard data={nftCard} />
        </div>
        <Button icon={IconCode.rocket} title="Get Started" />
        <Statistics className="hero-section__statistics" statistics={statistics} />
      </div>
      <div className="hero-section__img hero-section__img--desktop">
        <NFTCard data={nftCard} />
      </div>
    </section>
  );
};

export { HeroSection };
