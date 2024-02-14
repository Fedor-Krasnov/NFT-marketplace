import React from 'react';
import './DiscoverMoreNFTs.scss';
import { pageCheck } from '../../../helpers';
import { NFTCard } from '../../NFTCard';
import { Button, IconCode, Title } from '../../units';

const discoverMoreNfTsClassName = 'discover-more-nfts';

const DiscoverMoreNfTs = ({ data }) => {
  const { nftCards, buttonLink, buttonIcon = IconCode.eye, buttonTitle, description, title, userName } = data;
  const { isMainPage } = pageCheck();

  return (
    <section className={discoverMoreNfTsClassName}>
      <Title
        buttonIcon={buttonIcon}
        buttonTitle={buttonTitle}
        description={description}
        heading="h2"
        title={title}
        to={isMainPage ? '/browse-marketplace' : `/user-profile/${userName}`}
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
