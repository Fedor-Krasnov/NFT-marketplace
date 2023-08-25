import React from 'react';
import './NFTCard.scss';
import { NFTDetails } from '../NFTDetails';

const NFTCard = () => (
  <div className="nft-card">
    <div className="nft-card__img">
      <img alt="nft-card" src="../../src-old/media/nft-cards/space-walking.jpg" />
    </div>
    <div className="nft-card__details">
      <NFTDetails />
    </div>
  </div>
);

export { NFTCard };
