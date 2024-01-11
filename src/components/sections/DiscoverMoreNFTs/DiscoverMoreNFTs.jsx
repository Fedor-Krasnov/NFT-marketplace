import React from 'react';
import './DiscoverMoreNFTs.scss';
import { discoverMoreNfTsData } from '../../../mocks';
import { NFTCard } from '../../NFTCard';
import { Button, IconCode, Title } from '../../units';

const discoverMoreNfTsClassName = 'discover-more-nfts';

const DiscoverMoreNfTs = () => {
  const { nftCards, buttonLink, buttonTitle, description, title } = discoverMoreNfTsData;

  return (
    <section className={discoverMoreNfTsClassName}>
      <Title
        buttonIcon={IconCode.eye}
        buttonTitle={buttonTitle}
        description={description}
        heading="h2"
        title={title}
        to={buttonLink}
      />
      <div className={`${discoverMoreNfTsClassName}__card`}>
        {nftCards.map((data, dataId) => (
          <NFTCard key={dataId} data={data} />
        ))}
      </div>
      <Button
        className={`${discoverMoreNfTsClassName}__button`}
        icon={IconCode.eye}
        outline
        title={buttonTitle}
        to={buttonLink}
        width="fill"
      />
    </section>
  );
};

export { DiscoverMoreNfTs };
