import React from 'react';
import classNames from 'classnames';
import { NFTDetails } from '../NFTDetails';
import nftCardStyles from './NFTCard.module.scss';
import { NftDetailedInformation } from './NFTDetailedInformation';

const nftCardClassName = 'nft-card';

const NFTCard = ({ data, isDarkBackground }) => {
  const { image, nftDetails, nftDetailedInformation } = data;

  return (
    <div
      className={classNames(nftCardStyles[nftCardClassName], {
        [nftCardStyles[`${nftCardClassName}_is-dark-background`]]: isDarkBackground,
      })}
    >
      <div>
        <img alt={image.alt} src={image.src} />
      </div>
      <div className={nftCardStyles[`${nftCardClassName}__details`]}>
        <NFTDetails data={nftDetails} />
      </div>
      {nftDetailedInformation && <NftDetailedInformation data={nftDetailedInformation} />}
    </div>
  );
};

export { NFTCard };
