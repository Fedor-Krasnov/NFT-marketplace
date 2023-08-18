import React from 'react';
import './HeroSection.scss';
import { heroSection } from '../../../mocks';
import { NFTCard } from '../../NFTCard';
import { Button, IconCode, Statistics } from '../../units';
import { Title } from '../../units/Title';

const HeroSection = () => {
  const { title, description, statistics } = heroSection;

  return (
    <section className="hero-section">
      <div className="hero-section__details">
        <Title description={description} title={title} />
        <div className="hero-section__img hero-section__img--mobile">
          <NFTCard />
        </div>
        <Button icon={IconCode.rocket} title="Get Started" />
        <Statistics className="hero-section__statistics" statistics={statistics} />
      </div>
      <div className="hero-section__img hero-section__img--desktop">
        <NFTCard />
      </div>
    </section>
  );
};

export { HeroSection };
