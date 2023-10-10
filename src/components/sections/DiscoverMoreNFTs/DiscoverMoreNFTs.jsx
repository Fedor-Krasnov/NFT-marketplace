import React from 'react';
import './DiscoverMoreNFTs.scss';
import { discoverMoreNfTsData, topCreatorsData } from '../../../mocks';
import { Button, IconCode, Title } from '../../units/index.js';

const DiscoverMoreNfTs = () => (
  <section className="discover-more-nfts">
    <Title
      buttonIcon={IconCode.eye}
      buttonTitle={discoverMoreNfTsData.buttonTitle}
      description={discoverMoreNfTsData.description}
      heading="h2"
      title={discoverMoreNfTsData.title}
      to={discoverMoreNfTsData.buttonLink}
    />
    <Button
      className="discover-more-nfts__button"
      icon={IconCode.eye}
      outline
      title={discoverMoreNfTsData.buttonTitle}
      to={discoverMoreNfTsData.buttonLink}
      width="fill"
    />
  </section>
);

export { DiscoverMoreNfTs };
