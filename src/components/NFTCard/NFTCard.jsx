import React from 'react';
import './NFTCard.scss';
import { NftDetailedInformation } from '../NFTDetailedInformation/index.js';
import { NFTDetails } from '../NFTDetails';

const NFTCard = ({ data }) => {
  const { image, nftDetails, nftDetailedInformation } = data;

  return (
    <div className="nft-card">
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
