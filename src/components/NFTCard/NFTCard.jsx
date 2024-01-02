import React from 'react';
import './NFTCard.scss';
import classNames from 'classnames';
import { NFTDetails } from '../NFTDetails';
import { NftDetailedInformation } from './NFTDetailedInformation';

const NFTCard = ({ data, isDarkBackground }) => {
  const { image, nftDetails, nftDetailedInformation } = data;

  return (
    <div className={classNames('nft-card', { 'nft-card_is-dark-background': isDarkBackground })}>
      <div>
        <img alt={image.alt} src={image.src} />
      </div>
      <div className="nft-card__details">
        <NFTDetails data={nftDetails} />
      </div>
      {nftDetailedInformation && <NftDetailedInformation data={nftDetailedInformation} />}
    </div>
  );
};

export { NFTCard };
