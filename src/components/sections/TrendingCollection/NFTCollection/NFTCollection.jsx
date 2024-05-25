import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { NFTDetails } from '../../../innerComponents';
import nftCollectionStyles from './NFTCollection.module.scss';

const nftCollectionClassName = 'nft-collection';

const NFTCollection = ({ className, data }) => {
  const { nftCollections, nftDetails } = data;
  const { mainImage, images, counts } = nftCollections;

  return (
    <div className={classNames(nftCollectionStyles[nftCollectionClassName], className)}>
      <img
        alt={mainImage.alt}
        className={nftCollectionStyles[`${nftCollectionClassName}__main-image`]}
        src={mainImage.src}
      />
      <div className={nftCollectionStyles[`${nftCollectionClassName}__images`]}>
        {images.map(({ image }) => (
          <div key={image.src}>
            <img alt={image.alt} src={image.src} />
          </div>
        ))}
        <div>
          <Link to="#">
            <div className={nftCollectionStyles[`${nftCollectionClassName}__counts`]}>{counts}+</div>
          </Link>
        </div>
      </div>
      <div className={nftCollectionStyles[`${nftCollectionClassName}__details`]}>
        <NFTDetails data={nftDetails} />
      </div>
    </div>
  );
};

export { NFTCollection };
