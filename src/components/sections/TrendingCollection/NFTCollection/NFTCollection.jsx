import React from 'react';
import './NFTCollection.scss';
import classNames from 'classnames';
import { NFTDetails } from '../../../NFTDetails/index.js';

const NFTCollection = ({ className, data }) => {
  const { nftCollections, nftDetails } = data;
  const { mainImage, images, counts } = nftCollections;

  return (
    <div className={classNames('nft-collection', className)}>
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
