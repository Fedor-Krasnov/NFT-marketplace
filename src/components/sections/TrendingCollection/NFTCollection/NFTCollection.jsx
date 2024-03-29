import React from 'react';
import './NFTCollection.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { NFTDetails } from '../../../NFTDetails';

const nftCollectionClassName = 'nft-collection';

const NFTCollection = ({ className, data }) => {
  const { nftCollections, nftDetails } = data;
  const { mainImage, images, counts } = nftCollections;

  return (
    <div className={classNames(nftCollectionClassName, className)}>
      <img alt={mainImage.alt} className={`${nftCollectionClassName}__main-image`} src={mainImage.src} />
      <div className={`${nftCollectionClassName}__images`}>
        {images.map(({ image }) => (
          <div key={image.src}>
            <img alt={image.alt} src={image.src} />
          </div>
        ))}
        <div>
          <Link to="tmp">
            <div className={`${nftCollectionClassName}__counts`}>{counts}+</div>
          </Link>
        </div>
      </div>
      <div className={`${nftCollectionClassName}__details`}>
        <NFTDetails data={nftDetails} />
      </div>
    </div>
  );
};

export { NFTCollection };
