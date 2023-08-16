import React from 'react';
import './HeroSection.scss';
import { heroSection } from '../../../mocks';
import { NFTCard } from '../../NFTCard';
import { Button, IconCode, Statistics } from '../../units';
import { Title } from '../../units/Title';

const HeroSection = () => {
  const { title, description, statistics } = heroSection;

  return (
    <section className="hero-section digital-art">
      <div className="digital-art__details">
        <Title description={description} title={title} />
        <div className="digital-art__img digital-art__img--mobile">{/* {{ > units / digital - art_nft - card}}*/}</div>
        <Button icon={IconCode.rocket} title="Get Started" />
        <Statistics className="hero-section__statistics" statistics={statistics} />
      </div>
      <div className="digital-art__img digital-art__img--desktop">
        <NFTCard />
      </div>
    </section>
  );
};

export { HeroSection };
