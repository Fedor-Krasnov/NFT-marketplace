import React from 'react';
import { pageCheck } from '../../../helpers';
import { NFTCard } from '../../innerComponents';
import { Button, IconCode, Title } from '../../units';
import discoverMoreNfTsStyles from './DiscoverMoreNFTs.module.scss';

const discoverMoreNfTsClassName = 'discover-more-nfts';

const DiscoverMoreNfTs = ({ content }) => {
  const { nftCards, buttonLink, buttonIcon = IconCode.eye, buttonTitle, description, title, userName } = content;
  const { isMainPage } = pageCheck();

  return (
    <div className={discoverMoreNfTsStyles[discoverMoreNfTsClassName]}>
      <Title
        buttonIcon={buttonIcon}
        buttonTitle={buttonTitle}
        description={description}
        heading="h2"
        title={title}
        to={isMainPage ? '/browse-marketplace' : `/user-profile/${userName}`}
      />
      <div className={discoverMoreNfTsStyles[`${discoverMoreNfTsClassName}__card`]}>
        {nftCards.map((data, dataId) => (
          <NFTCard key={dataId} data={data} />
        ))}
      </div>
      <Button
        className={discoverMoreNfTsStyles[`${discoverMoreNfTsClassName}__button`]}
        icon={buttonIcon}
        outline
        title={buttonTitle}
        to={buttonLink}
        width="fill"
      />
    </div>
  );
};

export { DiscoverMoreNfTs };
