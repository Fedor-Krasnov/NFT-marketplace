import React from 'react';
import './NFTCard.scss';
import { NFTDetails } from '../NFTDetails';

const NFTCard = ({ data }) => {
  const { image, nftDetails } = data;

  return (
    <div className="nft-card">
      <div className="nft-card__img">
        <img alt={image.alt} src={image.src} />
      </div>
      <div className="nft-card__details">
        <NFTDetails data={nftDetails} />
      </div>
    </div>
  );
};

export { NFTCard };
