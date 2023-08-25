import React from 'react';
import './NFTCollection.scss';
import { NFTDetails } from '../../../NFTDetails/index.js';

const NFTCollection = () => (
  <div className="nft-collection">
    <img alt="nft" className="main_nft" src="../../src-old/media/nft-cards/dog-nft.svg" />
    <div className="nft-collection__secondary-nft">
      <div>
        <img alt="nft" src="../../src-old/media/nft-cards/cat-nft.svg" />
      </div>
      <div>
        <img alt="nft" src="../../src-old/media/nft-cards/bear-nft.svg" />
      </div>
      <div>
        <a href="">
          <div className="nft-counter__border">1488+</div>
        </a>
      </div>
    </div>
    <div className="nft-collection__details">
      <NFTDetails />
    </div>
  </div>
);

export { NFTCollection };
