import React from 'react';
import './NFTCollection.scss';
import { NFTDetails } from '../../../NFTDetails/index.js';

const NFTCollection = ({ data }) => {
  const { nftCollections, nftDetails } = data;
  const { mainImage, images, counts } = nftCollections;

  return (
    <div className="nft-collection">
      <img alt={mainImage.alt} className="nft-collection__main-image" src={mainImage.src} />
      <div className="nft-collection__images">
        {images.map(({ image }) => (
          <div key={image.src}>
            <img alt={image.alt} src={image.src} />
          </div>
        ))}
        <div>
          <a href="">
            <div className="nft-collection__counts">{counts}+</div>
          </a>
        </div>
      </div>
      <div className="nft-collection__details">
        <NFTDetails data={nftDetails} />
      </div>
    </div>
  );
};

export { NFTCollection };
