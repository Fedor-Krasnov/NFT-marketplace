import React from 'react';
import './DiscoverMoreNFTs.scss';
import { NFTCard } from '../../NFTCard';
import { Button, IconCode, Title } from '../../units';

const discoverMoreNfTsClassName = 'discover-more-nfts';

const DiscoverMoreNfTs = ({ data }) => {
  const { nftCards, buttonLink, buttonIcon = IconCode.eye, buttonTitle, description, title } = data;

  return (
    <section className={discoverMoreNfTsClassName}>
      <Title
        buttonIcon={buttonIcon}
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
        icon={buttonIcon}
        outline
        title={buttonTitle}
        to={buttonLink}
        width="fill"
      />
    </section>
  );
};

export { DiscoverMoreNfTs };
